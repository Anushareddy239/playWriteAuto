import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://my-qastg.mheducation.com/login');
  await page.getByLabel('Username or Email').click();
  await page.getByLabel('Username or Email').fill('autobots.automation');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Passpass1');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.waitForTimeout(6000);
  await page.goto('https://my-qastg.mheducation.com/secure/teacher/urn:com.mheducation.openlearning:enterprise.identity.organization:qastg.global:organization:2315359b-1a82-47b7-90d6-c33b61602fd6/home');
  await page.getByRole('link', { name: 'Sridhar Class' }).click();
  await page.goto('https://my-qastg.mheducation.com/secure/teacher/urn:com.mheducation.openlearning:enterprise.identity.organization:qastg.global:organization:2315359b-1a82-47b7-90d6-c33b61602fd6/urn:com.mheducation.openlearning:enterprise.roster:qastg.us-east-1:section:9b3d76f0-4a27-11ed-ac66-d7ecd12dce11/dashboard/section');
  await page.getByRole('link', { name: 'Search for Resources' }).click();
  await page.getByRole('button', { name: 'Resource Type' }).click();
  await page.getByRole('button', { name: 'Show More Resource Types' }).click();
  await page.locator('span').filter({ hasText: 'Rubric' }).nth(1).click();
  await page.locator('mhe-asset').filter({ hasText: 'Click to open and play Rubric asset test Rubric asset test Rubric' }).locator('mhe-dropdown').getByRole('button').click();
  await page.getByRole('option', { name: 'Preview' }).click();
  await page.frameLocator('#launch_frame_2').getByRole('button', { name: 'Open Full Screen' }).click();
  await page.frameLocator('#launch_frame_2').getByRole('button', { name: 'Exit Full Screen' }).click();

  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    await page.waitForTimeout(6000),
    page.getByRole('button', { name: 'Open Calculator in new tab' }).click()
  ]);

  await page.getByRole('button', { name: 'Open Full Screen' }).click();
  await page.getByRole('button', { name: 'Exit Full Screen' }).click();

    const [page2] = await Promise.all([
    page.waitForEvent('popup'),
    page.frameLocator('#launch_frame_2').getByRole('button', { name: 'Open In New Tab' }).click()
  ]);

    const [page3] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'Open in new tab' }).click()
  ]);
  
  await page.getByRole('button', { name: 'Close Player' }).click();
  await page.getByRole('button', { name: 'Account Settings' }).click();
  await page.getByRole('link').filter({ hasText: 'Logout' }).click();
});