import React, {useEffect, useState} from 'react';

import {postService} from "../../services";
import {Post} from "../Post/Post";


const Posts = ({singIdPost}) => {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, [])

    return (
        <div>
            <div>
                {posts.map(post => <Post key={post.id} post={post} />)}
            </div>
        </div>

    );
};

export {Posts};