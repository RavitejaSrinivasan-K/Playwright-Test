//HANDLING DATE PICKER


import {test , expect} from "@playwright/test"

test("Handling Date Picker" , async ({page})=>{

    //browser launch
    await page.goto('https://www.redbus.in/')


    //Click on Date Picker
    await page.click('[aria-haspopup="dialog"]')

    //TARGET
    const selectedDate = "15"
    const selectedMonth = "August"
    const selectedYear = "2028"

    // let currentMonth = await page.locator('[class="monthYear___f6ba90"]').textContent()
    // console.log( currentMonth)
   
    //LOOP
    while(true){

        let currentMonth = await page.locator('[class="monthYear___f6ba90"]').textContent()
        console.log( currentMonth )

        if(currentMonth.includes(selectedMonth) && currentMonth.includes(selectedYear)){
            break
        }

        await page.click('[class="icon icon-arrow arrow___d574fb right___8f9055 "]')  //NEXT
    }

    await page.waitForTimeout(3000)

    // //DATE apprach - 1
    // await page.locator(`//span[text()="15"]`)
    // await page.waitForTimeout(3000)

    //appraoch - 2
   let dates = await page.$$("//ul//div//li//div//div//span")

   for (const dt of dates) {
    let date = await dt.textContent()

    if(date == selectedDate){
        await dt.click()
        break
    }
   }

   await page.waitForTimeout(3000)

})


















