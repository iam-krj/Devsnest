import React from 'react';
import './Styling34.css';
import Todo from "./components/todo"
import store from "./store"
import { Provider } from "react-redux"

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <Todo />
      </div>
    </Provider>
  );
}

export default App;