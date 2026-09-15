import { expect, test } from '@playwright/test';

const fillContact = async (page) => {
  await page.getByLabel('Email', { exact: true }).fill('person@example.com');
  await page.getByLabel('Category', { exact: true }).selectOption('support');
  await page.getByLabel('Message', { exact: true }).fill('Please help with my PR Pulse installation.');
};

test('pilot application uses allowlisted preselection and shows the generic acceptance response', async ({ page }) => {
  let submitted;
  await page.route('**/api/pilots', async (route) => {
    submitted = route.request().postDataJSON();
    await route.fulfill({
      status: 202,
      contentType: 'application/json',
      body: '{"accepted":true}'
    });
  });

  await page.goto('/pilots?product=pr-pulse-pro');
  await expect(page.getByLabel('Product', { exact: true })).toHaveValue('pr-pulse-pro');
  await page.getByLabel('Email', { exact: true }).fill('pilot@example.com');
  await page.getByLabel('You may contact me about this application').check();
  await page.getByRole('button', { name: 'Apply for a pilot' }).click();

  await expect(page.getByRole('status')).toContainText('Applying does not guarantee access');
  expect(submitted).toMatchObject({
    email: 'pilot@example.com',
    product: 'pr-pulse-pro',
    contactPermission: true,
    website: ''
  });
  expect(submitted.requestId).toMatch(/^[0-9a-f-]{36}$/i);
});

test('server field errors are announced and keep the contact message editable', async ({ page }) => {
  await page.route('**/api/contact', (route) =>
    route.fulfill({
      status: 400,
      contentType: 'application/json',
      body: '{"errors":{"email":"email_invalid"}}'
    })
  );
  await page.goto('/contact');
  await fillContact(page);
  await page.getByRole('button', { name: 'Send message' }).click();

  await expect(page.getByRole('alert')).toContainText('Enter a valid email address');
  await expect(page.getByLabel('Message', { exact: true })).toHaveValue('Please help with my PR Pulse installation.');
});

test('rate limits show retry guidance without clearing entered text', async ({ page }) => {
  await page.route('**/api/contact', (route) =>
    route.fulfill({
      status: 429,
      headers: { 'Retry-After': '30' },
      contentType: 'application/json',
      body: '{"errors":{"form":"rate_limited"}}'
    })
  );
  await page.goto('/contact');
  await fillContact(page);
  await page.getByRole('button', { name: 'Send message' }).click();

  await expect(page.getByRole('alert')).toContainText('wait 30 seconds');
  await expect(page.getByLabel('Message', { exact: true })).toHaveValue('Please help with my PR Pulse installation.');
});

test('service outages leave a working retry and fallback email', async ({ page }) => {
  await page.route('**/api/pilots', (route) =>
    route.fulfill({
      status: 503,
      contentType: 'application/json',
      body: '{"errors":{"form":"unavailable"}}'
    })
  );
  await page.goto('/pilots?product=voice-composer');
  await page.getByLabel('Email', { exact: true }).fill('pilot@example.com');
  await page.getByLabel('Use case', { exact: true }).fill('Hands-free drafting during focused work.');
  await page.getByLabel('You may contact me about this application').check();
  await page.getByRole('button', { name: 'Apply for a pilot' }).click();

  await expect(page.getByRole('alert')).toContainText('could not receive your application');
  await expect(page.getByRole('button', { name: 'Try again' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Apply by email' })).toHaveAttribute('href', /^mailto:/);
  await expect(page.getByLabel('Use case', { exact: true })).toHaveValue('Hands-free drafting during focused work.');
});

test('timed-out requests remain recoverable', async ({ page }) => {
  await page.route('**/api/contact', async (route) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    await route.fulfill({ status: 202, contentType: 'application/json', body: '{"accepted":true}' }).catch(() => {});
  });
  await page.goto('/contact');
  await fillContact(page);
  await page.getByRole('button', { name: 'Send message' }).click();

  await expect(page.getByRole('alert')).toContainText('took too long');
  await expect(page.getByRole('button', { name: 'Try again' })).toBeVisible();
});
