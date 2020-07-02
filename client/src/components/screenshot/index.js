import React from 'react'
import ResizableRect from 'react-resizable-rotatable-draggable'
import { connect } from 'react-redux'
import html2canvas from 'html2canvas'
import './screenshot.css'

import { getTextFromImage } from '../../actions/translation'

class Screenshot extends React.Component {
        state = {
            width: 100,
            height: 100,
            top: 70,
            left: 770,
        }
     
      handleResize = (style, isShiftKey, type) => {
        let { top, left, width, height } = style
        top = Math.round(top)
        left = Math.round(left)
        width = Math.round(width)
        height = Math.round(height)
        this.setState({
          top,
          left,
          width,
          height
        })
      }
     
      handleDrag = (deltaX, deltaY) => {
        this.setState({
          left: this.state.left + deltaX,
          top: this.state.top + deltaY
        })
      }

      onClick = () => {
        const {width, top, left, height} = this.state 
         html2canvas(document.querySelector("#root"), {
          width,
          height,
          x: left,
          y: top, 
          allowTaint : true,
          proxy: 'http://localhost:8080'
        }).then(canvas => { 

          this.props.getTextFromImage(canvas.toDataURL('jpeg', 1.0))
        })

      }
     
      
      render() {
        const {width, top, left, height} = this.state
        const btnStyle = { top: top + height + 5, left: left + width - 41, position: 'absolute'}
        return (
          <div className="screenshot">
            <div className="App">
              <ResizableRect
                left={left}   top={top}
                width={width} height={height}
                zoomable='n, w, s, e, nw, ne, se, sw'
                rotatable={false}
                onResize={this.handleResize}
                onDrag={this.handleDrag}
              />
              <button style={btnStyle} onClick={this.onClick}>Ok</button>
            </div>
          </div>
        )
      }
}

export default connect(null, { getTextFromImage })(Screenshot);