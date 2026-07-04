import { test, expect } from '@playwright/test';

test('homepage loads and has visible heading', async ({ page }) => {
  await page.goto('/');
  // Ensure top-level heading is visible (site content has at least one H1)
  const h1 = page.locator('h1').first();
  await expect(h1).toBeVisible();
});
