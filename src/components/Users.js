import React, {useEffect, useState} from 'react';
import User from "./User";
import {getUsers} from "../service/useService";

const Users = ({name}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(response => setUsers(response))
    }, [])
    return (
        <div>
            <h1 className={'tag'}>{name}</h1>
            <hr/>
            {users.map(user => <User key={user.id} user={user}/>)}

        </div>

    );
};

export default Users;