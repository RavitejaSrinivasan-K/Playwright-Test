//HANDLING DROP DOWN

import {test , expect} from "@playwright/test"

test("Handling Single Drop Down" , async function({page}){

    //browser launch
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Single Drop Down
    await page.locator('[id="country"]').click()

    //1 Visible Text
    await page.locator('[id="country"]').selectOption("India")
    await page.waitForTimeout(3000)

    //2 Label
    await page.locator('[id="country"]').selectOption({label : "Japan"})
    await page.waitForTimeout(3000)

    //3 Value
    await page.locator('[id="country"]').selectOption({value : "france"})
    await page.waitForTimeout(3000)

    //4 Index
    await page.locator('[id="country"]').selectOption({index : 2})
    await page.waitForTimeout(3000)

    //Assert
    let options1 = await page.locator('[id="country"] option')
    console.log(await options1.count())

    await expect(await options1).toHaveCount(10)

    let options2 = await page.$$('[id="country"]>option')
    console.log( options2.length)

    await expect(await options2.length).toBe(10)

})


test.only("Handling Multiple DropDown" , async ({page})=>{
 
    //browser launch
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Select Multiple Options
    await page.locator(' [id="colors"]').selectOption(["Red" , "Green" , "Yellow" , "Red" , "Green"] )
    await page.waitForTimeout(5000)

    //De Select
    await page.locator('[id="colors"]').selectOption([])
    await page.waitForTimeout(5000)

    //Select Duplicate
    await page.locator('[id="colors"]')
    .selectOption([{label : "Red"} , {value : "green"} , {value : "yellow"} , {index : 4} , {index : 6}])
    await page.waitForTimeout(5000)
})




