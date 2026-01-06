
import test, { expect } from '@playwright/test'
 test("CreateLead",async({page})=>{
 // Login 
await page.goto("https://login.salesforce.com") 
await page.locator("//input[@id='username']").fill("dilipkumar.rajendran@testleaf.com")
await page.locator("//input[@id='password']").fill("TestLeaf@2025")
await page.locator("//input[@id='Login']").click();
//Click the toggle button
await page.getByRole('button',{name :'App Launcher'}).click()
await page.waitForTimeout(5000)
await page.locator("//button[normalize-space()='View All']").click()

await page.getByRole('combobox',{name:'Search apps or items...'}).fill("individuals")
await page.waitForTimeout(5000)
await page.locator("//p[normalize-space()='Individuals']").click()
await page.locator("//div[@title='New']").click()
await page.getByPlaceholder('Last Name').fill("raja")
await page.locator("//span[normalize-space()='Save']").click()

 })