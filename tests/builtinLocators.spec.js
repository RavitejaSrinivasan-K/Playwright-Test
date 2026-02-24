//HANDLING BUILT IN LOCATORS 

const {test , expect} = require('@playwright/test')


test("Handling Built-in Locators" , async function ({page}){

    test.setTimeout(12 * 10000)

    //Browser Launch
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    
    //ALT
    await expect( page.getByAltText('company-branding')).toBeVisible()

    //PLACEHOLDER
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')

    //ROLE
    await page.getByRole('button' , {name : " Login "}).click()
    await page.waitForTimeout(5000)

    //TEXT
    const userName = await page.locator('[class="oxd-userdropdown-name" ]').textContent()
    await expect(page.getByText(userName)).toBeVisible()
    console.log( userName.trim())

    //LABEL
    await expect(page.getByLabel('Sidepanel')).toBeVisible()

    //TITLE
    await page.getByTitle('Help').click()

    //TEST ID
    // refer official website https://www.playwright.dev/
})
































