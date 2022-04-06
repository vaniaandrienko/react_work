import React, {useEffect, useState} from 'react';
import Post from "./Post";
import {getPosts} from "../service/useService";

const Posts = ({name}) => {


    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(response => setPosts(response))
    }, [])
    return (
        <div>
            <h1 className={'tag'}>{name}</h1>
            <hr/>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;