import { test, expect } from '@playwright/test';

test.describe('Mobile Responsiveness', () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test('homepage works on mobile viewport', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1').first()).toBeVisible();
  });

  test('navigation is collapsed/hamburger on mobile', async ({ page }) => {
    await page.goto('/');
    const mobileNavBtn = page.locator('.hamburger, .mobile-menu-toggle, button[aria-label*="Menu"]');
    if (await mobileNavBtn.isVisible()) {
      await mobileNavBtn.click();
      await expect(page.locator('nav[aria-label="Main navigation"] a').first()).toBeVisible();
    }
  });

  test('product page works on tablet viewport', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/products/water-quality-ammonia-control/gaso-clean');
    await expect(page.locator('h1').first()).toContainText('GASO CLEAN');
  });

  test('category page works on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/products/probiotics-soil-care');
    await expect(page.locator('h1').first()).toBeVisible();
    await expect(page.locator('.product-card').first()).toBeVisible();
  });
});

test.describe('Responsive Tables', () => {
  test('specs section is readable on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/products/feed-pond-preparers/omega-booster');
    await expect(page.getByText('Quick Specs')).toBeVisible();
  });
});

test.describe('Dark Mode', () => {
  test('dark mode toggle switches theme', async ({ page }) => {
    await page.goto('/');
    const themeToggle = page.locator('button.theme-toggle, button[aria-label*="theme"], button[aria-label*="Theme"]').first();
    if (await themeToggle.isVisible()) {
      await themeToggle.click();
      const htmlClass = await page.locator('html').getAttribute('class');
      expect(htmlClass).toContain('dark');
    }
  });
  
  test('dark mode persists on navigation', async ({ page }) => {
    await page.goto('/');
    const themeToggle = page.locator('button.theme-toggle, button[aria-label*="theme"], button[aria-label*="Theme"]').first();
    if (await themeToggle.isVisible()) {
      await themeToggle.click();
      await page.goto('/about');
      const htmlClass = await page.locator('html').getAttribute('class');
      expect(htmlClass).toContain('dark');
    }
  });
});
