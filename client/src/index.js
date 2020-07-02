import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import ErrorBoundary from './components/error-boundary';
import Reader from './components/reader';
import ComicsSearch from './components/comics-serch/index'
import IssuesSearch from './components/issues-search'
import Screenshot from './components/screenshot'

import store from './store';

ReactDOM.render(
<Provider store={store}>
    <ErrorBoundary>
            <BrowserRouter>
                <React.Fragment>
                    <Route path="/" component={ComicsSearch} exact/>
                    <Route path="/search-comics/:name" component={IssuesSearch} exact/>
                    <Route path="/read-comics/" component={Reader} />
                    <Route path="/test"  component={Screenshot} exact/>
                </React.Fragment>
            </BrowserRouter>
    </ErrorBoundary>
</Provider>    
, document.getElementById('root'))

