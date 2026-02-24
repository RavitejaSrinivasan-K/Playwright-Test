
import {test , expect} from "@playwright/test"


test.beforeAll(async ()=>{
    console.log("Browser launched")
})

test.afterAll(async ()=>{
    console.log("Browser Closed")
})

test.beforeEach(async ()=>{
    console.log("Login ")
})

test.afterEach(async ()=>{
    console.log("Logout")
})



test.describe("Grouping 1" , async ()=>{

    test("Test 1" , async ()=>{
    console.log("TEST 1")
})

test("Test 2" , async ()=>{
     console.log("TEST 2")
})
})


test.describe("Grouping 2" , async ()=>{
    
    test("Test 3" , async ()=>{
     console.log("TEST 3")
})

test("Test 4" , async ()=>{
     console.log("TEST 4")
})

})

