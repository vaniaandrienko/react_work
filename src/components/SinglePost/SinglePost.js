import React from 'react';

const SinglePost = ({post,getPost}) => {
    const {id, title, body} = post
    return (
        <div>
            {id} -{title} - {body}
            <button onClick={()=>getPost(id)}>Click</button>


        </div>
    );

};

export default SinglePost;