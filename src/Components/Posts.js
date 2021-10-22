import React from 'react';
import Avatar from './Avatar';
import { CommentList } from './Comments';

const Post = () => {
    return (
        <div style={{
            border: 1, 
            borderColor: 'black', 
            borderStyle: 'solid', 
            margin: 30, 
            padding: 10, 
            backgroundColor: "white" }}>

            <Avatar/>

            <p style={{border: 1, borderColor: 'silver', borderStyle: 'solid', padding: 10 }}>Estou muito feliz aqui :D</p>

            <CommentList/>

        </div>
    )
}

export default Post;