const initState = {
    issuesList: {},
    isLoading: false
};

export default (state = initState, action) => {

    switch (action.type) {

        case 'LOADING':
            return {
                ...state,
                isLoading: action.payload
        };

        case 'SEARCH_ISSUES_LIST': 
            return {
                ...state,
                issuesList: action.payload
            } 

        default:
             return state
    }
}