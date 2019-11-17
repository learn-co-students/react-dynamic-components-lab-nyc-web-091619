import React, { Component } from 'react';
// import the default component from react
// then set the class to "export default" so it can 
// be inherited by other classes
export default class Comment extends Component {

    render() {
        // return a div with className of "comment" and an
        // innerText that is the passed in prop from BlogPost.js
        // using this syntax: <Comment commentText={comments[2]} />
        // <Comment commentText = {comments[2]}/>
        return (
            <div className="comment">
            { this.props.commentText }
            </div>
        )
    }
}
