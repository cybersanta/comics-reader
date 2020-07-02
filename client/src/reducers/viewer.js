const initState = {
    name: null,
    pages: [],
    viewerPage: 0,
    zoomValue: 877,
    isLoading: false,
    isTranslator: false,
    isScreenshoter: false,
    isSiedebar: true,
    translatedText: '',
    textForTranslation: ''
};

export default (state = initState, action) => {

    switch (action.type) {

        case 'LOADING':
            return {
                ...state,
                isLoading: action.payload
        };

        case 'GET_COMIC_BOOK':
            return {
                ...state,
                name: action.payload.name,
                pages: action.payload.pages
            };

        case 'FETCH_TRANSLATION':
            return {
                ...state,
                translatedText: action.payload
            }

        case 'FETCH_DETECTION_TEXT':
            return {
                ...state,
                textForTranslation: action.payload,
                translatedText: '',
                isTranslator: true,
            }


        case 'SELECTED_PAGE_VIEWER':
            return {
                ...state,
                viewerPage: action.payload,
                zoomValue: 877
            };

        case 'CHANGE_ZOOM_VIEVER':
            return {
                ...state,
                zoomValue: state.zoomValue + action.payload 
            };

        case 'SHOW_TRANSLATOR':
            return {
                ...state,
                isTranslator: !state.isTranslator,
                translatedText: '',
                textForTranslation: '',
            };

        case 'SHOW_SCREENSHOTER':
            return {
                ...state,
                isScreenshoter: !state.isScreenshoter,
            };

        case 'SHOW_SIDEBAR':
            return {
                ...state,
                isSiedebar: !state.isSiedebar,
            };

        default:
            return  state;
    }
}
