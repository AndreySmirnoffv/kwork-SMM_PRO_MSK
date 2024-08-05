module.exports = {
    startKeyboard: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "Накрутка поведенчиского фактора", callback_data: "nakrutkapf"}],
                [{text: "Накрутка отзывов", callback_data: "nakrutkaotsivov"}],
                [{text: "Личный кабинет", callback_data: "profile"}],
                [{text: "Правила пользования", callback_data: "rules"}],
                [{text: "Тех Поддержка", callback_data: "support"}],
                [{text: "FAQ/Кейсы", callback_data: "faq"}]
            ]
        })
    },
    PFKeyboard: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "Накрутка Avito", callback_data: "pfavito"}],
                [{text: "Накрутка Яндекс", callback_data: "pfyandex"}]
            ]
        })
    },
    otsiv: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "ВКонтакте", callback_data: "otsivvk"}],
                [{text: "Яндекс", callback_data: "otsivyandex"}],
                [{text: "Avito", callback_data: "otsivavito"}],
                [{text: "2ГИС", callback_data: "otisv2gis"}],
                [{text: "FLAMP", callback_data: "otsivflamp"}],
                [{text: "Google", callback_data: "otsivgoogle"}]
            ]
        })
    },
    profile: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "Показать баланс", callback_data: "showbalance"}],
                [{text: 'Пополнить баланс', callback_data: "addbalance"}],
                [{text: 'Показать список заказов', callback_data: "showorders"}],
                [{text: "Проверить статус заказа", callback_data: "showorderstatus"}]
            ]
        })
    }
}