//Handling Frames 

import {test , expect} from "@playwright/test"

test("Handling Frames" , async ({page})=>{

    //browser launch
    await page.goto('https://ui.vision/demo/webtest/frames/')

    //count Of Frames
    let framesCount = await page.frames()
    console.log(framesCount.length)

    //FRAME 1 
   let frame1 =  await page.frame({url : "https://ui.vision/demo/webtest/frames/frame_1.html"})

   await frame1.locator('[name="mytext1"]').fill("JavaScript with Playwright")
   await page.waitForTimeout(3000)

   //FRAME 2
   await page.frameLocator('[src="frame_2.html"]').locator('[name="mytext2"]').fill("Java with Selenium")
   await page.waitForTimeout(3000)

})


test("Handling IFrame " , async ({page})=>{

     //browser launch
    await page.goto('https://ui.vision/demo/webtest/frames/')

    //FRAME 3
    let frame3 = await page.frame({url : "https://ui.vision/demo/webtest/frames/frame_3.html"})
    let childFrame =  await frame3.childFrames()
    console.log( childFrame.length)

    //ChildFrame
    await childFrame[0].locator('(//div[@class="AB7Lab Id5V1"])[2]').check()
    await page.waitForTimeout(3000)

    await childFrame[0].locator('(//div[@class="uHMk6b fsHoPb"])[3]').click()
    await page.waitForTimeout(3000)

})



// MainFrame => Count Of Frames => Frame or Frame Locator => 
    //Frame => ChildFrame by Passing Index
