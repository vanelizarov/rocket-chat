import * as types from './types';

export const sendMessage = (payload) => ({
    type: types.SEND_MESSAGE,
    payload
});

export const showShadow = () => ({
    type: types.SHOW_SHADOW
});

export const hideShadow = () => ({
    type: types.HIDE_SHADOW
});