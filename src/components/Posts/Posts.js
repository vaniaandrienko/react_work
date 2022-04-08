import React, {useEffect, useState} from 'react';

import {postService} from "../../services";
import {Post} from "../Post/Post";


const Posts = ({getPost}) => {

    let [posts, setPosts] = useState([]);
    let [post, setPost] = useState(null)

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, [])

    const getPostId = async (id) => {
        let {data} = await postService.getById(id)
        setPost(data)

    }
    return (
        <div>
            <div>
                {posts.map(post => <Post key={post.id} post={post} getPostsId={getPostId} getPost={getPost}/>)}
            </div>
            {post && <div>{post.title} -- {post.body}</div>}
        </div>

    );
};

export {Posts};