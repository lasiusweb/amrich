import { test, expect } from '@playwright/test';

test.describe('SEO: Meta Tags', () => {
  test('homepage has correct meta title', async ({ page }) => {
    await page.goto('/');
    const title = await page.title();
    expect(title).toBeTruthy();
    expect(title.toLowerCase()).toContain('amrich');
  });

  test('homepage has meta description', async ({ page }) => {
    await page.goto('/');
    const desc = page.locator('meta[name="description"]');
    await expect(desc).toHaveAttribute('content');
    const content = await desc.getAttribute('content');
    expect(content?.length).toBeGreaterThan(10);
  });

  test('product page has JSON-LD product schema', async ({ page }) => {
    await page.goto('/products/probiotics-soil-care/pro-plus');
    await page.waitForLoadState('domcontentloaded');
    // Check that we find the Product schema (may be in different positions in DOM)
    const pageContent = await page.content();
    expect(pageContent).toContain('"@type":"Product"');
    expect(pageContent).toContain('"@type":"HowTo"');
    expect(pageContent).toContain('"@type":"FAQPage"');
  });

  test('product page has Open Graph tags', async ({ page }) => {
    await page.goto('/products/disease-stress-management/farmadine');
    const ogTitle = page.locator('meta[property="og:title"]');
    const ogDesc = page.locator('meta[property="og:description"]');
    const ogType = page.locator('meta[property="og:type"]');
    await expect(ogTitle).toHaveAttribute('content');
    await expect(ogDesc).toHaveAttribute('content');
    await expect(ogType).toHaveAttribute('content', 'website');
  });

  test('product page has Twitter Card tags', async ({ page }) => {
    await page.goto('/products/disease-stress-management/farmadine');
    const twitterCard = page.locator('meta[name="twitter:card"]');
    await expect(twitterCard).toHaveAttribute('content', 'summary_large_image');
  });
});
