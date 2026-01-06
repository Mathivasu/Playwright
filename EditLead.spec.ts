
import test, { expect } from '@playwright/test'
 test("EditLead",async({page})=>{

    page.goto("http://leaftaps.com/opentaps/control/main")
    await page .locator("//input[@id='username']").fill("Demosalesmanager")
    await page.locator("//input[@id='password']").fill("crmsfa")
    await page.locator("//input[@value='Login']").click()
    await page.locator("//a[normalize-space()='CRM/SFA']").click()
    await page.locator("(//a[normalize-space()='Leads'])[1]").click()
    await page.locator("(//a[normalize-space()='Create Lead'])[1]").click()
    await page.locator("//input[@id='createLeadForm_companyName']").fill("Freshworks")
    await page.locator("//input[@id='createLeadForm_firstName']").fill("vasumathi")
    await page.locator("(//input[@id='createLeadForm_lastName'])[1]").fill("raja")
    await page.locator("//input[@value='Create Lead']").click()
    await page.locator("(//a[normalize-space()='Edit'])[1]").click()
    await page.locator("//input[@id='updateLeadForm_companyName']").clear()
    await page.locator("//input[@id='updateLeadForm_companyName']").fill("Amazon")
    await page.locator("//input[@type='submit' and @value='Update']").click()
 })