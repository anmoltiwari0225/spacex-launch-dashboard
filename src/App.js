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
      <div>
        <h2>SpaceX Launch Programs</h2>
        <FilterBox />
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;
