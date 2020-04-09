const initState = {
    mountComponent: "overview",
    className: "col-md-12 navigation display"
}

const rootReducers = (state = initState, action) => {
    // console.log(state);
    if (action.type === 'mountComponent') {
        return {
            ...state,
            mountComponent: action.component
        };
        // console.log(state);
    }
    if (action.type === 'className') {
        return {
            ...state,
            className: action.string
        }
    }
    return state;
};

export default rootReducers;
