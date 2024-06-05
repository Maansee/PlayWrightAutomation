const{test,expect} = require('@playwright/test');


/**
 * Performs login action with provided email and password.
 * 
 * @param {string} email - The email address for login.
 * @param {string} password - The password for login.
 */


/**
 * Test case for the PMS 360 Employee Flow.
 * It logs in as an employee, performs a self-evaluation, and submits the form.
 */
test('@PMS 360 Employee Flow', async ({ page }) => {

    const LoginFn = async(email, password) => {
        await page.goto("https://pms.yodaplus.net/login");
        await page.locator("#Email_id").fill(email);
        await page.locator("#filled-password-input").fill(password);
        await page.locator("#login").click();
    }

    // // Login as an employee
    // await LoginFn("seema@yodaplus.com", "Test123@");

    // // Perform self-evaluation
    // await page.locator("#simple-tab-1").click();
    // await page.getByText("Go To Form").click();
    // await page.locator("#category_1").click();
    // await page.locator("#employee_response_category__1_question_1_answer_value_3").click();
    // await page.locator("#employee_response_category__1_question_2_answer_value_3").click();
    // await page.locator("#employee_response_category__1_question_3_answer_value_4").click();
    // await page.locator("#employee_comment_category__1_question_3").fill("Comment 3 inputs");
    // await page.locator("#mark_for_submission_button").click();
    

    //manager login
    //await LoginFn("pallavi@yodaplus.com", "Test123@");

    //Perform manager evaluation
    // await page.getByLabel('Click to Switch Your Role').click();
    // await page.getByRole('menuitem', { name: 'Manager' }).click();
    // await page.waitForTimeout(2000);
    // //await page.locator("#simple-tab-1").click();
    // await page.locator("//button[text()='360 °']").click();
    // await page.getByText("Go To Form").click();
    // await page.locator("#category_1").click();
    // await page.locator("#employee_response_category__1_question_1_answer_value_3_radio_button").click();
    // await page.locator("#employee_response_category__1_question_2_answer_value_2_radio_button").click();
    // await page.locator("#employee_response_category__1_question_3_answer_value_3_radio_button").click();
    // await page.locator("#employee_comment_category__1_question_3").fill("Manager Comments");
    // await page.locator("#mark_for_submission_button").click();
    // await page.waitForTimeout(2000); // Wait for 2 seconds


    //admin login
    // await LoginFn("mitanshu@yodaplus.com","Test123@");

    // //admin 
    // await page.getByLabel('Click to Switch Your Role').click();
    // await page.getByRole('menuitem', { name: 'Admin' }).click();
    // await page.locator("//button[text()='360 °']").click();
    // await page.getByText("Pending Forms").click()
    // await page.getByPlaceholder("Search…").fill("Seema")
    // await page.getByText("Go To Review").click();
    // await page.locator("#category_1").click();
    // await page.locator("#employee_response_category__1_question_1_answer_value_3_radio_button").click();
    // await page.locator("#employee_response_category__1_question_2_answer_value_2_radio_button").click();
    // await page.locator("#employee_response_category__1_question_3_answer_value_4_radio_button").click();
    // await page.locator("#employee_comment_category__1_question_2").fill("Admin Comments");
    // //await page.locator("mark_for_submission_button").click();
    

    //peer review
    await LoginFn("nitish@yodaplus.com","Test123@");

    await page.locator("#simple-tab-1").click();
    await page.getByText("Peer Review").click();
    await page.getByPlaceholder("Search…").fill("Seema")
    await page.getByText("Go To Form").click();
    await page.locator("#category_1").click();
    await page.locator("#employee_response_category__1_question_1_answer_value_3_radio_button").click();
    await page.locator("#employee_response_category__1_question_2_answer_value_2_radio_button").click();
    await page.locator("#employee_response_category__1_question_3_answer_value_4_radio_button").click();
    await page.locator("#employee_comment_category__1_question_2").fill("Peer Comments");
    await page.waitForTimeout(5000);


})
