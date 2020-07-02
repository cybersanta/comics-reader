import React, { Component } from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import { connect } from 'react-redux';

import { getTranslation } from '../../actions/translation'

import './translator.css'


class Translator extends Component {
    state = {
        textForTranslation: ''
    }

    componentDidUpdate(prevProps) {
        console.log(prevProps.textForTranslation + '\n' + this.props.textForTranslation); 
        if(prevProps.textForTranslation !== this.props.textForTranslation){
            this.setState({textForTranslation: this.props.textForTranslation})
        }
    }

    componentDidMount() {
        this.setState({textForTranslation: this.props.textForTranslation})
    }



    onChange = (e) => {
        if(e.keyCode === 13 && e.shiftKey === false) {
            e.preventDefault()
            this.props.getTranslation(this.state.textForTranslation)
          }
    }


    render() {
        const { translatedText } = this.props
        return(
            <React.Fragment>
                <form onSubmit={this.onSubmit}>
                    <div className="translator">
                        <div className='text-translation'>
                            <TextareaAutosize 
                                maxRows={5} 
                                placeholder="Enter text" 
                                name="textForTranslation"
                                onChange={e => this.setState({ [e.target.name]: e.target.value })}
                                onKeyDown={this.onChange}
                                value={this.state.textForTranslation}/>
                        </div>
                        {translatedText !== "" && <hr/>}
                        <div className="text-translation">
                            <span>{translatedText}</span>
                        </div>
                    </div>
                </form>    
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    translatedText: state.viewer.translatedText,
    textForTranslation: state.viewer.textForTranslation
})

export default connect(mapStateToProps, { getTranslation })(Translator)