const puppet = require('puppeteer');

(async () => {
    const browser = await puppet.launch({
        headless: false
    })
    const page = await browser.newPage()
    await page.goto("https://bard.google.com",{waitUntil: 'domcontentloaded'})
    

    await page.click('.gb_oa')
    await page.waitForTimeout(1500)
    await page.type(`input[type='email']`,'abubakr.shomirsaidov2@gmail.com',{delay: 100})
    await page.click('button[type="button"]')
    await page.waitForTimeout(6500)

    await page.type(`input[type='email']`,'+992928020032',{delay: 60})
    await page.click('button[type="button"]')

    await page.waitForTimeout(6500)



    browser.close()

})()