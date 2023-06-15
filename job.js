const puppet = require('puppeteer');

(async () => {
    const browser = await puppet.launch({
        headless: false
    })
    const page = await browser.newPage()
    await page.goto("https://upgrade.tj/latest-jobs")
    // await page.waitForTimeout(1500)
    const jobs = await page.evaluate(() => {
        const jobs = document.querySelectorAll('.job-title > a')
        let results = []
        for (el of jobs) {
            results.push(el.innerText)
        }
        return results
    })

   


    // await page.screenshot({path: 'screen.png'})

    // let jobsHandle = await page.$$eval('.job-title > a', e => e)
    // let jobs = []
    // for(job of jobsHandle) {
    //     jobs.push(await job.$eval("a", e => e.innerText))
    // }

    // let text = await page.$eval(".job-title > a", e => e.innerText)
    // console.log(text)
    console.log(jobs)

    browser.close()

})()