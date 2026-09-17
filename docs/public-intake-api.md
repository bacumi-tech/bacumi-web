# Public website intake API

The Bacumi website uses two write-only, same-origin endpoints. They accept JSON request bodies up to 16 KiB. There are no public read, update, delete, or administration endpoints.

## Contact messages

`POST /api/contact`

```json
{
  "requestId": "3c3698d1-0f4c-4e57-9a42-b517ccb48855",
  "email": "person@example.com",
  "name": "Example Person",
  "category": "sales",
  "product": "pr-pulse-pro",
  "message": "I would like to discuss our pull request workflow.",
  "website": ""
}
```

Required fields are `requestId`, `email`, `category`, `message`, and `website`. `name` and `product` are optional strings. `requestId` is a UUID. Category is one of `sales`, `support`, `partnership`, or `other`.

## Pilot applications

`POST /api/pilots`

```json
{
  "requestId": "18e03e39-8cdc-49a2-89cc-428d5b42fac8",
  "email": "pilot@example.com",
  "name": "Example Applicant",
  "product": "voice-composer",
  "company": "Example Company",
  "platform": "macos",
  "useCase": "Dictating structured notes while moving between meetings.",
  "contactPermission": true,
  "website": ""
}
```

Required fields are `requestId`, `email`, `product`, `platform`, `contactPermission`, and `website`. `name`, `company`, and `useCase` are optional strings. Product is one of `pr-pulse-pro`, `company-verify`, or `voice-composer`. Platform is one of `macos`, `windows`, `linux`, or `not-applicable`. `contactPermission` must be `true`.

## Validation

Values are trimmed before validation. Ordinary international text is accepted. Email addresses must have valid syntax, must not contain header control characters, and may contain at most 254 characters.

| Field | Limit after trimming |
| --- | ---: |
| `name` | 100 characters |
| `company` | 160 characters |
| `message` | 10–4,000 characters |
| `useCase` | 0–1,500 characters |

`website` is an abuse-control field and should be left empty. Unexpected properties are rejected. Clients cannot supply status, timestamps, notification state, or retention dates.

## Responses

A stored submission and a recognised duplicate both return:

```http
HTTP/1.1 202 Accepted
Content-Type: application/json

{"accepted":true}
```

A validation error returns safe field codes and never echoes submitted values:

```http
HTTP/1.1 400 Bad Request
Content-Type: application/json

{"errors":{"email":"invalid_email","product":"product_unavailable"}}
```

Validation codes are deliberately small and do not include submitted values: `required`,
`invalid_length`, `invalid_value`, `invalid_email`, `invalid_product`, `invalid_request`,
`request_conflict`, and `product_unavailable`.

Other responses use the same error envelope:

| Status | Meaning | Example body |
| ---: | --- | --- |
| 400 | Invalid fields, unavailable pilot, changed payload for an existing contact request ID, or unexpected properties | `{"errors":{"product":"product_unavailable"}}` |
| 413 | Body exceeds 16 KiB | `{"errors":{"form":"body_too_large"}}` |
| 415 | Content type is not `application/json` | `{"errors":{"form":"media_type_invalid"}}` |
| 429 | Request limit reached; the response also includes `Retry-After` | `{"errors":{"form":"rate_limited"}}` |
| 503 | Intake is disabled or durable storage is temporarily unavailable | `{"errors":{"form":"unavailable"}}` |

Unknown routes return `404`; unsupported methods return `405`. A request with a filled abuse-control field receives the generic `202` response and is discarded.
