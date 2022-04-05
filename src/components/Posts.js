import React, {useEffect, useState} from 'react';
import Post from "./Post";

const Posts = ({name}) => {
    

    const [posts, setPosts] = useState([]);

        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(responce => setPosts(responce))
        }, [])
        return (
            <div>
                <h1 className={'tag'}>{name}</h1>
                <hr/>
                {posts.map(post => <Post key={post.id} post={post} /> )}
            </div>
        );
    };

    export default Posts;