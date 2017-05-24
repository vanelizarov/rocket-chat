import createUUID from 'create-uuid';

const types = {
    REPLENISHMENT: 'Пополнение с карты',
    WRITEOFF: 'Списание на карту',
    ACCRUAL: 'Начисление процентов',
};

const defaultState = {
    clientId: 1,
    list: [
        {
            id: 57890456,
            total: 69650,
            currency: '₽',
            rate: '8',
            createdAt: 1495550671680,
            history: [
                {
                    id: 'wv31RdN',
                    billId: 57890456,
                    date: 1501777260000,
                    cardNumber: '0465',
                    sum: 3500,
                    type: types.REPLENISHMENT
                },
                {
                    id: createUUID(7),
                    billId: 57890456,
                    date: 1499079300000,
                    cardNumber: '0465',
                    sum: 1250,
                    type: types.REPLENISHMENT
                },
                {
                    id: createUUID(7),
                    billId: 57890456,
                    date: 1499079300000,
                    cardNumber: '0465',
                    sum: -6800,
                    type: types.WRITEOFF
                },
                {
                    id: createUUID(7),
                    billId: 57890456,
                    date: 1501777260000,
                    cardNumber: '0465',
                    sum: 10000,
                    type: types.REPLENISHMENT
                },
                {
                    id: createUUID(7),
                    billId: 57890456,
                    date: 1499079300000,
                    cardNumber: '0465',
                    sum: 250,
                    type: types.ACCRUAL
                },
                {
                    id: createUUID(7),
                    billId: 57890456,
                    date: 1499079300000,
                    cardNumber: '0465',
                    sum: 1250,
                    type: types.REPLENISHMENT
                }
            ]
        },
        {
            id: 57890437,
            total: 3502,
            currency: '$',
            rate: '4,5',
            createdAt: 1495550671680,
            history: [
                {
                    id: createUUID(7),
                    billId: 57890437,
                    date: 1501777260000,
                    cardNumber: '0465',
                    sum: -96,
                    type: types.WRITEOFF
                },
                {
                    id: createUUID(7),
                    billId: 57890437,
                    date: 1499079300000,
                    cardNumber: '0465',
                    sum: 1250,
                    type: types.REPLENISHMENT
                },
                {
                    id: createUUID(7),
                    billId: 57890437,
                    date: 1499079300000,
                    cardNumber: '0465',
                    sum: -6800,
                    type: types.WRITEOFF
                },
                {
                    id: createUUID(7),
                    billId: 57890437,
                    date: 1501777260000,
                    cardNumber: '0465',
                    sum: 10000,
                    type: types.REPLENISHMENT
                },
                {
                    id: createUUID(7),
                    billId: 57890437,
                    date: 1499079300000,
                    cardNumber: '0465',
                    sum: 250,
                    type: types.ACCRUAL
                },
                {
                    id: createUUID(7),
                    billId: 57890437,
                    date: 1499079300000,
                    cardNumber: '0465',
                    sum: 1250,
                    type: types.REPLENISHMENT
                }
            ]
        },
        {
            id: 54590437,
            total: 5460,
            currency: '₽',
            rate: '8',
            createdAt: 1495550671680,
            history: [
                {
                    id: createUUID(7),
                    billId: 54590437,
                    date: 1501777260000,
                    cardNumber: '0465',
                    sum: 3500,
                    type: types.REPLENISHMENT
                },
                {
                    id: createUUID(7),
                    billId: 54590437,
                    date: 1499079300000,
                    cardNumber: '0465',
                    sum: 1250,
                    type: types.REPLENISHMENT
                },
                {
                    id: createUUID(7),
                    billId: 54590437,
                    date: 1499079300000,
                    cardNumber: '0465',
                    sum: -6800,
                    type: types.WRITEOFF
                },
                {
                    id: createUUID(7),
                    billId: 54590437,
                    date: 1501777260000,
                    cardNumber: '0465',
                    sum: 10000,
                    type: types.REPLENISHMENT
                },
                {
                    id: createUUID(7),
                    billId: 54590437,
                    date: 1499079300000,
                    cardNumber: '0465',
                    sum: 250,
                    type: types.ACCRUAL
                },
                {
                    id: createUUID(7),
                    billId: 54590437,
                    date: 1499079300000,
                    cardNumber: '0465',
                    sum: 1250,
                    type: types.REPLENISHMENT
                }
            ]
        }
    ]
};

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}