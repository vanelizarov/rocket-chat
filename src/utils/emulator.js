const messages = [
    {
        from: 1,
        text: 'Привет!',
        date: 1495580528426,
        transaction: null
    },
    {
        from: 1,
        text: 'можете проверить мой счет? Я вчера им пользовался',
        date: 1501707600000,
        transaction: null
    },
    {
        from: 1,
        text: 'спасибо большое за помощь!',
        date: 1501707600000,
        transaction: null
    },
    {
        from: 1,
        text: 'привет. А как перейти на тариф, на котором самый большой процент на остаток по счетам?',
        date: 1501707600000,
        transaction: null
    },
    {
        from: 1,
        text: 'приветствую. Пришлите, пожалуйста, последнюю операцию по долларовому счету',
        date: 1501707600000,
        transaction: null
    },
    {
        from: 1,
        text: 'спасибо!',
        date: 1501707600000,
        transaction: null
    }
];

export function* pool() {
    let index = 0;
    for (;;) {
        if (index === messages.length) index = 0;
        index++;
        yield messages[index - 1];
    }
}