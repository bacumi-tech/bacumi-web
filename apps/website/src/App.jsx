import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import GDPR from './pages/GDPR';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import PrivacyPolicy from './pages/PrivacyPolicy';
import DashboardDocs from './pages/docs/DashboardDocs';
import FilteringSearchDocs from './pages/docs/FilteringSearchDocs';
import PersonalViewsDocs from './pages/docs/PersonalViewsDocs';
import PrDetailsDocs from './pages/docs/PrDetailsDocs';
import PrPulseDocsIndex from './pages/docs/PrPulseDocsIndex';
import TeamInsightsDocs from './pages/docs/TeamInsightsDocs';
import DocsHub from './pages/docs/DocsHub';
import VoiceComposerDocsIndex from './pages/docs/voice-composer/VoiceComposerDocsIndex';
import VoiceComposerGettingStarted from './pages/docs/voice-composer/VoiceComposerGettingStarted';
import VoiceComposerDictationWorkflow from './pages/docs/voice-composer/VoiceComposerDictationWorkflow';
import VoiceComposerSettingsDocs from './pages/docs/voice-composer/VoiceComposerSettingsDocs';
import VoiceComposerPrivacyDocs from './pages/docs/voice-composer/VoiceComposerPrivacyDocs';
import DeveloperScratchpadDocsIndex from './pages/docs/developer-scratchpad/DeveloperScratchpadDocsIndex';
import DeveloperScratchpadGettingStarted from './pages/docs/developer-scratchpad/DeveloperScratchpadGettingStarted';
import DeveloperScratchpadToolsDocs from './pages/docs/developer-scratchpad/DeveloperScratchpadToolsDocs';
import DeveloperScratchpadThemesDocs from './pages/docs/developer-scratchpad/DeveloperScratchpadThemesDocs';
import DeveloperScratchpadPrivacyDocs from './pages/docs/developer-scratchpad/DeveloperScratchpadPrivacyDocs';
import ProductCompanyVerify from './pages/ProductCompanyVerify';
import ProductPulse from './pages/ProductPulse';
import ProductPulsePro from './pages/ProductPulsePro';
import BusinessSoftware from './pages/BusinessSoftware';
import DesktopApps from './pages/DesktopApps';
import Products from './pages/Products';
import TermsConditions from './pages/TermsConditions';
import Trust from './pages/Trust';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="/products" element={<Products />} />
        <Route path="/solutions" element={<Navigate replace to="/products" />} />
        <Route path="/products/business-software" element={<BusinessSoftware />} />
        <Route path="/products/desktop-apps" element={<DesktopApps />} />
        <Route path="/products/pulse" element={<ProductPulse />} />
        <Route path="/products/pr-pulse-pro" element={<ProductPulsePro />} />
        <Route path="/products/company-verify" element={<ProductCompanyVerify />} />
        <Route path="/products/pr-pulse" element={<Navigate replace to="/products/pulse" />} />
        <Route path="/products/governance" element={<Navigate replace to="/products" />} />
        <Route path="/products/finops" element={<Navigate replace to="/products" />} />
        <Route path="/products/tempo" element={<Navigate replace to="/products" />} />

        <Route path="/docs/pr-pulse" element={<PrPulseDocsIndex />} />
        <Route path="/docs/pr-pulse/dashboard" element={<DashboardDocs />} />
        <Route path="/docs/pr-pulse/filtering-and-search" element={<FilteringSearchDocs />} />
        <Route path="/docs/pr-pulse/personal-views" element={<PersonalViewsDocs />} />
        <Route path="/docs/pr-pulse/pr-details" element={<PrDetailsDocs />} />
        <Route path="/docs/pr-pulse/team-insights" element={<TeamInsightsDocs />} />
        <Route path="/docs/voice-composer" element={<VoiceComposerDocsIndex />} />
        <Route path="/docs/voice-composer/getting-started" element={<VoiceComposerGettingStarted />} />
        <Route path="/docs/voice-composer/dictation-workflow" element={<VoiceComposerDictationWorkflow />} />
        <Route path="/docs/voice-composer/settings" element={<VoiceComposerSettingsDocs />} />
        <Route path="/docs/voice-composer/privacy" element={<VoiceComposerPrivacyDocs />} />
        <Route path="/docs/developer-scratchpad" element={<DeveloperScratchpadDocsIndex />} />
        <Route path="/docs/developer-scratchpad/getting-started" element={<DeveloperScratchpadGettingStarted />} />
        <Route path="/docs/developer-scratchpad/tools" element={<DeveloperScratchpadToolsDocs />} />
        <Route path="/docs/developer-scratchpad/themes" element={<DeveloperScratchpadThemesDocs />} />
        <Route path="/docs/developer-scratchpad/privacy" element={<DeveloperScratchpadPrivacyDocs />} />
        <Route path="/docs" element={<DocsHub />} />
        <Route path="/docs/pulse/dashboard" element={<Navigate replace to="/docs/pr-pulse/dashboard" />} />
        <Route path="/docs/pulse/filtering-search" element={<Navigate replace to="/docs/pr-pulse/filtering-and-search" />} />
        <Route path="/docs/pulse/personal-views" element={<Navigate replace to="/docs/pr-pulse/personal-views" />} />
        <Route path="/docs/pulse/pr-details" element={<Navigate replace to="/docs/pr-pulse/pr-details" />} />
        <Route path="/docs/pulse/team-insights" element={<Navigate replace to="/docs/pr-pulse/team-insights" />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/gdpr" element={<GDPR />} />
        <Route path="/trust" element={<Trust />} />

        <Route path="/legal/privacy" element={<PrivacyPolicy />} />
        <Route path="/legal/terms" element={<TermsConditions />} />
        <Route path="/legal/gdpr" element={<GDPR />} />
        <Route path="/legal/trust" element={<Trust />} />
      </Routes>
    </Layout>
  );
}

export default App;
