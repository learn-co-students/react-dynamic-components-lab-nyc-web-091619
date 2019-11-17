import React, { Component } from 'react';

export default class ColorBox extends Component {
  render() {
    const opac = this.props.opacity - 0.1
  
    return this.props.opacity < 0.2 ? null : (
      <div className="color-box" style={{opacity: this.props.opacity}}>
       <ColorBox opacity={opac}/>
      </div>
   )
  }

}
