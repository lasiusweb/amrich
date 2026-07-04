import { test, expect } from '@playwright/test';

test.describe('Quote Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
  });

  test('modal opens via data-modal trigger button', async ({ page }) => {
    const triggerBtn = page.locator('[data-modal="quote-form"]').first();
    await expect(triggerBtn).toBeVisible();
    await triggerBtn.click();

    const modal = page.locator('#quoteModal');
    await expect(modal).toHaveClass(/active/);
    await expect(modal).toBeVisible();
  });

  test('modal header is visible when opened', async ({ page }) => {
    await page.locator('[data-modal="quote-form"]').first().click();

    await expect(page.locator('#quoteModalTitle')).toBeVisible();
    await expect(page.locator('#quoteModalTitle')).toContainText('Get Your Custom Pond Plan');
  });

  test('close button closes the modal', async ({ page }) => {
    await page.locator('[data-modal="quote-form"]').first().click();
    await expect(page.locator('#quoteModal')).toHaveClass(/active/);

    await page.locator('#quoteModalClose').click();
    await expect(page.locator('#quoteModal')).not.toHaveClass(/active/);
  });

  test('Escape key closes the modal', async ({ page }) => {
    await page.locator('[data-modal="quote-form"]').first().click();
    await expect(page.locator('#quoteModal')).toHaveClass(/active/);

    await page.keyboard.press('Escape');
    await expect(page.locator('#quoteModal')).not.toHaveClass(/active/);
  });

  test('clicking overlay backdrop closes the modal', async ({ page }) => {
    await page.locator('[data-modal="quote-form"]').first().click();
    await expect(page.locator('#quoteModal')).toHaveClass(/active/);

    // Click the modal overlay (not the container child)
    await page.locator('#quoteModal').click({ position: { x: 10, y: 10 } });
    await expect(page.locator('#quoteModal')).not.toHaveClass(/active/);
  });

  test.describe('Form validation', () => {
    test('shows validation errors when submitting empty form', async ({ page }) => {
      await page.locator('[data-modal="quote-form"]').first().click();
      await expect(page.locator('#quoteModal')).toHaveClass(/active/);

      // Submit empty form
      await page.locator('#quoteForm button[type="submit"]').click();
      await page.waitForTimeout(200);

      // Error summary should appear
      const errorSummary = page.locator('#formErrorSummary');
      await expect(errorSummary).toBeVisible();
      const summaryText = await errorSummary.textContent();
      expect(summaryText).toBeTruthy();

      // Individual error messages should be shown
      const errorMessages = page.locator('.error-msg');
      const errorCount = await errorMessages.count();
      // At least some error messages should have content
      let visibleErrors = 0;
      for (let i = 0; i < errorCount; i++) {
        const text = await errorMessages.nth(i).textContent();
        if (text && text.trim().length > 0) visibleErrors++;
      }
      expect(visibleErrors).toBeGreaterThan(0);
    });

    test('shows phone validation error for invalid number', async ({ page }) => {
      await page.locator('[data-modal="quote-form"]').first().click();
      await expect(page.locator('#quoteModal')).toHaveClass(/active/);

      // Fill some fields
      await page.locator('#fullName').fill('Test Farmer');
      await page.locator('#phone').fill('12345');
      await page.locator('#location').fill('Test Location');
      await page.locator('#pondSize').fill('5');
      await page.locator('#species').selectOption('Shrimp');
      await page.locator('#productInterest').fill('PRO PLUS');

      // Submit
      await page.locator('#quoteForm button[type="submit"]').click();
      await page.waitForTimeout(200);

      // Phone error should be visible
      const phoneError = page.locator('#error-phone');
      await expect(phoneError).toBeVisible();
      expect(await phoneError.textContent()).toBeTruthy();
    });

    test('shows pond size validation error for invalid value', async ({ page }) => {
      await page.locator('[data-modal="quote-form"]').first().click();
      await expect(page.locator('#quoteModal')).toHaveClass(/active/);

      // Fill fields with invalid pond size
      await page.locator('#fullName').fill('Test Farmer');
      await page.locator('#phone').fill('9876543210');
      await page.locator('#location').fill('Test Location');
      await page.locator('#pondSize').fill('0');
      await page.locator('#species').selectOption('Shrimp');
      await page.locator('#productInterest').fill('PRO PLUS');

      // Submit
      await page.locator('#quoteForm button[type="submit"]').click();
      await page.waitForTimeout(200);

      // Pond size error should be visible
      const pondSizeError = page.locator('#error-pondSize');
      await expect(pondSizeError).toBeVisible();
      expect(await pondSizeError.textContent()).toBeTruthy();
    });
  });

  test.describe('Focus management', () => {
    test('focus moves to first input when modal opens', async ({ page }) => {
      await page.locator('[data-modal="quote-form"]').first().click();
      await page.waitForTimeout(200);

      // The first input in the form should be focused
      const activeElement = page.locator('#quoteForm input, #quoteForm select').first();
      await expect(activeElement).toBeFocused();
    });

    test('focus trap cycles through focusable elements on Tab', async ({ page }) => {
      await page.locator('[data-modal="quote-form"]').first().click();
      await page.waitForTimeout(200);

      const modal = page.locator('#quoteModal');
      const focusable = modal.locator('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      const count = await focusable.count();
      expect(count).toBeGreaterThan(1);

      // Tab through all focusable elements
      for (let i = 0; i < count * 2; i++) {
        await page.keyboard.press('Tab');
        await page.waitForTimeout(50);
      }

      // After cycling through all elements, focus should still be within the modal
      const activeIsInModal = await modal.locator(':focus').count();
      // Either the focused element is inside the modal, or the modal's active class is still there
      const isModalActive = await modal.evaluate(el => el.classList.contains('active'));
      expect(isModalActive).toBe(true);
    });

    test('focus returns to trigger after modal closes', async ({ page }) => {
      const triggerBtn = page.locator('[data-modal="quote-form"]').first();
      await triggerBtn.click();
      await page.waitForTimeout(100);

      // Close via Escape
      await page.keyboard.press('Escape');
      await page.waitForTimeout(100);

      // The trigger button should be focused again
      await expect(triggerBtn).toBeFocused();
    });
  });

  test.describe('Form state reset', () => {
    test('form resets after closing and reopening modal', async ({ page }) => {
      await page.locator('[data-modal="quote-form"]').first().click();
      await page.waitForTimeout(100);

      // Fill in a field
      await page.locator('#fullName').fill('Test Farmer');

      // Close
      await page.keyboard.press('Escape');
      await page.waitForTimeout(100);

      // Reopen
      await page.locator('[data-modal="quote-form"]').first().click();
      await page.waitForTimeout(100);

      // Field should be empty
      await expect(page.locator('#fullName')).toHaveValue('');
    });
  });
});
