import { test, expect } from '@playwright/test';

test('EPAM Client Work page test', async ({ page }) => {
  await page.goto('https://www.epam.com/');
  await page.click('text=Services');
  await page.click('text=Explore Our Client Work');
  await expect(page.locator('text=Client Work')).toBeVisible();
});
