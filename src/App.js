import React, { Component } from 'react';
import './App.css';
//import ReactDOM from "react-dom";
//import ProductList from "./ProductList";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import RedditChildren from './RedditChildren';
//import store from './store';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
        <Provider store={store}>
        <RedditChildren/>
        
      </Provider>
          
        </header>
      </div>
    );
  }
}
//const rootElement = document.getElementById("root");

export default App;
