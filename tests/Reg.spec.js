const{test,expect} = require('@playwright/test');

test('@Nutrify UAT WebLogin', async ({ page }) => {
  
    await page.goto("https://uatbusiness.nutrifytoday.com/accounts/login/");
    await page.getByText("Sign up").click();
    await page.locator("#id_0-first_name").fill("rahul");
    await page.locator("#id_0-last_name").fill("sharma");
    await page.locator("#id_0-email").fill("rahulsh12@gmai.com");
    await page.locator("#id_0-phone").fill("7769234566");
    await page.locator("#id_0-password").fill("Test@1234");
    await page.locator("#id_0-confirm_password").fill("Test@1234");
    await page.locator("#id_0-address").fill("awfis impirial building, pan card club road, baner, pune, maharashtra, 411045");
    await page.locator("#id_0-city").fill("pune");
    await page.locator("#select2-id_0-country-container").click();
    await page.getByRole("combobox").click();
    await page.getByRole("textbox").fill("India");
   
    //await page.locator(".select2-search__field").fill("India");

    await page.waitForTimeout(10000);
    


})