import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://connect.mheducation.com/connect/login/index.htm?&BRANDING_VARIANT_KEY=en_us_default_default&node=us-east-1a-connect-app-prod-8-240.mhecloud.com');
    await page.goto('https://accounts.mheducation.com/login?app=connect.mheducation.com&redirectUrl=https://caas.mheducation.com/caas/heclr/launchConnect');
    await page.goto('https://accounts.mheducation.com/login?app=connect.mheducation.com&redirectUrl=https:%2F%2Fcaas.mheducation.com%2Fcaas%2Fheclr%2FlaunchConnect');
    await page.getByLabel('Email address').click();
    await page.getByLabel('Email address').fill('gaayathrim@connect.com');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').press('Control+c');
    await page.getByLabel('Password').fill('onnect5');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('Connect5');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('link', { name: 'Test Section A' }).first().click();
    await page.getByRole('link', { name: 'Add assignment' }).click();
    await page.getByRole('link', { name: 'Writing Assignment' }).click();
    await page.goto('https://my.mheducation.com/secure/writing-assignment?lure-launch-data=583fde41-d844-442f-bb5c-7a6fbd4db4e1');
    await page.frameLocator('#launch_frame_0').getByRole('button', { name: 'Select from Prompt Library' }).click();
    await page.frameLocator('#launch_frame_0').getByPlaceholder('Connect_Vantage_Level_2_PROD').click();
    await page.frameLocator('#launch_frame_0').getByPlaceholder('Connect_Vantage_Level_2_PROD').fill('kevin');
    await page.frameLocator('#launch_frame_0').getByPlaceholder('Connect_Vantage_Level_2_PROD').press('Enter');
    await page.frameLocator('#launch_frame_0').getByRole('tabpanel', { name: 'McGraw-Hill Prompts' }).getByRole('button', { name: 'Select' }).click();
});