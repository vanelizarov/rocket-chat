import * as types from '../actions/types';

const defaultState = {
    userId: 1,
    list:  [

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