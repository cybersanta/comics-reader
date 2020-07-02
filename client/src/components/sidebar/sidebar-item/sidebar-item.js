import React from 'react';
import './sidebar-item.css';

const SidebarItem = ({data, numberPage, onSelectViewerPage}) => {  
    return (
        <div className="page-view" onClick={onSelectViewerPage} title={"Page " + numberPage}>
            <div className="page-view-selection">
            <img className="page-view-image" src={data} alt="" /> 
            </div>
        </div>
    )
}


export default SidebarItem;