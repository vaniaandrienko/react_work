import React, {useEffect, useState} from 'react';
import Comment from "./Comment";
import {getComments} from "../service/useService";

const Comments = ({name}) => {

    const [comments, setComments] = useState([]);
    useEffect(() => {
        getComments().then(response => setComments(response))
    }, [])

    return (
        <div>
            <h1 className={'tag'}>{name}</h1>
            <hr/>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}

        </div>
    );
};

export default Comments;