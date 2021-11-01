import React from 'react';
import Avatar from './Avatar';

const Comments = (props) => {
    console.log(props);
    return (
        <div style={{border: 1, borderColor: 'darkblue', borderStyle: 'solid', padding: 6, margin: 5 }}>
            <Avatar author={props.data.author} />
            <p>{props.data.message}</p>
        </div>
    )
}

const CommentList = (props) => {


    if( props.data ) {
        return <div><small>Seja o primeiro a comentar</small></div>
    } else {
        return (
            <div>
                {props.comments.map(comment=>{
                    return <Comments data={comment}/>
                })}
            </div>
        )
    }
}

export { Comments, CommentList };