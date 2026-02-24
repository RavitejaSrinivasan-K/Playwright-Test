//HANDLING DROPDOWN

import {test , expect} from "@playwright/test"


test("handling drop down" , async ({page})=>{

    //browser Luanch
    await page.goto("https://testautomationpractice.blogspot.com/")

    //scroll
    await page.locator('[id="country"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)

    // //Visible Text
    // await page.locator('[id="country"]').selectOption("India")
    // await page.waitForTimeout(3000)

    // //Label
    // await page.locator('[id="country"]').selectOption({label : "Japan"})
    // await page.waitForTimeout(3000)

    // //Value
    // await page.locator('[id="country"]').selectOption({value : "germany"})
    // await page.waitForTimeout(3000)

    // //Index
    // await page.locator('[id="country"]').selectOption({index : 2})
    // await page.waitForTimeout(3000)


    //MULTIPLE 

    await page.locator('[id="colors"]').selectOption(["Red" , "Green" , "Yellow" , "Red" , "Green"])
    await page.waitForTimeout(3000)

    //deselect
    await page.locator('[id="colors"]').selectOption([])
    await page.waitForTimeout(3000)

    //duplicate select
    await page.locator('[id="colors"]')
    .selectOption([{label : "Red"} , {label : "Green"} , {value : "yellow"} , {index : 4} , {index : 6}])
    await page.waitForTimeout(3000)
})













