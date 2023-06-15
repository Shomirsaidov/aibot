
    // selecting a mode 

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
