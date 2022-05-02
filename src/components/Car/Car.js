import React from 'react';

const Car = ({car: {id, model, price, year}}) => {
    return (
        <div>
            {id} {model} {price} {year}
            <button onClick={()=>{}}>delete</button>
            <button onClick={()=>{}}>update</button>
        </div>
    );
};

export {Car}