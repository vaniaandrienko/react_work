import React, {useEffect, useState} from 'react';
import User from "./User";

const Users = ({name}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(repsonse => setUsers(repsonse))

    }, [])
    return (
        <div>
            <h1 className={'tag'}>{name}</h1>
            <hr/>
            {users.map(user => <User key={user.id} user={user}/> )}

        </div>

    );
};

export default Users;