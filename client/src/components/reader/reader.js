import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getComicBook } from '../../actions'
import Sidebar from '../sidebar';
import Toolbar from '../toolbar';
import Viewer from '../viewer'
import Translator from '../translator';
import Spinner from '../spinner'
import Screenshot from '../screenshot';

import './reader.css';


class Reader extends Component {

    componentDidMount() {
        this.props.getComicBook(`/api/comic-book/${this.props.location.pathname.substring(13, this.length)}${this.props.location.search}`);
    }


    render() {

        const {isLoading, name, pages, viewerPage, zoomValue, isTranslator, isScreenshoter, isSiedebar} = this.props.viewer;
        
        return (
            <React.Fragment>
                {isLoading && <Spinner />}
                {!isLoading && (
                    <div className="main-container">
                        <Toolbar name={name} viewerPage={viewerPage} pageCount={pages.length} isTranslator={isTranslator}/>
                        {isSiedebar && <Sidebar pages={pages} /> }
                        <Viewer 
                            currentPage={pages[viewerPage]} 
                            pageCount={pages.length} 
                            zoomValue={zoomValue} 
                            viewerPage={viewerPage} 
                            isSiedebar={isSiedebar}/>
                        {isScreenshoter && <Screenshot />}
                        {isTranslator && <Translator />}
                    </div> 
                )}

            </React.Fragment>
        )

    }
    
}

const mapStateToProps = (state) => ({
    viewer: state.viewer
});


export default connect(mapStateToProps, { getComicBook })(Reader);