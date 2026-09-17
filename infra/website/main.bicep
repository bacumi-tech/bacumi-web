targetScope = 'resourceGroup'

@description('Dedicated Static Web App environment. Staging and production are separate resources.')
@allowed([
  'staging'
  'production'
])
param environmentName string

@description('Short prefix used in Azure resource names.')
@minLength(3)
@maxLength(20)
param resourcePrefix string = 'bacumi'

@description('Azure region selected for Static Web Apps.')
param location string = resourceGroup().location

@description('Protected resource ID output from the matching Platform intake deployment.')
param backendFunctionResourceId string

@description('Azure region of the linked Function App backend.')
param backendRegion string

@description('Optional common resource tags.')
param tags object = {}

var environmentShort = environmentName == 'production' ? 'prod' : 'stg'
var nameSeed = take(uniqueString(subscription().id, resourceGroup().id, environmentName), 6)
var staticSiteName = '${resourcePrefix}-website-${environmentShort}-${nameSeed}'
var commonTags = union(tags, {
  Environment: environmentName
  Workload: 'public-website'
})

resource staticSite 'Microsoft.Web/staticSites@2025-03-01' = {
  name: staticSiteName
  location: location
  tags: commonTags
  sku: {
    name: 'Standard'
    tier: 'Standard'
  }
  properties: {
    allowConfigFileUpdates: true
    enterpriseGradeCdnStatus: 'Disabled'
    publicNetworkAccess: 'Enabled'
    stagingEnvironmentPolicy: 'Disabled'
  }
}

resource intakeBackend 'Microsoft.Web/staticSites/linkedBackends@2025-03-01' = {
  parent: staticSite
  name: 'website-intake'
  kind: 'functionapp'
  properties: {
    backendResourceId: backendFunctionResourceId
    region: backendRegion
  }
}

output staticWebAppName string = staticSite.name
output staticWebAppResourceId string = staticSite.id
output defaultHostname string = staticSite.properties.defaultHostname
