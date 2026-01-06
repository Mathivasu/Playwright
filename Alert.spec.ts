import test, { expect } from '@playwright/test'
test("Alert handling - Using Page.once()", async ({ page }) => {

    page.once('dialog', dialogBox=>{
        console.log("Type of the alert is :"+ dialogBox.type())
        console.log("Message of the alert is :"+ dialogBox.message())
        if(dialogBox.type() === 'alert'){
             dialogBox.accept() 
        }else if(dialogBox.type() === 'confirm'){
            dialogBox.accept()
        }
        else if(dialogBox.type() === 'prompt'){
             dialogBox.accept("welcome") 
        }
        else {
            dialogBox.dismiss()
        }
    })

    

await page.goto("https://www.leafground.com/alert.xhtml")

//confirm alert
   await page.click("(//span[text()='Show'])[2]")
    await page.waitForTimeout(5000)

//simple alert === alert
//await page.click("(//span[text()='Show'])[1]")
//await page.waitForTimeout(5000)
 
//prompt alert 
//await page.locator("(//span[@class='ui-button-text ui-c'])[6]").click()
//await page.waitForTimeout(5000)

})