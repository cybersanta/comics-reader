import React from 'react';
import SelectingPage from './selecting-page'
import Zoom from './zoom';
import { connect } from 'react-redux';

import { showTranslator, showScreenshoter, showSidebar } from '../../actions'
import './toolbar.css';

// import SelectingZoom from './selecting-zoom';

const Toolbar = ({name, viewerPage, pageCount, isTranslator, showTranslator, showScreenshoter, showSidebar}) => {
    return (
        <div className="toolbar">
                <div className="d-flex flex-row justify-content-between">
                    <div className="d-flex align-items-center pl-1">
                        <button className="btn" onClick={() => showSidebar()}><i className="fa fa-columns"></i></button>
                        <SelectingPage pageCount={pageCount} viewerPage={viewerPage}/>
                    </div>

                    <div className="d-flex align-items-center">
                        <span className="">{name}</span>
                    </div>

                    <div className="d-flex align-items-center pr-1">
                        <Zoom classIcon={'fa fa-search-minus'} zoomValue={-100}/>
                        <Zoom classIcon={'fa fa-search-plus'} zoomValue={100}/>

                        {/* <SelectingZoom /> */}

                        <button className="btn" onClick={() => showScreenshoter()}>
                            <img src="https://img.icons8.com/wired/64/000000/scissors.png" alt="button screenshot" className="btn-img"/>
                        </button>
                        <button className="btn" onClick={() => showTranslator(isTranslator)}>
                            <img src="https://img.icons8.com/pastel-glyph/64/000000/translation.png" alt="button translate" className="btn-img"/>
                        </button>
                        
                    </div>
                    
                </div>
        </div>
    )
}




export default connect(null, { showTranslator, showScreenshoter, showSidebar })(Toolbar);