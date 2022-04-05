import React, {useEffect, useState} from 'react';
import Comment from "./Comment";
const Comments = ({name}) => {

    const [comments,setComments] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(responce => setComments(responce))
    }, [])

    return (
        <div>
            <h1 className={'tag'}>{name}</h1>
            <hr/>
            {comments.map(comment=> <Comment key={comment.id} comment={comment} />)}

        </div>
    );
};

export default Comments;