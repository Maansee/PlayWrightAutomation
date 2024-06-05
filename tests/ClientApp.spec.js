const {test,expect} = require('@playwright/test');
 
test('@Web Client App login', async ({ page }) => {
    //js file- Login js, DashboardPage
    
    const email = "anshika@gmail.com";
    const productName = 'ZARA COAT 3';
    const products = page.locator(".card-body"); //when we declare here, we will be able to get all the products in that page
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").type("Iamking@000");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles); 
    const count = await products.count();
    for(let i=0;i<count;++i)
    {
       if(await products.nth(i).locator("b").textContent() === productName)
       {
        //add to cart
        await products.nth(i).locator("text =  Add To Cart").click();
        break;
       }
    }
    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").first().waitFor();
    const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
    expect(bool).toBeTruthy();
    await page.locator("text=Checkout").click();
    await page.locator("div input ").nth(1).fill("123");
    await page.locator("div input ").nth(2).fill("Anshika Shetty");
    await page.locator("div input ").nth(3).fill("rahulshettyacademy");
    await page.locator("[placeholder*='Country']").pressSequentially("ind",{delay:100});
    const dropdown = page.locator(".ta-results");
    await dropdown.waitFor();
    const optionCount = await dropdown.locator("button").count();
    for(let i=0; i< optionCount; ++i)
    {
        const text = await dropdown.locator("button").nth(i).textContent();
        if(text === " India")
        {
            await dropdown.locator("button").nth(i).click();
            break;
        }
    }
 
    expect(await page.locator(".user__name [type='text']").first()).toHaveText("anshika@gmail.com");
    await page.locator(".action__submit ").click();
    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderId);
 
    await page.locator("[routerlink*='orders']").first().click();
    await page.locator("tbody").waitFor();
    const rows = await page.locator("tbody tr");
 
   /* for(let i=0;i<0;++i)
    {
        const rowOrderId = await rows.nth(i).locator("th").textContent();
        if(orderId.includes(rowOrderId))
        {
            await rows.nth(i).locator(".btn").first().click();
            console.log("Click view button");
            break;
        }
    } */
 
    for (let i = 0; i < await rows.count(); ++i) {
        const rowOrderId = await rows.nth(i).locator("th").textContent();
        if (orderId.includes(rowOrderId)) {
            await rows.nth(i).locator("button").first().click();
            break;
        }
    }
 
    console.log("Landed on order details page");
    console.log("Searching locator now")
    //const orderId_Details = await page.locator(".col-text").textContent();
   // await page.locator(".col-text").waitFor();
    const orderIdDetails = await page.locator(".col-text").textContent();
    //const orderId_Details = await page.locator(".col-text").textContent({ timeout: 30000 }); 
    console.log(orderIdDetails);
    expect(orderId.includes(orderIdDetails)).toBeTruthy();
 
    //await page.pause();
  
 })