import React, { Component } from 'react';

export default class Comment extends Component {
	render() {
		return <div className="comment">{this.props.commentText}</div>;
	}
}

// Comment
// ✓ uses the value of the commentText prop in its render method
// ✓ has the proper class

