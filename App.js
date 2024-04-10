import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store'; // Import your Redux store

import Main from './components/Main'; // Import your main component

export default function App() {


  return (
    <Provider store={store}>
      <Main />
      {console.log(store) }
    </Provider>
  );
}