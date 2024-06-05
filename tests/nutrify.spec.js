
import { test, expect } from '@playwright/test';

test.only('test', async ({ page }) => {

    //create login function and call that everytime
    await page.goto('https://uatbusiness.nutrifytoday.com/accounts/login/');
    await page.getByPlaceholder('Email Address').fill('user@mail.com');
    await page.getByPlaceholder('Password').fill('Test@1234');
    await page.waitForTimeout(20000);
    await page.getByRole('button', { name: 'Sign In' }).click();


    await page.getByRole('link', { name: 'Create New Blog' }).click();
    //line 16 not needed, use fill only
    await page.locator('#id_text_content').click();
    await page.locator('#id_text_content').fill('This is a test blog FOR LIKE BUTTON');
    await page.getByRole('button', { name: 'Create Blog' }).click();
    await page.waitForTimeout(5000);

    await page.getByRole('link', { name: 'Comments' }).first().click();
    //line 22 not needed
    await page.getByPlaceholder('Comment...').click();
    await page.getByPlaceholder('Comment...').fill('hi');
    await page.locator('//button[@type="submit"]').click();
   
    await page.locator("#chat-icon").click();
    await page.locator('//a[@href="/chat/f4a69f18-29d3-49f0-b38b-38a20306d402/"]').click();
    await page.getByPlaceholder('Type a message').fill('hi, welcome to Nutrify today platform');
    await page.getByRole('button', { name: 'Send' }).click();
    //create separate const for locator #kt_header and use that in the below lines instead of typing it always
    await page.locator('#kt_header').getByRole('list').getByText('Upskill').click();
    await page.locator('#kt_header').getByRole('list').locator('a').filter({ hasText: 'Academy' }).click();
    await page.locator('#kt_header').getByRole('list').getByText('Upskill').click();
    await page.locator('#kt_header').getByRole('list').locator('a').filter({ hasText: 'Academy' }).click();
    await page.getByRole('link', { name: 'Short Videos' }).click();
    await page.locator('#card_1').getByRole('link', { name: 'Watch Short Video' }).click();
    await page.getByRole('link', { name: 'Back' }).click();

    await page.getByRole('link', { name: 'Profile' }).click();
    await page.locator('//div/a[@href="/accounts/switch-account/3995e953-cd92-4fa1-959a-4978c4687029/"]').click()
    await page.locator('//a[text()="Nutrify Genie"]').click();

    //use click directly
    await page.getByPlaceholder('Search').click();
    await page.getByPlaceholder('Search').fill('check ing');
    await page.getByRole('button', { name: 'Search Now' }).click();
    await page.getByRole('gridcell', { name: 'unit check ing' }).click();
    await page.getByRole('link', { name: 'unit check ing' }).click();
    await page.locator('a').filter({ hasText: 'Diseases Tagged' }).click();
    await page.getByRole('link', { name: 'Clinical Papers' }).click();
    await page.getByRole('link', { name: 'Nutrify Genie', exact: true }).click();
 
    await page.locator('#select2-department_select-container').click();
    await page.getByLabel('Department', { exact: true }).click();
    await page.getByRole('option', { name: 'Gynecology' }).click();
    await page.locator('#select2-broad_category_select-container').click();
    await page.getByRole('option', { name: 'Women Health [Gynecology]' }).click();
    await page.locator('#select2-disease_select-container').click();
    await page.getByRole('option', { name: 'Lactation' }).click();
    await page.getByRole('button', { name: 'Apply Filters' }).click();
    await page.getByRole('link', { name: 'Trigonella-foenum-graecum' }).click();
    await page.locator('a').filter({ hasText: 'Diseases Tagged' }).click();
    await page.getByRole('link', { name: 'Clinical Papers' }).click();
    await page.getByRole('gridcell', { name: 'View Studies (1 clinical' }).click();
    await page.getByText('https://clinicaltrials.gov/ct2/show/NCT03528824?term=trigonella++foenum+graecum&draw=2&rank=').click();
    await page.getByRole('button', { name: 'No', exact: true }).click();
    await page.getByRole('link', { name: 'Products' }).click();
    await page.locator('#card_2').click();
    await page.getByLabel('Close').click();
    await page.getByRole('link', { name: 'Toxicology' }).click();
    await page.getByRole('link', { name: 'Nutrify Genie', exact: true }).click();
    await page.getByRole('link', { name: 'Create & Validate Your Formula' }).click();
    await page.locator('#card1').getByRole('list').click();
    await page.getByRole('option', { name: 'Cardiology' }).click();
    await page.getByText('Select People Category').click();
    await page.getByRole('option', { name: 'For All' }).click();
    await page.getByRole('button', { name: 'Proceed' }).click();
    await page.getByRole('row', { name: 'Allium sativum – bulbs dried' }).getByRole('button').first().click();
    await page.getByLabel('People Category*').selectOption('For All');
    await page.getByLabel('Active Ingredient*').selectOption('Not Available');
    await page.getByLabel('Part*').selectOption('Bulb');
    await page.getByLabel('Unit*').selectOption('g');
    await page.getByLabel('Strength*').click();
    await page.getByLabel('Strength*').fill('2');
    await page.getByRole('button', { name: 'Add Ingredient' }).click();
    await page.getByRole('button', { name: 'Generate Transfer Price' }).click();
    await page.getByPlaceholder('Batch Size').click();
    await page.getByPlaceholder('Batch Size').fill('100000');
    await page.getByPlaceholder('Batch Size').press('Tab');
    await page.getByRole('option', { name: 'Tablet' }).click();
    await page.waitForTimeout(5000);
    await page.getByPlaceholder('Overage').click();
    await page.getByPlaceholder('Overage').fill('10');
    await page.getByPlaceholder('Overage').press('Tab');
    await page.getByRole('option', { name: 'Allium6' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Download Transfer Price' }).click();
    const download = await downloadPromise;
    await page.getByRole('link', { name: 'Nutrify Genie', exact: true }).click();
    await page.getByRole('link', { name: 'Disease Pathways' }).click();
    await page.getByText('Abrasive Blasting').click();
    await page.getByRole('link', { name: 'Clinical Papers' }).click();
    await page.getByRole('link', { name: 'Products' }).click();
    await page.getByRole('link', { name: 'Nutrify Genie', exact: true }).click();

    //job portal
    await page.getByRole('list').getByText('Job Portal').click();
    await page.getByRole('link', { name: 'Create/View Jobs' }).click();
    await page.getByRole('link', { name: 'Create New Job' }).click();
    await page.getByPlaceholder('Title').click();

    await page.getByPlaceholder('Title').fill('Quality');
    await page.getByPlaceholder('Title').fill('Quality Engineer');
    await page.getByPlaceholder('Description').fill('2 years of experince in qaulity analyst and automation engineer');

    //why is 118 and 120 similar
    await page.getByPlaceholder('Requirement').fill('relevent experience in software and automation testing additonal knowledge');
    await page.getByPlaceholder('Requirement').click();
    await page.getByPlaceholder('Requirement').fill('relevent experience in software and automation testing additonal knowledge will be benificial');
    //use only fill
    await page.locator('#id_min_salary').click();
    await page.locator('#id_min_salary').fill('35000');
    await page.locator('#id_min_experience').fill('1');
    await page.locator('#id_max_salary').fill('65000');
    await page.locator('#id_max_experience').fill('6');
    await page.locator('#id_mode').selectOption('Hybrid');
    await page.locator('#id_type').selectOption('Full Time');
    await page.getByRole('button', { name: 'Create Job' }).click();
    await page.waitForTimeout(2000);

    await page.getByText('Logout').click();
    });