import { step, TestSettings, By } from '@flood/element';

export const settings: TestSettings = {
	// userAgent: 'flood-chrome-test',
	loopCount: 1,

	// Automatically wait for elements before trying to interact with them
	waitUntil: 'visible',
};

export default () => {
	step('Bug', async browser => {
		// visit instructs the browser to launch, open a page, and navigate to https://flood-element-challenge.vercel.app/
		await browser.visit('https://flood-element-challenge.vercel.app/');
		await browser.click(By.visibleText('TAKE THE CHALLENGE'));
		await browser.click(By.attr('a', 'href', '/products'));
		const minimizeChallengesPopup = await browser.findElement(By.attr('button', 'data-test-minimize', 'true'));
		await minimizeChallengesPopup.click();
		await browser.click(By.xpath('//h5[text()="Price range"]/../span/span[4]'));
		await browser.takeScreenshot();
	});
};
