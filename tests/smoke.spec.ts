import { test, expect } from '@playwright/test';

const viewports = [
  { name: 'desktop', width: 1440, height: 1000 },
  { name: 'mobile', width: 390, height: 844 },
];

for (const viewport of viewports) {
  test(`renders itinerary on ${viewport.name}`, async ({ page }) => {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    const errors: string[] = [];
    page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
    page.on('pageerror', (error) => errors.push(error.message));
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
    await expect(page.getByRole('heading', { name: 'Tokyo Itinerary' })).toBeVisible();
    await expect(page.locator('.meal-card')).toHaveCount(16);
    await expect(page.getByText('銀座 八五')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'YAKITORI Moe' })).toBeVisible();
    await expect(page.getByText('Tokyo Disneyland').first()).toBeVisible();
    await expect(page.getByText('日本橋海鮮丼 つじ半 アークヒルズ店')).toBeVisible();
    const links = await page.locator('.link-row a').evaluateAll((nodes) => nodes.map((node) => (node as HTMLAnchorElement).href));
    expect(links.length).toBe(15);
    expect(links.every(Boolean)).toBeTruthy();
    const metrics = await page.evaluate(() => ({
      overflowPx: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      hasHeroAsset: getComputedStyle(document.querySelector('.hero__media')!).backgroundImage.includes('tokyo-dining-scene.svg'),
    }));
    expect(metrics.overflowPx).toBeLessThanOrEqual(0);
    expect(metrics.hasHeroAsset).toBeTruthy();
    expect(errors).toEqual([]);
  });
}
