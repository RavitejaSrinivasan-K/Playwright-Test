//HANDLING TABLE DATA

import {test , expect} from "@playwright/test"


test("Handling Pagination Table" , async ({page})=>{

    //Browser Launch
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Pagination Table Columns and Rows
   let tableColumns = await page.$$('//table[@id="productTable"]//thead//tr//th')
   console.log("Table Columns :" , await tableColumns.length)

   let tableRows = await page.locator('//table[@id="productTable"]//tbody/tr')
    console.log("Table Rows :" , await tableRows.count())


    //1 Select a product

  let selectedProduct =  tableRows.filter({     //tableRow + td
        has : page.locator('td'),    
        hasText : "Tablet"
    })

    await selectedProduct.locator('input').click()     //tableRows + td + input
    await page.waitForTimeout(3000)


    //2 Select Multiple Products

    async function multiProducts(prodName){
         let selectedProduct =  tableRows.filter({     //tableRow + td
        has : page.locator('td'),    
        hasText : prodName
    })

    await selectedProduct.locator('input').click()
    }

    await multiProducts("Smartphone")
    await multiProducts("Wireless Earbuds")
    await page.waitForTimeout(3000)


  
    //3 Print the products
    //APPRAOCH - 1

    for(let i=0 ; i < await tableRows.count() ; i++){   //i = 0; i < 5 ; i++  //rows
    let prodText = await tableRows.nth(i).locator('td')
    // console.log(await prodText.allInnerTexts())

        for(let j=0 ; j < await prodText.count() ; j++){   //columns wise

           let text = await prodText.nth(j).innerText()
           console.log(await text.trim())
        }

    }

    console.log("----ALL PAGES PRODUCTS----\n")

    //4 Print all Pages
    let prodPages = await page.locator('[id="pagination"] > li > a') //[id="pagination"]  li  a
    console.log("Product Pages :" , await prodPages.count())


    for(let k=0 ; k < await prodPages.count() ; k++){

        if(k > 0){
            await prodPages.nth(k).click()
        }

        //APPROACH - 2
     let products = await page.$$('//table[@id="productTable"]//tbody/tr//td')

     for (const element of products) {
       let text = await element.textContent()
       console.log(await text.trim())
     }
    }



})


