//HANDLING DIALOGS 

import {test , expect} from "@playwright/test"


test("Handling Simple Alert" , async ({page})=>{

    //browser launch
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Scroll
    await page.locator('[id="alertBtn"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)

    //Handle the event
    page.on("dialog" , async (a) =>{
        expect(a.type()).toEqual("alert")
        expect(a.message()).toContain("I am an alert box!")

        await page.waitForTimeout(3000)

        await a.accept()
    })

        //Click the simple alert-btn
    await page.click('[id="alertBtn"]')
    await page.waitForTimeout(3000)

     //Click the simple alert-btn
    await page.click('[id="alertBtn"]')
    await page.waitForTimeout(3000)

})



test("Handle Confirm alert" , async ({page})=>{

    //browser launch
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Event handle
    page.on("dialog" , async (b)=>{
        expect(b.type()).toEqual('confirm')
        expect(b.message()).toContain('Press a button!')

        await page.waitForTimeout(3000)

        await b.dismiss()
    })

    //Click confirm
    await page.click('[id="confirmBtn"]')
    await page.waitForTimeout(3000)

    // //Click confirm
    // await page.click('[id="confirmBtn"]')
    // await page.waitForTimeout(3000)
})




test("Handling Prompt Alert" , async ({page})=>{

     //browser launch
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Event
    page.once("dialog" , async (c)=>{
        expect(c.type()).toEqual('prompt')
        expect(c.message()).toContain('Please enter your name:')
        expect(c.defaultValue()).toContain('Harry Potter')

        await page.waitForTimeout(3000)

        await c.accept("Raviteja")
    })

    //Click Prompt btn
    await page.click('[id="promptBtn"]')
    await page.waitForTimeout(3000)

    //Click Prompt btn not possible to handle multi times
})





