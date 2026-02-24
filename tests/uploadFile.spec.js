

import {test , expect} from '@playwright/test'

test("Handling Upload Files" , async ({page})=>{

    //browser 
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Scroll
    // await page.evaluate(()=> {
    //     window.scroll(0 , 250)
    // })

    await page.locator('[id="singleFileInput"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(4000)

    //Single File
    await page.locator('[id="singleFileInput"]')
    .setInputFiles("C:/Users/Dell/Desktop/Assessments_Files/Playwright Notes/Playwright_Assessment1.txt")
    await page.waitForTimeout(4000)


    //Multiple Files
    await page.locator('[id="multipleFilesInput"]')
    .setInputFiles([
        'C:/Users/Dell/Desktop/Assessments_Files/JavaScript Notes/JS_Day-2.txt'  , 
        'C:/Users/Dell/Desktop/Assessments_Files/JavaScript Notes/JS_Day-12.txt'
    ])

    await page.waitForTimeout(4000)
})







