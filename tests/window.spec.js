
import {test , expect , chromium  , firefox , webkit } from "@playwright/test"


test("Handling Multiple Windows" , async ()=>{

  let browser = await chromium.launch({channel : 'msedge' , slowMo : 1500})

  //permissions : ['geolocation' ]
  let context =  await browser.newContext()   //Incognito Window

  let page1 =  await context.newPage()      //Tab1

 //browser Launch
    await page1.goto('https://www.demoblaze.com/')

    //Title & Url
    console.log(await page1.title())
    console.log(await page1.url())

    //Assertion
    await expect(page1).toHaveTitle('STORE')
    await expect(page1).toHaveURL("https://www.demoblaze.com/")

    //click on LoginLinkText
    await page1.locator('[id="login2"]').click()

    //Fill Username
    await page1.locator('#loginusername').fill('Raviteja18')

    //Password
    await page1.locator('id=loginpassword').fill('Trend@123')

    //LoginBtn
    await page1.locator('[onclick="logIn()" ]').click()


  let page2 =  await context.newPage()      //Tab2

   //Browser Launch
    await page2.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    
    //ALT
    await expect( page2.getByAltText('company-branding')).toBeVisible()

    //PLACEHOLDER
    await page2.getByPlaceholder('Username').fill('Admin')
    await page2.getByPlaceholder('Password').fill('admin123')

    //ROLE
    await page2.getByRole('button' , {name : " Login "}).click()

})



test.only("Handling SPA Single Page Application" , async ({browser})=>{

   let context = await browser.newContext()   //WINDOW
   let page =  await context.newPage()    //TAB

//Browser Launch
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.waitForTimeout(2000)

    //APPRAOCH - 1
 let [newPage]  =   await Promise.all([
        context.waitForEvent('page') ,
        page.click('//a[text()="OrangeHRM, Inc"]')
    ])

    //APPROACH - 2
//      await page.click('//a[text()="OrangeHRM, Inc"]')
//    let newPage2 =  await  context.waitForEvent('page') 
   

    await newPage.locator('[name="EmailHomePage" ]').fill('rebelravi2002@gmail.com')
    await newPage.waitForTimeout(2000)

    await newPage.click('(//input[@name="action_request"])[1]')

    await newPage.goBack()

    await newPage.reload()

    await newPage.goForward()

    await newPage.bringToFront()

    await newPage.close()

    //ALT
    await expect( page.getByAltText('company-branding')).toBeVisible()

    //PLACEHOLDER
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')

    //ROLE
    await page.getByRole('button' , {name : " Login "}).click()


})


