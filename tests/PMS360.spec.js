const{test,expect} = require('@playwright/test');

test('@PMS 360 HR Flow', async ({ page }) => {
    const email = "srushti@yodaplus.com";
    const password = "Test123@";
    await page.goto("https://pms.yodaplus.net/login");
    await page.locator("#Email_id").fill(email);
    await page.locator("#filled-password-input").fill(password);
    await page.locator("#login").click();
    
    await page.locator("#dashboardMenu").waitFor();
    await page.getByLabel('Click to Switch Your Role').click();
    await page.getByRole('menuitem', { name: 'HR' }).click();
    await page.locator("#dashboardMenu").click();
    await page.getByRole('menuitem', { name: 'Add Form' }).click();
    await page.getByRole('tab', {name: '360 °'}).click();
    await page.getByPlaceholder('Form Heading').fill("360 degree form for Seema");
    await page.getByPlaceholder('Form Description').fill("Month of Feb 2024");
    
    await page.locator('textarea[name="category_name"]').fill("CAT A");
   
    await page.locator("#question-0").fill("Ques 1");
    await page.locator("#answer_value-catrgory-0-question-0").fill("1 - Needs Improvement");
    await page.getByPlaceholder('Type a number…').fill("1");
    await page.locator("#add-option").click();
    await page.locator("#answer_value-catrgory-0-question-0").fill("2 - Meets Expectations");
    await page.getByPlaceholder('Type a number…').fill("2");
    await page.locator("#add-option").click();
    await page.locator("#answer_value-catrgory-0-question-0").fill("3 - Exceeds Expectations");
    await page.getByPlaceholder('Type a number…').fill("3");
    await page.locator("#add-option").click();
    await page.locator("#answer_value-catrgory-0-question-0").fill("4 - Seta a new standard");
    await page.getByPlaceholder('Type a number…').fill("4");
    await page.locator("#add-option").click();
    await page.locator("#addQuestion").click();

    await page.locator("#question-1").fill("Ques 2");
    await page.locator("#answer_value-catrgory-0-question-1").fill("1 - Needs Improvement");
    await page.getByPlaceholder('Type a number…').nth(1).fill("1");
    await page.locator("#add-option").nth(1).click();
    await page.locator("#answer_value-catrgory-0-question-1").fill("2 - Meets Expectations");
    await page.getByPlaceholder('Type a number…').nth(1).fill("2");
    await page.locator("#add-option").nth(1).click();
    await page.locator("#answer_value-catrgory-0-question-1").fill("3 - Exceeds Expectations");
    await page.getByPlaceholder('Type a number…').nth(1).fill("3");
    await page.locator("#add-option").nth(1).click();
    await page.locator("#answer_value-catrgory-0-question-1").fill("4 - Seta a new standard");
    await page.getByPlaceholder('Type a number…').nth(1).fill("4");
    await page.locator("#add-option").nth(1).click();
    await page.locator("#addQuestion").click();

    await page.locator("#question-2").fill("Ques 3");
    await page.locator("#answer_value-catrgory-0-question-2").fill("1 - Needs Improvement");
    await page.getByPlaceholder('Type a number…').nth(2).fill("1");
    await page.locator("#add-option").nth(2).click();
    await page.locator("#answer_value-catrgory-0-question-2").fill("2 - Meets Expectations");
    await page.getByPlaceholder('Type a number…').nth(2).fill("2");
    await page.locator("#add-option").nth(2).click();
    await page.locator("#answer_value-catrgory-0-question-2").fill("3 - Exceeds Expectations");
    await page.getByPlaceholder('Type a number…').nth(2).fill("3");
    await page.locator("#add-option").nth(2).click();
    await page.locator("#answer_value-catrgory-0-question-2").fill("4 - Seta a new standard");
    await page.getByPlaceholder('Type a number…').nth(2).fill("4");
    await page.locator("#add-option").nth(2).click();

    await page.getByPlaceholder("YYYY-MM-DD").fill("2024-03-05");
    await page.locator("#CreateFormButton").click();

    

    //Upload form to employee
    await page.goto("https://pms.yodaplus.net/createdforms");
    //await page.getByRole('menuitem', { name: 'CreatedForms' }).click();
    //await page.getByRole('tab' , {id: 'simple-tab-2'}).click();
    await page.locator("#simple-tab-1").click();
    await page.getByPlaceholder("Search…").fill("Seema");
    await page.waitForTimeout(2000);
    //await page.getByText("360 degree form for Seema");
    await page.getByText("Upload").click();
    await page.locator("#employee-autocomplete").click();
    await page.getByText("Seema Durgakar").click();
    await page.locator("#manager-autocomplete").click();
    await page.getByText("Pallavi Bhadsavle").click();
    await page.locator("#organization-leader-autocomplete").click();
    await page.getByText("Mitanshu Shirsat").click();

    await page.locator("#peers-autocomplete").click();
    await page.waitForTimeout(2000);
    const clickUser =async (user)=>{
        await page.getByText(user).click();
        await page.locator("#peers-autocomplete").click();
    }
    await clickUser("Nitish Patel");
    await clickUser("Suraj Gate");
    
    
    await page.locator("#form_upload_to_teams").click();
    await page.waitForTimeout(1000);
    //await page.locator("#send_form_to_people_0").click();
    console.log('before click')
    await page.locator("//button[contains(@id,'send_form_to_people')]").click()
    await page.waitForTimeout(2000);

    //peer function
    
})
