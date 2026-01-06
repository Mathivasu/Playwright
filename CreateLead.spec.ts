

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
await page.locator("(//p[contains(text(), 'Sales')])[3]").click()
await page.waitForTimeout(5000)
await page.locator("//a[.//span[text()='Leads']]").click()
await page.locator("//div[@title='New']").click()
await page.getByRole('combobox', { name: 'Salutation' }).click()
await page.locator("//span[@title='Mrs.']").click()
await page.locator("//input[@name='lastName']").fill("raja")
await page.locator("//input[@name='Company']").fill("Freshworks")
await page.locator("//button[@name='SaveEdit']").click()
const toast = page.locator("//span[contains(@class,'toastMessage')]")
await expect (toast).toContainText("Lead")



 })