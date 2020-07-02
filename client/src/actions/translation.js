import axios from 'axios'
// import { showTranslator } from './index'

// const setTranslationLoading = (isLoading) => ({
//   type: 'LOADING',
//   payload: isLoading
// })

const getTranslation = (userData) => (dispatch) => {
    // dispatch(setTranslationLoading(true));
    axios.post('/api/translation', {text: userData})
        .then((res) => {
        dispatch({
            type: 'FETCH_TRANSLATION',
            payload: res.data
        });
        // dispatch(setTranslationLoading(false))
    })
}

const getTextFromImage = (imageBase64) => (dispatch) => {
    axios.post('/api/detectionText', {image: imageBase64})
        .then((res) => {
        dispatch({
            type: 'FETCH_DETECTION_TEXT',
            payload: res.data
        });
        dispatch(getTranslation(res.data))
    })
    // dispatch(showTranslator(true));
}

export {
    getTranslation,
    getTextFromImage,
};