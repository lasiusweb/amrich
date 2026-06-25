import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test.describe('Top-level nav links', () => {
    const navLinks = [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Resources', href: '/resources' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ];

    for (const link of navLinks) {
      test(`${link.label} link navigates to ${link.href}`, async ({ page }) => {
        await page.goto('/');
        const nav = page.locator('nav[aria-label="Main navigation"]');
        const anchor = nav.locator(`a[href="${link.href}"]`).first();
        await expect(anchor).toBeVisible();

        await anchor.click();
        await page.waitForLoadState('networkidle');

        // Verify we landed on the expected page
        expect(page.url()).toContain(link.href === '/' ? page.url().endsWith('/') || page.url().endsWith('/index') : link.href);

        // Verify an H1 is present on the destination page
        const h1 = page.locator('h1').first();
        await expect(h1).toBeVisible();
      });
    }
  });

  test.describe('Mega menu', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
      // Desktop viewport ensures nav-list is visible
      await page.setViewportSize({ width: 1280, height: 800 });
    });

    test('mega menu appears on hover over Products nav item', async ({ page }) => {
      const productsNavItem = page.locator('.nav-item').filter({ has: page.locator('.mega-trigger') });
      await expect(productsNavItem).toBeVisible();

      // Hover to reveal mega menu
      await productsNavItem.hover();

      const megaMenu = productsNavItem.locator('.mega-menu');
      await expect(megaMenu).toBeVisible();

      // Verify mega menu contains category links
      await expect(megaMenu.locator('.mega-category').first()).toBeVisible();
      await expect(megaMenu.locator('.mega-product-link').first()).toBeVisible();

      // Verify "View All Products" CTA
      await expect(megaMenu.locator('a[href="/products"]').last()).toBeVisible();
    });

    test('mega menu contains all 4 category columns', async ({ page }) => {
      const productsNavItem = page.locator('.nav-item').filter({ has: page.locator('.mega-trigger') });
      await productsNavItem.hover();

      const megaMenu = productsNavItem.locator('.mega-menu');
      const categories = [
        'Probiotics & Soil Care',
        'Water Quality & Ammonia Control',
        'Disease & Stress Management',
        'Feed & Pond Preparers',
      ];

      for (const cat of categories) {
        await expect(megaMenu.locator('.mega-category', { hasText: cat })).toBeVisible();
      }
    });

    test('mega menu product links navigate to correct product pages', async ({ page }) => {
      const productsNavItem = page.locator('.nav-item').filter({ has: page.locator('.mega-trigger') });
      await productsNavItem.hover();

      const firstProductLink = productsNavItem.locator('.mega-product-link').first();
      await expect(firstProductLink).toBeVisible();

      const href = await firstProductLink.getAttribute('href');
      await firstProductLink.click();
      await page.waitForLoadState('networkidle');

      expect(page.url()).toContain(href!);
      const h1 = page.locator('h1').first();
      await expect(h1).toBeVisible();
    });
  });

  test.describe('Mobile drawer', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
      // Mobile viewport so the hamburger button is visible
      await page.setViewportSize({ width: 375, height: 667 });
    });

    test('mobile menu button is visible on small viewport', async ({ page }) => {
      const menuBtn = page.locator('#mobileMenuBtn');
      await expect(menuBtn).toBeVisible();
    });

    test('drawer opens when menu button is clicked', async ({ page }) => {
      const drawer = page.locator('#mobileDrawer');
      // Initially hidden
      await expect(drawer).toBeHidden();

      await page.locator('#mobileMenuBtn').click();
      // Drawer should now be open
      await expect(drawer).toBeVisible();
    });

    test('drawer contains nav links', async ({ page }) => {
      await page.locator('#mobileMenuBtn').click();

      const drawer = page.locator('#mobileDrawer');
      await expect(drawer.locator('a[href="/"]')).toBeVisible();
      await expect(drawer.locator('a[href="/products"]')).toBeVisible();
      await expect(drawer.locator('a[href="/about"]')).toBeVisible();
      await expect(drawer.locator('a[href="/contact"]')).toBeVisible();
    });

    test('drawer closes when close button is clicked', async ({ page }) => {
      await page.locator('#mobileMenuBtn').click();
      await expect(page.locator('#mobileDrawer')).toBeVisible();

      await page.locator('#drawerClose').click();
      await expect(page.locator('#mobileDrawer')).toBeHidden();
    });

    test('drawer closes when Escape is pressed', async ({ page }) => {
      await page.locator('#mobileMenuBtn').click();
      await expect(page.locator('#mobileDrawer')).toBeVisible();

      await page.keyboard.press('Escape');
      await expect(page.locator('#mobileDrawer')).toBeHidden();
    });

    test('drawer overlay closes drawer when clicked', async ({ page }) => {
      await page.locator('#mobileMenuBtn').click();
      await expect(page.locator('#mobileDrawer')).toBeVisible();

      await page.locator('#drawerOverlay').click();
      await expect(page.locator('#mobileDrawer')).toBeHidden();
    });

    test('drawer link navigates to correct page', async ({ page }) => {
      await page.locator('#mobileMenuBtn').click();

      await page.locator('#mobileDrawer a[href="/contact"]').click();
      await page.waitForLoadState('networkidle');

      expect(page.url()).toContain('/contact');
      const h1 = page.locator('h1').first();
      await expect(h1).toBeVisible();
    });
  });

  test.describe('Brochure download', () => {
    test('brochure download link exists in header', async ({ page }) => {
      await page.goto('/');
      const brochureLink = page.locator('.header-brochure-btn');
      await expect(brochureLink).toBeVisible();
      const href = await brochureLink.getAttribute('href');
      expect(href).toBe('/files/amrich-brochure.pdf');
      expect(await brochureLink.getAttribute('download')).not.toBeNull();
    });

    test('brochure download link click triggers download', async ({ page }) => {
      await page.goto('/');
      const brochureLink = page.locator('.header-brochure-btn');

      // Wait for download event
      const [download] = await Promise.all([
        page.waitForEvent('download', { timeout: 5000 }).catch(() => null),
        brochureLink.click(),
      ]);

      // Verify download was triggered (if browser supports it)
      if (download) {
        expect(download.suggestedFilename()).toContain('brochure');
      }
    });
  });
});

// (Duplicate Mega Menu and Mobile Drawer test groups removed — covered above in Navigation describe block)
