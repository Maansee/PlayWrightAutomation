const{test,expect} = require('@playwright/test');

test('Nutrify UAT WebLogin', async ({ page }) => 
{
    const email = "user@mail.com";
    const password = "Test@1234";
    await page.goto("https://uatbusiness.nutrifytoday.com/accounts/login/");
    await page.locator("#id_email").fill(email);
    await page.locator("#id_password").fill(password);
    await page.getByText("Sign In").click();
    await page.waitForTimeout(20000);
    await page.getByText("Logout").isVisible();
    //await page.pause();
})