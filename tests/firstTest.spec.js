//HANDLING ASSERTIONS

import {test , expect} from "@playwright/test"

test("Handling Assert " , async ({page})=>{

    //browser launch
    await page.goto('https://www.makemytrip.com/')

    await page.click('[data-cy="closeModal"]')

    await page.click('[alt="minimize"]')

    //Assert
    await expect(page.locator('[class="chNavIcon appendBottom2 chSprite chFlights active"]')).toBeVisible()
    await expect.soft(page.locator('[class="chNavIcon appendBottom2 chSprite chHotels"]')).toBeEnabled()
    await expect(page.locator('[class="chNavIcon appendBottom2 chSprite chHomestays inactive"]')).toBeVisible()
})






















