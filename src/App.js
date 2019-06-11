import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'

import Posts from './components/Posts'
import PostsForm from './components/PostsForm'
import store from './store'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Posts Bro
        </a>
      </header>

      <PostsForm />
      <Posts />
    </div>
    </Provider>
  );
}

export default App;
