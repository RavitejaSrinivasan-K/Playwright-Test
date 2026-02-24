//

import {test , expect} from "@playwright/test"

let page

test.beforeAll( async ({browser})=>{

    let context = await browser.newContext()   //Incognito Window
     page = await context.newPage()    //Tab

      //Browser launch
    await page.goto('https://www.demoblaze.com/')

    //Click on LoginLinkText
    await page.locator('[id="login2"]').click()

    await page.locator('[id="loginusername"]').fill('Raviteja18')
    await page.locator('[id="loginpassword"]').fill('Trend@123')


    await page.waitForSelector('//button[text()="Log in"]')
    await page.click('//button[text()="Log in"]')

    //Custome wait
    await page.waitForTimeout(2000)



}) 

test.afterAll( async ()=>{
    page.close()
})


test("Print the Products" , async ()=>{

     //Scenario 1
   let productsList = await page.$$('[class="hrefch"]')

   for (const element of productsList) {
     let text = await element.innerText()
     console.log(text)
   }

})

test("Add to Cart" , async ()=>{

    //Scenario 2
   let products = await page.$$('[class="hrefch"]')

   for (const element of products) {
     let text = await element.innerText()
     
     if(text == 'Sony xperia z5'){
        await element.click()
        break
     }
   }

   await page.waitForURL('https://www.demoblaze.com/prod.html?idp_=6')

   page.once('dialog' , async a=>{
    expect(a.message()).toContain('Product added.')
    await a.accept()
   })

   await page.click('//a[text()="Add to cart"]')

    
})

test("Place Order" , async ()=>{

     //Scenario 3
   await page.click('[id="cartur"]')
   await page.waitForLoadState('load')

   //Verify product added or not
   let prod = await page.locator('//thead//tr//th[text()="Title"]//ancestor::thead//following-sibling::tbody//tr//td[2]')

   for(let i=0; i < prod.count() ; i++){
    let text = await prod.nth(i).textContent()

    if(text == "Sony xperia z5"){
        return true
    }
  
   }

   await page.click('//button[text()="Place Order"]')

   //Place Order
   await page.fill('[id="name"]' , 'Raviteja')
   await page.fill('[id="country"]' , 'India')
   await page.fill('[id="city"]' , 'Chennai')
   await page.fill('[id="card"]' , '987654321234')
   await page.fill('[id="month"]' , '07')
   await page.fill('[id="year"]' , '2028')

   await page.click('//button[text()="Purchase"]')
    
})
