import { combineReducers } from 'redux';

import viewer from './viewer';
import comicBooks from './search-comics';
import comicIssues from './search-issues'

export default combineReducers({ 
    viewer, 
    comicBooks, 
    comicIssues
})