//HANDLING ASSERTION ( HARD & SOFT )

const {test , expect} = require('@playwright/test')

test("Handling Assertions " , async function({page}){

    //browser launch
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Name 
    await page.locator('[ id="name" ]').fill('Raviteja')

    //ASSERTS
    await expect(page.locator('[ id="name" ]')).toBeVisible()
    await expect.soft(page.locator('[ id="name" ]')).toBeEmpty()
    await expect(page.locator('[ id="name" ]')).toBeEnabled()
    await expect(page.locator('[ id="name" ]')).toBeEditable()

})


test("Handling Radio & Check-Boxes" , async ({page}) => {

    //browser launch
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Radio Button
    await page.locator('[ id="female" ]').click()

    //Assert
    await expect(page.locator('[ id="female" ]')).toBeChecked()

    await page.locator('//label [ text() = "Male" ]').check()

    //Assert
    await expect(await page.locator('//label [ text() = "Male" ]').isChecked() ).toBeTruthy()

})


test.only("Handling Check Boxes" , async function({page}){

     //Browser Launch
     await page.goto('https://testautomationpractice.blogspot.com/')

     //1 Single CheckBox
     await page.locator('[id="sunday"]').check()
     await page.waitForTimeout(3000)

     //Assert
     await expect(await page.locator('[id="sunday"]')).toBeChecked()
     await expect(await page.locator('[id="sunday"]').isChecked()  ).toBeTruthy()

     //2 Multiple Check-Boxes
    let multipleChecks =[

      page.locator(' [id="tuesday"]') ,
      page.locator('id=thursday') ,
      page.locator('label:has-text("Saturday")')

    ]

    for (const element of multipleChecks) {
        await element.check()
        await page.waitForTimeout(2000)
        await expect(element).toBeChecked()
    }

    //Appraoch 2
  let checkBoxes =  await page.$$('//div//label[ @class="form-check-label" ]')

  for (const element of checkBoxes) {
    let text = await element.textContent()

    if(text.trim() == "Tuesday" || text.trim() == "Thursday" || text.trim() == "Saturday"){
        await element.uncheck()
        await page.waitForTimeout(2000)
    }
  }

  //Uncheck
})




























