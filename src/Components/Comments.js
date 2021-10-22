import React from 'react';

const Comments = (props) => {
    return (
        <div>
            Ruby Rose
            <p>Que legal!!!</p>
        </div>
    )
}

const CommentList = () => {
    return (
        <div>
            <Comments/>
            <Comments/>
        </div>
    )
}

export { Comments, CommentList };