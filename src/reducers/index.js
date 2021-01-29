const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_USERNAME':
            return {
                ...state,
                user: [...state.user, action.payload]
            }
        default:
            return state;
    }
};

export default reducer;