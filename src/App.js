import logo from './img/logo.svg';
import './App.css';
import Header from './Components/Header';
import PostForm from './Components/PostForm';
import Posts from './Components/Posts';


function App() {
  return (
    <div className="App" style={{backgroungColor: 'gray'}}>
      <Header/>
      <PostForm/>
        <Posts/>
        <Posts/>
    </div>
  );
}

export default App;
