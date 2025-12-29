
import test from '@playwright/test'

test("dropdown_facebook",async({page})=>{

    await page.goto("https://en-gb.facebook.com/")
    await page.waitForTimeout(3000);
    await page.locator("._6ltg a").click();
    await page.locator("//input[@name='firstname']").fill("vasumathi")
    await page.locator("//input[@name='lastname']").fill("k")
    await page.selectOption("#day",{value:"14"})
    await page.selectOption("#month",{label:"Mar"})
    await page.selectOption("#year",{label:"1997"})
    await page.locator("//label[normalize-space()='Female']").click()
    await page.locator("//input[@name='reg_email__']").fill("1234567890")
    await page.locator("//input[@name='reg_passwd__']").fill("vasumathi@1403")
      await page.waitForTimeout(3000);

    /*
    await page.selectOption("#Dropdown-1",{label:"Product questions"})
    await page.waitForTimeout(5000);
    await page.selectOption("#Dropdown-2",{value:"Kendo UI"})
    await page.waitForTimeout(3000);
    await page.selectOption("#Country-1",{index: 0})
    */
})