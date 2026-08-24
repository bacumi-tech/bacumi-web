<p align="center">
  <img src="apps/website/public/images/logo.png" alt="Bacumi" width="325">
</p>

# Bacumi Web

Public source for [bacumi.com](https://bacumi.com), including the implemented React
website, public product information, documentation, trust, and legal pages.

## Local development

Requirements: Node.js 24 and pnpm 11.15.1.

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

Required checks:

```bash
pnpm lint
pnpm test
pnpm build
pnpm test:e2e
```

The repository is publicly visible for transparency but is not open source. See
[LICENSE](LICENSE), [BRAND.md](BRAND.md), and
[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
