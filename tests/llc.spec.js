import{test,expect} from '@playwright/test'

test('Playwright Special Locators' , async({ page }) => {

    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").check();
    await page.getByLabel("Employed").click();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByPlaceholder("Password").fill("abc123");
    await page.getByRole("button" , {name: 'Submit'}).click();
    const textVisible = await page.getByText(" The Form has been submitted successfully!.").isVisible();
    expect(textVisible).toBeTruthy();
    await page.getByRole("link",{name: "Shop"}).click();
    await page.pause();
    //await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();
    await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();
    await page.pause();
    console.log("Completed");

}
)