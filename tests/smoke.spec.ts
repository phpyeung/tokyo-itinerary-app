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
    await expect(page.locator('.attraction-item')).toHaveCount(26);
    await expect(page.locator('.suggestion-option')).toHaveCount(60);
    await expect(page.locator('.cuisine-chip')).toHaveCount(76);

    await expect(page.getByText('銀座 八五')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'YAKITORI Moe' })).toBeVisible();
    await expect(page.getByText('Tokyo Disneyland').first()).toBeVisible();
    await expect(page.getByText('日本橋海鮮丼 つじ半 アークヒルズ店')).toBeVisible();

    await expect(page.getByRole('heading', { name: 'Places to visit' }).first()).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Restaurant backups' }).first()).toBeVisible();
    await expect(page.getByText('teamLab Planets')).toBeVisible();
    await expect(page.getByText('Shibuya Sky')).toBeVisible();
    await expect(page.getByText('Ginza Kagari Honten').first()).toBeVisible();
    await expect(page.getByText('Chinese Restaurant Dynasty Hilton Tokyo Bay').first()).toBeVisible();
    await expect(page.getByText('Teuchi Udon Iwashiya Aoyama')).toBeVisible();
    await expect(page.getByText('HONO Wagyu Teppan Ginza 鉄板焼 炎 銀座')).toBeVisible();
    await expect(page.getByText('Sushi Umezawa')).toBeVisible();
    await expect(page.locator('.suggestion-option').filter({ hasText: 'Sushi Umezawa' }).locator('.cuisine-chip').getByText('Sushi', { exact: true })).toBeVisible();
    await expect(page.getByText('Tsukiji Kaisen no Don')).toBeVisible();
    await expect(page.locator('.suggestion-option').filter({ hasText: 'Tsukiji Kaisen no Don' }).locator('.cuisine-chip').getByText('Kaisen don', { exact: true })).toBeVisible();
    await expect(page.locator('.meal-card').filter({ hasText: 'cossott\'e SP' }).locator('.cuisine-chip').getByText('Yakiniku', { exact: true })).toBeVisible();
    await expect(page.locator('.meal-card').filter({ hasText: 'YAKITORI Moe' }).locator('.cuisine-chip').getByText('Yakitori', { exact: true })).toBeVisible();
    await expect(page.locator('.meal-card').filter({ hasText: '日本橋海鮮丼 つじ半 アークヒルズ店' }).locator('.cuisine-chip').getByText('Kaisen don', { exact: true })).toBeVisible();

    const aug27 = page.locator('.day-section').first();
    await expect(aug27.getByText('TAKAHASHIYA Ginza ten')).toBeVisible();
    await expect(aug27.locator('.suggestion-option').filter({ hasText: 'TAKAHASHIYA Ginza ten' }).locator('.cuisine-chip').getByText('Unagi', { exact: true })).toBeVisible();
    await expect(aug27.getByText('Sumiyaki Unafuji Yuurakuchou ten')).toBeVisible();
    await expect(aug27.getByText('Unagi Hashimoto')).toBeVisible();
    await expect(aug27.getByText('むぎとオリーブ 銀座本店')).toBeVisible();
    await expect(aug27.locator('.suggestion-option').filter({ hasText: 'むぎとオリーブ 銀座本店' }).locator('.cuisine-chip').getByText('Ramen', { exact: true })).toBeVisible();
    await expect(aug27.getByText('Ginza Kagari Honten')).toBeVisible();
    await expect(aug27.getByText('Soba Sasuga')).toBeVisible();
    await expect(aug27.getByText('Sora no Iro Ginza Honten')).toBeVisible();
    await expect(aug27.getByText("BROZERS' Shintomi chou ten")).toBeVisible();
    await expect(aug27.getByText('Men Ginza Onodera Higashi ginza ten')).toBeVisible();
    await expect(aug27.locator('.suggestion-option').filter({ hasText: 'Men Ginza Onodera Higashi ginza ten' }).locator('.cuisine-chip').getByText('Ramen', { exact: true })).toBeVisible();
    await expect(aug27.getByText('Yakitori Tsukiya')).toHaveCount(0);
    await expect(aug27.getByText('Miyashin')).toHaveCount(0);
    await expect(aug27.getByText('支那麺 はしご 本店')).toHaveCount(0);
    await expect(aug27.getByText('Tori to Shochu Yurikago')).toHaveCount(0);

    const primaryLinks = await page.locator('.link-row a').evaluateAll((nodes) => nodes.map((node) => (node as HTMLAnchorElement).href));
    expect(primaryLinks.length).toBe(15);
    expect(primaryLinks.every(Boolean)).toBeTruthy();

    const suggestionLinks = await page.locator('.suggestion-option').evaluateAll((nodes) => nodes.map((node) => (node as HTMLAnchorElement).href));
    expect(suggestionLinks.length).toBe(60);
    expect(suggestionLinks.every(Boolean)).toBeTruthy();

    const attractionLinks = await page.locator('.attraction-item a').evaluateAll((nodes) => nodes.map((node) => (node as HTMLAnchorElement).href));
    expect(attractionLinks.length).toBeGreaterThanOrEqual(10);
    expect(attractionLinks.every(Boolean)).toBeTruthy();

    const metrics = await page.evaluate(() => ({
      overflowPx: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      hasHeroAsset: getComputedStyle(document.querySelector('.hero__media')!).backgroundImage.includes('tokyo-dining-scene.svg'),
    }));
    expect(metrics.overflowPx).toBeLessThanOrEqual(0);
    expect(metrics.hasHeroAsset).toBeTruthy();
    expect(errors).toEqual([]);
  });
}
