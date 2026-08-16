import { expect, test } from '@playwright/test';

const canonicalRoutes = [
  { path: '/products', heading: 'A clear portfolio for better work outcomes' },
  { path: '/products/pulse', heading: /PR Pulse/ },
  { path: '/products/pr-pulse-pro', heading: 'PR Pulse Pro' },
  { path: '/products/company-verify', heading: 'Company Verify' },
  { path: '/docs/pr-pulse', heading: 'PR Pulse Documentation', docs: true },
  { path: '/docs/pr-pulse/dashboard', heading: 'Core Dashboard', docs: true },
  { path: '/docs/pr-pulse/filtering-and-search', heading: 'Filtering and Search', docs: true },
  { path: '/docs/pr-pulse/personal-views', heading: 'Personal Views', docs: true },
  { path: '/docs/pr-pulse/pr-details', heading: 'PR Details and Quick Actions', docs: true },
  { path: '/docs/pr-pulse/team-insights', heading: 'Team Insights', docs: true }
];

const capturePageErrors = (page) => {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  return errors;
};

const expectNoPageErrors = (errors) => {
  expect(errors, 'uncaught browser errors').toEqual([]);
};

const expectNoPageOverflow = async (page) => {
  await expect
    .poll(() =>
      page.evaluate(
        () => document.documentElement.scrollWidth <= document.documentElement.clientWidth
      )
    )
    .toBe(true);
};

test('canonical public routes render their unique headings and valid documentation images', async ({ page }) => {
  const pageErrors = capturePageErrors(page);
  let documentationImageCount = 0;

  for (const route of canonicalRoutes) {
    await test.step(route.path, async () => {
      pageErrors.splice(0);

      const response = await page.goto(route.path);
      expect(response?.ok(), `${route.path} returned an unsuccessful response`).toBe(true);

      const heading = page.getByRole('heading', {
        level: 1,
        name: route.heading,
        exact: typeof route.heading === 'string'
      });
      await expect(heading).toHaveCount(1);
      await expect(heading).toBeVisible();

      if (route.docs) {
        const documentationArticle = page.getByRole('article');
        await expect(documentationArticle).toHaveCount(1);

        const levelOneHeadings = documentationArticle.getByRole('heading', { level: 1 });
        await expect(levelOneHeadings).toHaveCount(1);

        const documentationImages = documentationArticle.getByRole('img');
        const imageCount = await documentationImages.count();
        documentationImageCount += imageCount;

        for (let index = 0; index < imageCount; index += 1) {
          const image = documentationImages.nth(index);
          await image.scrollIntoViewIfNeeded();
          await expect
            .poll(() => image.evaluate((element) => element.complete && element.naturalWidth > 0))
            .toBe(true);
        }
      }

      expectNoPageErrors(pageErrors);
    });
  }

  expect(documentationImageCount).toBeGreaterThan(0);
});

test('the PR Pulse compatibility alias replaces itself with the canonical route', async ({ page }) => {
  const pageErrors = capturePageErrors(page);

  const productsResponse = await page.goto('/products');
  expect(productsResponse?.ok()).toBe(true);
  const historyLengthBeforeAlias = await page.evaluate(() => window.history.length);

  pageErrors.splice(0);
  const aliasResponse = await page.goto('/products/pr-pulse');
  expect(aliasResponse?.ok()).toBe(true);
  await expect(page).toHaveURL(/\/products\/pulse$/);
  await expect(page.getByRole('heading', { level: 1, name: /PR Pulse/ })).toHaveCount(1);
  expect(await page.evaluate(() => window.history.length)).toBe(historyLengthBeforeAlias + 1);

  await page.goBack();
  await expect(page).toHaveURL(/\/products$/);
  expectNoPageErrors(pageErrors);
});

test('desktop Solutions navigation preserves hover ownership for keyboard activation', async ({
  page,
  isMobile
}) => {
  test.skip(isMobile, 'desktop navigation contract');
  const pageErrors = capturePageErrors(page);

  const homeResponse = await page.goto('/');
  expect(homeResponse?.ok()).toBe(true);

  const homeLink = page.getByRole('banner').getByRole('link', { name: 'Bacumi home' });
  const solutionsButton = page.getByRole('button', { name: 'Solutions', exact: true });
  const prPulseLink = page.getByRole('link', {
    name: /^PR Pulse\s+Live\s+Pull Request Operations$/i
  });

  await solutionsButton.hover();
  await expect(solutionsButton).toHaveAttribute('aria-expanded', 'true');
  await expect(prPulseLink).toBeVisible();

  await solutionsButton.focus();
  await page.keyboard.press('Enter');
  await expect(solutionsButton).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Enter');
  await expect(solutionsButton).toHaveAttribute('aria-expanded', 'false');

  await homeLink.hover();
  await solutionsButton.hover();
  await expect(solutionsButton).toHaveAttribute('aria-expanded', 'true');

  await solutionsButton.focus();
  await page.keyboard.press('Space');
  await expect(solutionsButton).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Space');
  await expect(solutionsButton).toHaveAttribute('aria-expanded', 'false');

  await solutionsButton.press('Enter');
  await expect(solutionsButton).toHaveAttribute('aria-expanded', 'true');
  await prPulseLink.click();
  await expect(page).toHaveURL(/\/products\/pulse$/);
  await expect(solutionsButton).toHaveAttribute('aria-expanded', 'false');
  expectNoPageErrors(pageErrors);
});

test('mobile navigation reaches canonical documentation without page-level overflow', async ({
  page,
  isMobile
}) => {
  test.skip(!isMobile, 'mobile navigation contract');
  const pageErrors = capturePageErrors(page);

  const homeResponse = await page.goto('/');
  expect(homeResponse?.ok()).toBe(true);
  await page.getByRole('button', { name: 'Toggle menu' }).click();
  await page.getByRole('link', { name: 'Docs', exact: true }).click();

  await expect(page).toHaveURL(/\/docs\/pr-pulse$/);
  await expect(
    page.getByRole('heading', { level: 1, name: 'PR Pulse Documentation', exact: true })
  ).toBeVisible();
  await expectNoPageOverflow(page);

  const contentResponse = await page.goto('/docs/pr-pulse/filtering-and-search');
  expect(contentResponse?.ok()).toBe(true);
  await expect(
    page.getByRole('heading', { level: 1, name: 'Filtering and Search', exact: true })
  ).toBeVisible();
  await expectNoPageOverflow(page);
  expectNoPageErrors(pageErrors);
});
