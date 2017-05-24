import createUUID from 'create-uuid'

const defaultState = {
    clientId: 1,
    list: [
        {
            id: createUUID(5),
            name: 'Orange Благосостояние',
            bank: 'Промсвязьбанк',
            logoURL: 'http://www.banki.ru/upload/iblock/db7/psbank_100x63.gif',
            rate: 9.50,
            sum: 100000,
            begin: (new Date()).getTime(),
            period: 365
        },
        {
            id: createUUID(5),
            name: 'Срочный (Рокетбанк)',
            bank: 'Банк «ФК Открытие»',
            logoURL: 'http://www.banki.ru/upload/iblock/a06/otkritie_bank_100x63.gif',
            rate: 9.00,
            sum: 10000,
            begin: (new Date()).getTime(),
            period: 365
        },
        {
            id: createUUID(5),
            name: 'Весенний',
            bank: 'Бинбанк',
            logoURL: 'http://www.banki.ru/upload/iblock/33a/binbank_100x63.gif',
            rate: 8.75,
            sum: 50000,
            begin: (new Date()).getTime(),
            period: 365
        }
    ]
};

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}