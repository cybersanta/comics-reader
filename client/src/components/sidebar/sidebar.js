import React from 'react';
import { connect } from 'react-redux';
import { selectedViewerPage } from '../../actions'

import SidebarItem from './sidebar-item'



import './sidebar.css'

const Sidebar = ({pages, selectedViewerPage}) => {
    return (
        <div className="sidebar">
            <div className="sidebar-сontent">
                <div className="page-viewer">                
                    {
                        pages.map((page, index) => {
                            return <SidebarItem data={page} numberPage={index + 1} key={index} onSelectViewerPage={() => selectedViewerPage(index)}/>
                        })
                    }                   
                </div>
            </div>
        </div>
    )
}



export default connect(null, {selectedViewerPage})(Sidebar);