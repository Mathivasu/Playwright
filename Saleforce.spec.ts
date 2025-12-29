
import test from '@playwright/test'

test("Using the page fixture",async({page})=>{

    await page.goto("https://www.facebook.com")
})