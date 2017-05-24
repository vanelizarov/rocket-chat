import * as types from '../actions/types';

const defaultState = {
    userId: 1,
    list:  [
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
            from: 0,
            text: 'здравствуйте! К сожалению, никак',
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
            from: 0,
            text: '',
            date: 1501707600000,
            transaction: {
                billId: 57890456,
                operationId: 'wv31RdN'
            }
        },
        {
            from: 1,
            text: 'приветствую. Пришлите, пожалуйста, последнюю операцию по долларовому счету',
            date: 1501707600000,
            transaction: null
        }
    ],
    shadow: false
};

const update = (state, mutations) => Object.assign({}, state, mutations);

export default (state = defaultState, action) => {
    switch (action.type) {
        case types.SEND_MESSAGE:
            return update(state, { list: [action.payload, ...state.list] });
        case types.SHOW_SHADOW:
            return update(state, { shadow: true });
        case types.HIDE_SHADOW:
            return update(state, { shadow: false });
        default:
            return state;
    }
}