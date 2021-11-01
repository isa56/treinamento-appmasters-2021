import React from 'react';
import Avatar from './Avatar';
import { CommentList } from './Comments';
import CommentForm from './CommentForm';


const Post = (props) => {
    return (
        <div style={{
            border: 1, 
            borderColor: 'black', 
            borderStyle: 'solid', 
            margin: 30, 
            padding: 10, 
            backgroundColor: "white" }}>

            <Avatar author={props.data ? props.data.author : "Sem autor"} date={props.data ? props.data.date : "Sem data"}/>

            <p style={{
                border: 1, borderColor: 'silver', borderStyle: 'solid', padding: 10 
                }}>
                    {props && props.data ? props.data.message : "Sem mensagem"}
            </p>
            

            <CommentList comments={props.data.comments}/>
            <CommentForm/>

        </div>
    )
}

export default Post;