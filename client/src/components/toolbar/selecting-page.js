import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectedViewerPage } from '../../actions'

class SelectingPage extends Component {

    state = { 
        newPage: 1
    }

    componentDidUpdate(prevProps) {
        if(this.props.viewerPage !== prevProps.viewerPage || this.state.newPage > this.props.pageCount) 
        this.setState({newPage: this.props.viewerPage + 1})
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        
        if(e.target.value < this.props.pageCount + 1 && e.target.value > 0){
            
            this.props.selectedViewerPage(e.target.value - 1)
        }
    }

    render() {
        
        return (
            <React.Fragment>
                <input type="number" name="newPage" value={this.state.newPage} onChange={this.onChange} className="input-page-number mr-2 ml-2"/>
                <span> of {this.props.pageCount}</span>
            </React.Fragment>
        )
    }
}


export default connect(null, {selectedViewerPage})(SelectingPage)