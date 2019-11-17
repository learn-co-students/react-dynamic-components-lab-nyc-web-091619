import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    // check to see if the prop that was passed in greater than 0.2
    // We can see in App.js that the passed in value of the prop
    // "opacity" is "1".  So it will pass the "if" test when it is 
    // first evaluated.  Since it passes the test, we return a <div>
    // element with a className of "color-box" and a style: opacity 
    // that is equal to the current opacity.  Finally, we reduce the
    // the value of this.props.opacity by .1 and (recursively) call the
    // ColorBox render prop to generate a new element with an opacity
    // that is .1 less than the previous render, and so on, until the
    // opacity is reduced to 0.2 at which point the render prop will
    // return null and exit.
    if (this.props.opacity >= 0.2) {
      return (
      <div className="color-box" style={{opacity: this.props.opacity}}>   
        <ColorBox opacity={this.props.opacity - .1} />
      </div>
      )
    }  
    else {
      return null
    }
  }
}
