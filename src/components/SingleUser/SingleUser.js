import React from 'react';
import './SingleUser.css'

const SingleUser = ({user,getPost}) => {
    const {id, name, username, email ,phone} = user;

    return (
        <div className={'flex'}>
            <div> Id : {id} </div>
            <div>Name : {name} </div>
            <div> Username : {username}</div>
            <div> Email : {email}</div>
            <div> Phone : {phone}</div>
            <button onClick={()=>getPost(user)}>Click</button>


        </div>
    );

};

export default SingleUser;