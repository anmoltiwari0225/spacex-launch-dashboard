import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import mainReducer from './reducers';
import './App.css';
import Dashboard from './components/Dashboard';
import FilterBox from './components/FilterBox';

const store = createStore(mainReducer)

function App() {
  return (
    <Provider store={store}>
      <div>
        <FilterBox />
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;
