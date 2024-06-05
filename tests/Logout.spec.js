const { test } = require('@playwright/test');

const question1 ='Q1';
const question2='Q2';
test('Logout', async ({ page }) => {
    const LoginFn = async (email, password) => {
        await page.goto("https://app-qa.docutrade.io/auth/login/");
        await page.locator("#Email_id").fill(email);
        await page.locator("#filled-password-input").fill(password);
        await page.locator("#login").click();
    }
    
    await LoginFn("srushti@yodaplus.com","Test123@");
    await page.locator(".ProfileIcon").click();
    await page.getByText("Logout").click();
    await page.waitForTimeout(7000);

})