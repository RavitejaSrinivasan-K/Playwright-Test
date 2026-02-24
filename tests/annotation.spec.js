//TAG and ANNOTATION

import {test , expect} from "@playwright/test"


test("Test 1 @smoke" , async ()=>{
    console.log("SMOKE")
})

test.skip("Test 2 @sanity" , async ()=>{
    console.log("SANITY")
})

test.fixme("Test 3 @reg" , async ()=>{
    console.log('REG')
})

test.fail("Test 4 @smoke@sanity" , async ()=>{
    console.log("SMOKE WITH SANITY")
})

test.slow("Test 5 @smoke@reg" , async ()=>{
    console.log("SMOKE WITH REG")
})

test("Test 6  @sanity@reg" , async ()=>{
    test.setTimeout(12 * 10000)
    console.log("SANITY WITH REG")
})

test("Test 7"  , {tag : "@ui"} , async ({browserName})=>{

    if(browserName == 'chromium'){
        test.skip()
    }
    console.log("SAMPLE")
})

