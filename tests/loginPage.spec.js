//Handling DemoBlaze

import {test , expect} from "@playwright/test";


test("Handling Demoblaze LoginPage" , async function({page}){

    //browser Launch
    await page.goto('https://www.demoblaze.com/')


    //Title & Url
    console.log(await page.title())
    console.log(await page.url())

    //Assertion
    await expect(page).toHaveTitle('STORE')
    await expect(page).toHaveURL("https://www.demoblaze.com/")

    //click on LoginLinkText
    await page.locator('[id="login2"]').click()
    await page.waitForTimeout(2000)

    //Fill Username
    await page.locator('#loginusername').fill('Raviteja18')
    await page.waitForTimeout(2000)

    //Password
    await page.locator('id=loginpassword').fill('Trend@123')
    await page.waitForTimeout(2000)

    //LoginBtn
    await page.locator('[onclick="logIn()" ]').click()
    await page.waitForTimeout(2000)

    //Assertion
    await expect(await page.locator('[id="logout2"]') ).toBeVisible()
    await page.waitForTimeout(2000)


    //Find Multiple Web Elements
    let linkText =  await page.$$('//a')

    for (const element of linkText) {
      let text = await element.textContent()
      console.log(text.trim())
    }

    console.log('-----====-----')

    //Products
    let listOfProducts = await page.$$('//div//h4//a')

    for (const product of listOfProducts) {
     let text = await product.textContent()
     console.log(text)
    }

})








