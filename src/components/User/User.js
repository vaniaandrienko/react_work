import React from 'react';


const User = ({user,getUserId,getUser}) => {
    const {id, name,} = user;

    return (
        <div>
            {id}) {name}
            <button onClick={()=> {
                // getUserId(id)
                getUser(user)
            }}>GetDetails</button>
        </div>
    );
};

export {User};