const puppet = require('puppeteer');
const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '6035095474:AAHsS9OrI9eq3co57ab4MhQ387zT743hZ1E';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});


async function main(reqText) {
    const browser = await puppet.launch({
        headless: false
    })
    const page = await browser.newPage()
    await page.goto("https://perplexity.ai")
    

    // typing the request 
    await page.type(`textarea`,reqText,{delay: 60})


    // selecting a mode 
    await page.click('button[class="md:hover:bg-offsetPlus text-textOff md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none transition duration-300 ease-in-out font-sans  select-none items-center relative group justify-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm px-sm font-medium h-8"]',{clickCount: 5})
    await page.waitForTimeout(500)
    await page.click('div[class="animate-in fade-in zoom-in-95 duration-300 rounded-md shadow-sm p-xs min-w-[160px] border  grid grid-cols-2 md:grid-cols-3 gap-two max-w-lg border-borderMain/75 dark:border-borderMainDark divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-background dark:bg-backgroundDark"]:nth-child(1) > div:nth-child(3) > div')
    await page.waitForTimeout(500)
    // entering
    await page.click('button[class="bg-super text-white hover:opacity-80 font-sans focus:outline-none outline-none transition duration-300 ease-in-out font-sans  select-none items-center relative group justify-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8"]')

    //receiving the response
    await page.waitForTimeout(4500)
    let response = await page.$eval('div[class="prose dark:prose-invert inline leading-normal break-words min-w-0 [word-break:break-word]"]',
        e => e.innerText)
    
    return response


    await page.waitForTimeout(6500)


    browser.close()

}

bot.on('text', async(msg) => {
    if(msg.text !== '/start') {
        const msgWait = await bot.sendMessage(msg.chat.id, `Бот генерирует ответ...`);
        var ans = await main(msg.text)



        setTimeout(async () => {

            await bot.editMessageText(ans, {

                chat_id: msgWait.chat.id,
                message_id: msgWait.message_id

            });

        }, 5000);
    } else {
        await bot.sendMessage(msg.chat.id,'Чхе Акмал ошно ! Ягон чиз нависта бенчи чхе !')
    }
})