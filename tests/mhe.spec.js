const {test, expect}=require('@playwright/test')
test('browser Playwright test',async({browser})=>
{
    //page.setDefaultTimeout(30000);
    const context= await browser.newContext();
    const page= await context.newPage();

await page.goto("https://accounts.mheducation.com/login?app=connect.mheducation.com&redirectUrl=https:%2F%2Fcaas.mheducation.com%2Fcaas%2Fheclr%2FlaunchConnect");
 console.log(await page.title());
 await page.locator('#login-email').fill('gaayathrim@connect.com');
 await page.locator('#login-password').fill('Connect5');
 await page.locator("#login-submit-btn").click();
 await page.locator("[data-coire-href='/course/138331657/section/138331658']").click();
 await page.locator(".icon-plus").click();
 await page.locator("[title='Writing Assignment']").click();

 await page.frameLocator('[name="launch_frame_0"]').locator("button#existingPromptsBtn").click();
 await page.waitForTimeout(1000);
 const newloc= page.frameLocator('[name="launch_frame_0"]');
 await newloc.locator('input#CISRSearchTextBox').click();
await page.waitForTimeout(5000);
await newloc.locator('input#CISRSearchTextBox').type('kevin');
await page.keyboard.press('Enter');
await page.waitForTimeout(1000);
//await newloc.locator("button.btn btn-sm btn-primary").click();

//  await page.pause();
 //await newFrame.frameLocator('#existingPromptsBtn').click();
 
//  await Promise.all(
//     [
//  await page.locator("#existingPromptsBtn").click(),
//  await newPage.locator('#CISRSearchTextBox').type('kevin').click()
//     ]
//  );
});
//  test('browser Playwright navigate',async({browser})=>
// {
//     const context= await browser.newContext();
//     const page= await context.newPage();
    

// await page.goto("https://my.mheducation.com/secure/writing-assignment?lure-launch-data=28d34411-39e3-4295-bafb-0f7a1f3c4ec7");
// const newPage=await Promise.all(
//     [
//         context.waitForEvent('page'),
//         page.locator("#existingPromptsBtn").click(),

//     ]
// );
// await newPage.locator('#CISRSearchTextBox').type('kevin').click();

// });


