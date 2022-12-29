import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createStore} from "@reduxjs/toolkit"
import {Provider} from "react-redux"
import Reducer from "./reducers/reducer1"

// creating the redux store
const store = createStore(Reducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 'Provider' used for store access to globally */}
    <Provider store={store}> <App /> </Provider>
  </React.StrictMode>
);