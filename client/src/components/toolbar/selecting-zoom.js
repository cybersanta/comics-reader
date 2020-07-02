import React, { Component } from 'react'

class SelectingZoom extends Component {
    state = {
        value: ''
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});  
    }


    render() {
        return(
            <div className="selectdiv">                       
                <select value={this.state.value} onChange={this.handleChange} className="input-zoom mr-1 ml-1">
                    <option value="50">50%</option>
                    <option value="70">70%</option>
                    <option value="100">100%</option>
                    <option value="125">125%</option>
                    <option value="150">150%</option>
                    <option value="auto">Auto</option>
                </select>
            </div> 
        )

    }
}

export default SelectingZoom;