
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
await page.waitForTimeout(5000)
//await page.locator("//p[@class='slds-truncate']/mark").click()
await page.locator("(//span[contains(text(),'Individuals')])[1]").click()
await page.locator("[name='Individual-search-input']").fill("raja")
await page.locator("[name='Individual-search-input']").press('Enter')
await page.locator("(//lightning-button-menu[@class='slds-dropdown-trigger slds-dropdown-trigger_click'])[2]").click()
await page.locator("//a[@title='Edit']").last().click()
await page.waitForTimeout(5000)
await page.getByRole('combobox',{name:'Salutation'}).click()
await page.getByRole('option',{name:'Mr.'}).click()
await page.locator("[placeholder='First Name']").fill("vasu")
await page.locator(".forceActionButton[title='Save']").click()


 })