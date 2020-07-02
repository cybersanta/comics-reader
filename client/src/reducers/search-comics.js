const initState = {
    comicsList: {},
    isLoading: false
};

export default (state = initState, action) => {

    switch (action.type) {

        case 'LOADING':
            return {
                ...state,
                isLoading: action.payload
        };

        case 'SEARCH_COMICS_LIST': 
            return {
                ...state,
                comicsList: action.payload
            } 

        default:
             return state
    }
}