import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {logger} from 'redux-logger';

import mainReducer from './reducers/reducers';
import './App.css';
import Dashboard from './components/Dashboard';
import FilterBox from './components/FilterBox';

const store = createStore(mainReducer, applyMiddleware(thunk, logger));

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <div className="nav">
          <h2>SpaceX Launch Programs</h2>
        </div>
        <FilterBox />
        <Dashboard />
        <div className="footer">
          <p>Developed By Anmol Tiwari</p>
        </div>
      </div>
    </Provider>
  );
}

export default App;
