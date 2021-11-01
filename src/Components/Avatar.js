import React from 'react';

const Avatar = (props) => {
    return (
        <div>
            <span 
            style={{ fontSize: 16, fontStyle: 'bold', marginRight: 15 }}>
                {props.author}
            </span>
            <small>{props.date}</small>
        </div>

    )
}

export default Avatar;