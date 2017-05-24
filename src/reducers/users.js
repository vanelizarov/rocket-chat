const defaultState = {
    admin: {
        id: 0,
        name: 'Мария',
        avatarURL: ''
    },
    client: {
        id: 1,
        name: 'Евгений',
        avatarURL: 'https://randomuser.me/api/portraits/men/30.jpg'
    }
};

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}