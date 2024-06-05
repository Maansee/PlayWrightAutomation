const { test } = require('@playwright/test');

const question1 ='Q1';
const question2='Q2';
test('Employee Feedback Form', async ({ page }) => {
    const LoginFn = async (email, password) => {
        await page.goto("https://pms.yodaplus.net/login");
        await page.locator("#Email_id").fill(email);
        await page.locator("#filled-password-input").fill(password);
        await page.locator("#login").click();
    }

    // Login as an employee
    // await LoginFn("srushti@yodaplus.com", "Test123@");
    // await page.locator("#dashboardMenu").waitFor();
    // await page.getByLabel('Click to Switch Your Role').click();
    // await page.getByRole('menuitem', { name: 'HR' }).click();
    // await page.locator("#dashboardMenu").click();
    // await page.getByRole('menuitem', { name: 'Add Form' }).click();
    // await page.locator("#simple-tab-2").click();
    // await page.locator("#form_name").fill("Employee Feedback Form");
    // await page.locator("#description").fill("March 2024");
    
    // await page.locator("#question-0").fill("Q1");
    // await page.locator("#question-type").click();
    // await page.locator("#multichoice").click();
    // await page.getByPlaceholder('Add an option').click();
    // await page.getByPlaceholder('Add an option').fill('Yes');
    // await page.getByRole('button', { name: 'Add Option' }).click();
    // await page.getByPlaceholder('Add an option').click();
    // await page.getByPlaceholder('Add an option').fill('No');
    // await page.getByRole('button', { name: 'Add Option' }).click();
    // await page.locator("#addQuestion").click();
    // await page.locator("#question-1").fill("Q2");
    // await page.locator("#question-type").nth(1).click();
    // await page.locator("#short-answer").click();
    // await page.locator("#addQuestion").click();
    // await page.locator("#question-2").fill("Q3");
    // await page.locator("#question-type").nth(2).click();
    // await page.locator("#starrating").click();
    // await page.getByPlaceholder("YYYY-MM-DD").fill("2024-03-15");
    // await page.locator("#CreateFormButton").click();

    //Upload form to employee
    // await page.goto("https://pms.yodaplus.net/createdforms");
    // await page.locator("#simple-tab-2").click();
    // await page.getByPlaceholder("Search…").fill("Employee Feedback Form");
    // await page.waitForTimeout(3000);
    // await page.getByText("Upload").click();
    // await page.locator("#team_send_2").click();
    // await page.locator("#form_upload_to_teams").click();

    //logout action
    await page.locator(".ProfileIcon").click();
    await page.getByText("Logout").click();


    //login as employee
    await LoginFn("srushti@yodaplus.com", "Test123@");
    //await page.locator("#dashboardMenu").waitFor();
    await page.locator("#simple-tab-2").click();
    await page.getByPlaceholder("Search…").fill("Employee Feedback Form");
    await page.waitForTimeout(3000);

    await page.getByText("Go To Form").click();
    await page.locator("#employee_response_question_1_answer_value_1_radio_button").click();
    //await page.waitForSelector("#employee_response_question_2"), { state: 'visible' });
    await page.locator("#employee_response_question_2").fill("Q2 Response");
    await page.locator("#employee_rating_question_3").filter({has : page.getByLabel('3 Stars')}).click();
    await page.locator("#employee_feedback").fill("Srushti - HR Feedback");
    await page.locator("#save_button").click();

    //to submit saved form


    await page.waitForTimeout(5000);
    await page.locator("#simple-tab-2").click();
    await page.getByPlaceholder("Search…").fill("Employee Feedback Form");
    await page.getByText("Go To Form").click();
    await page.locator("#mark_for_submission_button").click();
    await page.waitForTimeout(3000);


    //for loop = to get all the 
    // for(let n =0;n <)
    // await page.locator(`#question-'${n}'`).fill("Q1");


    //Employee radio button selected by default

    // await page.waitForTimeout(5000);

    // Now, you can access the feedback form and perform necessary actions
    // For example:
    // await page.goto("URL_OF_FEEDBACK_FORM");
    // Perform actions to fill out and submit the feedback form
});
