const {test,expect} = require('@playwright/test');

test('Assignment 1', async({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
    const userEmail = page.locator("#userEmail");
    const userPassword = page.locator("#userPassword");
    const login = page.locator("#login");
    await userEmail.fill("maansee@abc.com");
    await userPassword.fill("maansee12$M");
    await login.click();
    console.log(await page.locator(".card-body b").first().textContent());

    

})
