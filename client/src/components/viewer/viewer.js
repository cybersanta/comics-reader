import React from 'react';

import './viewer.css';
import { connect } from 'react-redux';
import { selectedViewerPage } from '../../actions'


const Viewer = ({viewerPage, zoomValue, selectedViewerPage, currentPage, pageCount, isSiedebar}) => {

    const imgStyle = {
        width: zoomValue + "px",
        height: "auto"
    }

    const viewerStyle = {}

    if(!isSiedebar) {
        viewerStyle.left = 0
    }

    return(
        <div className="viewer" style={viewerStyle}>
            <div className="viewer-content">
                <div className="page" style={imgStyle}>
                    <img className="viewerImage img-fluid" style={imgStyle} src={currentPage} alt="" />
                </div>
            </div>

            <div className="nav-btn" id="nav-btn-left" onClick={() => {if (viewerPage > 0) selectedViewerPage(viewerPage - 1)}}>
                <i className="fa fa-chevron-left nav_btn_icon fa-2x"></i>
            </div>
            <div className="nav-btn" id="nav-btn-right" onClick={() => {if (viewerPage < pageCount - 1) selectedViewerPage(viewerPage + 1)}}>
                <i className="nav_btn_icon fa fa-chevron-right fa-2x"></i>
            </div>
        </div>
    ) 

}

export default connect(null, {selectedViewerPage})(Viewer);