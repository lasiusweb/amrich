import { test, expect } from '@playwright/test';

test.describe('Legal Pages', () => {
  test('privacy policy page loads', async ({ page }) => {
    await page.goto('/privacy-policy');
    await expect(page.locator('h1').first()).toBeVisible();
  });

  test('terms page loads', async ({ page }) => {
    await page.goto('/terms-disclaimer');
    await expect(page.locator('h1').first()).toBeVisible();
  });
});

test.describe('Sustainability', () => {
  test('sustainability page loads', async ({ page }) => {
    await page.goto('/sustainability');
    await expect(page.locator('h1').first()).toBeVisible();
  });
});

test.describe('Testimonials', () => {
  test('testimonials page loads', async ({ page }) => {
    await page.goto('/testimonials');
    await expect(page.locator('h1').first()).toBeVisible();
  });
});

test.describe('Downloads', () => {
  test('downloads page loads', async ({ page }) => {
    await page.goto('/downloads');
    await expect(page.locator('h1').first()).toContainText('Downloads');
  });

  test('brochure PDF is accessible', async ({ page }) => {
    const resp = await page.request.get('/files/amrich-brochure.pdf');
    expect(resp.status()).toBe(200);
    const contentType = resp.headers()['content-type'] || '';
    expect(contentType).toContain('application/pdf');
  });
});
