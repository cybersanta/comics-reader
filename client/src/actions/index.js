import axios from 'axios'


const setLoading = (isLoading) => ({
  type: 'LOADING',
  payload: isLoading
})

const getComicBook = (url) => (dispatch) => {
  dispatch(setLoading(true))
  axios.get(url)
    .then((res) => {
      dispatch({
        type: 'GET_COMIC_BOOK',
        payload: res.data
      });
      dispatch(setLoading(false))
    }
    )
    .catch(() => dispatch(setLoading(false)))
};

const showTranslator = (current) => {
  return {
    type: 'SHOW_TRANSLATOR',
    payload: !current
  }
}

const showScreenshoter = () => {
  return {
    type: 'SHOW_SCREENSHOTER',
  }
}

const showSidebar = () => {
  return {
    type: 'SHOW_SIDEBAR',
  }
}

const selectedViewerPage = (numberPage) => {
    return {
      type: 'SELECTED_PAGE_VIEWER',
      payload: numberPage
    };
};

const changeZoom = (zoomValue) => {
  return {
    type: 'CHANGE_ZOOM_VIEVER',
    payload: zoomValue
  };
};


//********************* 

const getComicsList = (url) => (dispatch) => {
  dispatch(setLoading(true))
  axios.get(url)
    .then((res) => {
      dispatch({
        type: 'SEARCH_COMICS_LIST',
        payload: res.data
      });
      dispatch(setLoading(false))
    }
    )
    .catch(() => dispatch(setLoading(false)))
};

const getIssuesList = (url) => (dispatch) => {
  dispatch(setLoading(true))
  axios.get(url)
    .then((res) => {
      dispatch({
        type: 'SEARCH_ISSUES_LIST',
        payload: res.data
      });
      dispatch(setLoading(false))
    }
    )
    .catch(() => dispatch(setLoading(false)))
};

//********************* 

export {
    getComicBook,
    getComicsList,
    getIssuesList,
    selectedViewerPage,
    changeZoom,
    showTranslator,
    showScreenshoter,
    showSidebar
};