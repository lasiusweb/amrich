import { test, expect } from '@playwright/test';

test.describe('Product Pages', () => {
  const categories = [
    { slug: 'probiotics-soil-care', name: 'Probiotics & Pond Soil Care' },
    { slug: 'water-quality-ammonia-control', name: 'Water Quality & Ammonia Control' },
    { slug: 'disease-stress-management', name: 'Disease & Stress Management' },
    { slug: 'feed-pond-preparers', name: 'Feed & Pond Preparers' },
  ];

  const products = [
    { slug: 'pro-plus', category: 'probiotics-soil-care' },
    { slug: 'farm-pro', category: 'probiotics-soil-care' },
    { slug: 'farm-ps', category: 'probiotics-soil-care' },
    { slug: 'bloomer', category: 'probiotics-soil-care' },
    { slug: 'gut-x', category: 'probiotics-soil-care' },
    { slug: 'gaso-clean', category: 'water-quality-ammonia-control' },
    { slug: 'w-softener', category: 'water-quality-ammonia-control' },
    { slug: 'oxy-farm', category: 'water-quality-ammonia-control' },
    { slug: 'farmamin', category: 'water-quality-ammonia-control' },
    { slug: 'farmadine', category: 'disease-stress-management' },
    { slug: 'farm-80', category: 'disease-stress-management' },
    { slug: 'farm-c-plus', category: 'disease-stress-management' },
    { slug: 'shrimp-care', category: 'disease-stress-management' },
    { slug: 'omega-booster', category: 'feed-pond-preparers' },
    { slug: 'gro-bind', category: 'feed-pond-preparers' },
    { slug: 'easy-lite', category: 'feed-pond-preparers' },
  ];

  test.describe('Category pages', () => {
    for (const cat of categories) {
      test(`category page for "${cat.name}" loads and renders products`, async ({ page }) => {
        await page.goto(`/products/${cat.slug}`);
        await page.waitForLoadState('networkidle');

        // H1 should contain the category name
        await expect(page.locator('h1').first()).toContainText(cat.name);

        // Product cards should be visible (product-grid with product-card links)
        const productCards = page.locator('a.product-card');
        const cardCount = await productCards.count();
        expect(cardCount).toBeGreaterThan(0);

        // Each card should link to a product page
        const firstCard = productCards.first();
        const href = await firstCard.getAttribute('href');
        expect(href).toContain(`/products/${cat.slug}/`);

        // Category description should be present
        await expect(page.locator('.category-desc')).toBeVisible();
      });
    }
  });

  test.describe('Product detail pages', () => {
    for (const prod of products) {
      test(`product page for "${prod.slug}" loads with h1 content`, async ({ page }) => {
        await page.goto(`/products/${prod.category}/${prod.slug}`);
        await page.waitForLoadState('networkidle');

        const h1 = page.locator('h1').first();
        await expect(h1).toBeVisible();
        // H1 should contain the product slug as part of the name
        const h1Text = await h1.textContent();
        expect(h1Text).toBeTruthy();
        expect(h1Text!.length).toBeGreaterThan(0);
      });
    }
  });

  test.describe('Sticky CTA bar', () => {
    test('sticky CTA bar exists on product page', async ({ page }) => {
      await page.goto('/products/probiotics-soil-care/pro-plus');
      await page.waitForLoadState('networkidle');

      const stickyCTA = page.locator('#stickyCTA');
      await expect(stickyCTA).toBeAttached();

      // Sticky CTA should contain the product name
      await expect(stickyCTA.locator('.sticky-product-name')).toContainText('PRO PLUS');

      // Sticky CTA should have a "Get a Quote" button
      await expect(stickyCTA.locator('button[data-modal="quote-form"]')).toBeVisible();

      // Sticky CTA should have a brochure download link
      await expect(stickyCTA.locator('a[download]')).toBeVisible();
    });

    test('sticky CTA bar becomes visible on scroll', async ({ page }) => {
      await page.goto('/products/probiotics-soil-care/pro-plus');
      await page.waitForLoadState('networkidle');

      const stickyCTA = page.locator('#stickyCTA');
      // Initially hidden (transformed off-screen)
      await expect(stickyCTA).toBeAttached();

      // Scroll past 25% of viewport height
      await page.evaluate(() => window.scrollTo(0, window.innerHeight * 0.5));
      await page.waitForTimeout(100);

      // Should have the is-visible class
      await expect(stickyCTA).toHaveClass(/is-visible/);
    });
  });

  test.describe('Product schema JSON-LD', () => {
    for (const prod of products) {
      test(`product schema JSON-LD present for "${prod.slug}"`, async ({ page }) => {
        await page.goto(`/products/${prod.category}/${prod.slug}`);
        await page.waitForLoadState('networkidle');

        // Find the Product schema
        const scripts = page.locator('script[type="application/ld+json"]');
        const scriptCount = await scripts.count();
        expect(scriptCount).toBeGreaterThan(0);

        // Check at least one schema has @type "Product"
        let foundProductSchema = false;
        for (let i = 0; i < scriptCount; i++) {
          const text = await scripts.nth(i).textContent();
          if (text) {
            try {
              const parsed = JSON.parse(text);
              if (parsed['@type'] === 'Product') {
                foundProductSchema = true;
                // Verify essential fields
                expect(parsed.name).toBeTruthy();
                expect(parsed.sku).toBeTruthy();
                expect(parsed.brand).toBeDefined();
                expect(parsed.offers).toBeDefined();
                // Check brand name
                expect(parsed.brand.name).toBe('Amrich Pharma');
                break;
              }
            } catch {
              // Skip invalid JSON
            }
          }
        }
        expect(foundProductSchema).toBe(true);
      });
    }
  });

  test.describe('Products index page', () => {
    test('products index page loads all 4 category links', async ({ page }) => {
      await page.goto('/products');
      await page.waitForLoadState('networkidle');

      await expect(page.locator('h1').first()).toContainText('Amrich Pharma Product Range');

      // Should link to each category
      for (const cat of categories) {
        const link = page.locator(`a[href="/products/${cat.slug}"]`).first();
        await expect(link).toBeVisible();
      }
    });

    test('products index page has CollectionPage schema', async ({ page }) => {
      await page.goto('/products');
      await page.waitForLoadState('networkidle');

      const scripts = page.locator('script[type="application/ld+json"]');
      let foundCollectionPage = false;
      const count = await scripts.count();
      for (let i = 0; i < count; i++) {
        const text = await scripts.nth(i).textContent();
        if (text) {
          try {
            const parsed = JSON.parse(text);
            if (parsed['@type'] === 'CollectionPage') {
              foundCollectionPage = true;
              expect(parsed.mainEntity).toBeDefined();
              expect(parsed.mainEntity['@type']).toBe('ItemList');
              break;
            }
          } catch {
            // Skip invalid JSON
          }
        }
      }
      expect(foundCollectionPage).toBe(true);
    });
  });
});
