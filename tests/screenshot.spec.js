
import {test , expect} from "@playwright/test"


test("Handling Normal Page" , async ({page})=>{

    //Browser
    await page.goto('https://www.amazon.in/')

    await page.waitForTimeout(3000)

    await page.screenshot({path : 'tests/images' + '/normalPage.png'})
})


test("Handling Full Page" , async ({page})=>{

    //Browser
    await page.goto('https://www.amazon.in/')

    await page.waitForTimeout(3000)

    await page.screenshot({path : 'tests/images' + '/fullPage.jpeg' , fullPage : true})
})



test("Handling Particular Page" , async ({page})=>{

    //Browser
    await page.goto('https://www.amazon.in/')

    await page.waitForTimeout(3000)

    await page.locator('[id="nav-logo-sprites"]')
    .screenshot({path : 'tests/images/' + Date.now() + 'particular.jpg'})


    // await page.video().saveAs()
})