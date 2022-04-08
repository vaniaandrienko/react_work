import React from 'react';

const Post = ({post}) => {
    const {id, title, body} = post
    return (
        <div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
            <hr/>

        </div>
    );
};

export {Post};