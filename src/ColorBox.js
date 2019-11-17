import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    if(this.props.opacity >= 0.2) {
      return (
        <div className="color-box" style={{opacity: this.props.opacity}}>
          <ColorBox opacity={this.props.opacity - 0.1} />
        </div>
      )
    } else {
      return null
    }
  }
  
}

//// Alternative solution:

// export default class ColorBox extends Component {
  
//   render() {
//     return (
//       <div className="color-box" style={{opacity: this.props.opacity}}>
//         {this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1} /> : null}
//       </div>
//     )
//   }
  
// }


// ColorBox
// ✓ uses the value of the opacity prop in its style
// ✓ correctly reduces the opacity by 0.1 after first recursive call
// ✓ correctly reduces the opacity by an additional 0.1 after the second recursive call
// ✓ App renders 10 ColorBoxes in total