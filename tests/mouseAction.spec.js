
import {test , expect} from "@playwright/test"


test("Handling Mouse Action" , async ({page})=>{

    //browser launch
    await page.goto('https://testautomationpractice.blogspot.com/')

    //scroll
    await page.locator('[class="dropbtn"]').scrollIntoViewIfNeeded()

    //Hover
    await page.waitForTimeout(3000)
    await page.locator('[class="dropbtn"]').hover()
    await page.waitForTimeout(3000)
    await page.locator('//a[text()="Laptops"]').click()

    //Scroll
    await page.locator('[id="field1"]').scrollIntoViewIfNeeded()

    //Double Click
    await page.waitForTimeout(3000)
    await page.locator('[id="field1"]').clear()

    await page.waitForTimeout(3000)
    await page.locator('[id="field1"]').fill('Raviteja')
    
    await page.locator('//button[text()="Copy Text"]').dblclick()
    await page.waitForTimeout(3000)

})


test("Handling Drag and drop " , async ({page})=>{

    //browser launch
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Source
   let source = await page.locator('[id="draggable"]')
   let target = await page.locator('[id="droppable"]')

   //APPRAOCH - 1
//    await page.dragAndDrop('[id="draggable"]' , '[id="droppable"]')
//    await page.waitForTimeout(4000)


    //APPRAOCH - 2
    // await source.dragTo(target)
    // await page.waitForTimeout(4000)


    //APPRAOCH - 3
    await source.hover()
    await page.mouse.down()

    await target.hover()
    await page.mouse.up()
    await page.waitForTimeout(4000)



})


test("Handling Right Click" , async ({page})=>{

    //broswer launch
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')
    await page.waitForTimeout(4000)

    //Right Click
    await page.locator('//span[text()="right click me"]').click({button : "right"})
    await page.waitForTimeout(4000)

    //Dailog
     page.once('dialog' , async a =>{
        expect(a.message()).toContain('clicked: quit')
        await page.waitForTimeout(4000)
        await a.accept()
    })

     await page.click('//span[text()="Quit"]')
     await page.waitForTimeout(4000)

})



test.only("Handling KeyBoard Actions" , async ({page})=>{

    //browser launch
    await page.goto('https://gotranscript.com/text-compare')


    await page.locator('[name="text1"]').scrollIntoViewIfNeeded()

    // await page.mouse.wheel(0, 250)

    //Fill
    await page.locator('[name="text1"]').fill('Javascript with Playwright')
    await page.waitForTimeout(2000)

    //Control + A
    await page.keyboard.press('Control+KeyA')
    await page.waitForTimeout(2000)

    //Control + C
    await page.keyboard.press('Control+KeyC')
    await page.waitForTimeout(2000)

    //Tab
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')

    //Control + V
    await page.keyboard.press('Control+V')
    await page.waitForTimeout(2000)

    //Compare
    for(let i=0; i < 5; i++){
        await page.keyboard.press('Tab')
    }

    //Enter
    await page.keyboard.press('Enter')
    await page.waitForTimeout(2000)

    //Pause
    await page.pause()

})




