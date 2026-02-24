

import {test , expect } from "@playwright/test"


test("Handling Dynamic Drop Down" , async ({page})=>{

  //browser
  await page.goto('https://ticketnew.com/movies/chennai')

  //Click on Search box 
  await page.click('(//div[text()="Search for movies, cinemas and more"])[1]')

  await page.waitForLoadState('load')

  //pass movie content
  await page.locator('(//input[contains(@class,"dds-rounded-lg dds-outline-none")])[2]')
  .fill('man')


   await page.waitForTimeout(5000)

  //Select your movie name
 let moviesList = await page.$$('//div[contains(@class,"dds-flex dds-flex-col dds-gap-[4px]")]//h5')


 for (const element of moviesList) {
   let text = await element.textContent()

   if(text.trim() == "Man Aatle Mantle"){
    await element.click()
    break
   }
 }

 await page.waitForTimeout(5000)


})



test("Handling Date Picker" , async ({page})=>{

  //browser
  await page.goto('https://www.redbus.in/')

  //Click on date picker
  await page.locator('[class="dojWrapper___d991d2"]').click()

  //Apply loop
  
  let selectedDate = "15"
  let selectedMonth = "August"
  let selectedYear = "2027"


  while(true){
   let currentMonth = await page.locator('[class="monthYear___62118b"]').textContent()
    console.log(currentMonth.trim())


    if(currentMonth == selectedMonth && currentMonth == selectedYear){
      break
    }

    await page.click('[class="icon icon-arrow arrow___3223f0 right___590028 "]')


  }

  //Dates

 let dates = await page.$$('//ul[@class="datesWrap___f85169"]//div//li//div//div//span')

  for (const element of dates) {
  let dt =  await element.textContent()

  if(dt == selectedDate){
    await element.click()
    break
  }
  }


})