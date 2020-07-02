import React from 'react';
import { connect } from 'react-redux';

import { changeZoom } from '../../actions'

const Zoom = ({classIcon, zoomValue, changeZoom}) => {

    const onZoomClick = () => {
        changeZoom(zoomValue)
    }

    return(
        <React.Fragment>
            <button className="btn" onClick={onZoomClick}><i className={classIcon}></i></button>
        </React.Fragment>
    ) 
}

export default connect(null, { changeZoom })(Zoom);