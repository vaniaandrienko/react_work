import React from 'react';
import css from  './SingleUser.module.css'

const SingleUser = ({user,setSinglePost}) => {
    const {id, name, username, email ,phone} = user;

    return (
        <div className={css.flex}>
            <div> Id : {id} </div>
            <div>Name : {name} </div>
            <div> Username : {username}</div>
            <div> Email : {email}</div>
            <div> Phone : {phone}</div>
            <button onClick={()=>setSinglePost(user.id)}>Click</button>


        </div>
    );

};

export default SingleUser;