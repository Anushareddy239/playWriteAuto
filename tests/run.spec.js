import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://accounts.mheducation.com/login?app=connect.mheducation.com');
  await page.getByLabel('Email address').click();
  await page.getByLabel('Email address').fill('gaayathrim@connect.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Connect5');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByText('AUTO Test 1').click();
  await page.locator('div:nth-child(5) > .course-container > .section-information > .row > .ng-isolate-scope > div > .ebook-wrapper > .textbook-wrapper-1eb-clist-10 > .textbook-image-container-1eb-clist-10 > .textbook-image-1eb-clist-10').click();
  await page.getByRole('link', { name: 'Test Section A' }).first().click();
  await page.getByRole('link', { name: 'Add assignment' }).click();
  await page.getByRole('link', { name: 'Writing Assignment' }).click();
  await page.goto('https://my.mheducation.com/secure/writing-assignment?lure-launch-data=12b97d22-cf1c-4620-a499-9a997ca67e7c');
   await page.frameLocator('#launch_frame_0').getByRole('button', { name: 'Select from Prompt Library' }).click();
   await page.frameLocator('#launch_frame_0').getByPlaceholder('Connect_Vantage_Level_2_PROD').click();
  await page.frameLocator('#launch_frame_0').locator('#cdk-overlay-0').click();
 await page.frameLocator('#launch_frame_0').getByPlaceholder('Connect_Vantage_Level_2_PROD').click();
  await page.frameLocator('#launch_frame_0').getByPlaceholder('Connect_Vantage_Level_2_PROD').fill('kevin');
  await page.frameLocator('#launch_frame_0').getByPlaceholder('Connect_Vantage_Level_2_PROD').press('Enter');
  await page.frameLocator('#launch_frame_0').getByRole('tabpanel', { name: 'McGraw-Hill Prompts' }).getByRole('button', { name: 'Select' }).click();
  await page.frameLocator('#launch_frame_0').frameLocator('#mce_0_ifr').getByText('Imagine that you are being chased by a large, angry dog. Describe three physiolo').click();
 });