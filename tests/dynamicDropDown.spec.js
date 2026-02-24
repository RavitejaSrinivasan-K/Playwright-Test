//HANDLING DYNAMIC DROP DOWN

import {test , expect} from "@playwright/test";


test("Handling Dynamic or Auto-Suggestion DropDown" , async ({page})=>{

    //browser launch
    await page.goto("https://ticketnew.com/movies/chennai")


    //Click Search
    await page.click('(//div[text()="Search for movies, cinemas and more"])[1]')
    await page.waitForTimeout(3000)


    //Search "man"
    await page.locator('(//div[@class="dds-relative dds-flex dds-items-center"]//input)[2]').fill("man")
    await page.waitForTimeout(3000)


    //Get the result and select a movie
   let movieList = await page.$$('//div[contains(@class,"dds-flex dds-flex-col dds-gap-[4px]")]//h5')

   for (const element of movieList) {
     let text = await element.textContent()

     if(text.trim() === "Spider-Man: Brand New Day"){
        await element.click()
        break
     }
   }

    await page.waitForTimeout(3000)

})





