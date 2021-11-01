import React from 'react';
import './App.css';
import Header from './Components/Header';
import PostForm from './Components/PostForm';
import Posts from './Components/Posts';

const posts = [
  {
    author:"Yang Xiao Long",
    date: "13 Oct 2021 - 20:21",
    message: "Que maneirooo",
    comments: [
      {
        author:"Ruby Rose", 
        message:"Que legal isso aí!!"
      },
      {
        author:"Weiss Schnee",
        message:"Muito bom!"
      },
    ]
  },
  
  {
    author:"Blake Belladona",
    date: "13 Oct 2021 - 20:00",
    message: "Tem uma loirassa bonita 👀",
    comments: [
      {
        author:"Ruby Rose", 
        message:"Que legal isso aí!!"
      },
      {
        author:"Weiss Schnee",
        message:"Muito bom!"
      },
    ]
  }
]

function App() {
  return (
    <div className="App" style={{
// @ts-ignore
    backgroungColor: "gray"}}>
      <Header/>
      <PostForm/>
      {posts.map(post=>{
        return <Posts data={post}/>
      })}

    </div>
  );
}

export default App;
