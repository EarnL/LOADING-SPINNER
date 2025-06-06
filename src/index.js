import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import {store} from './app/store';

/*
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
  */
const container = document.getElementById('root');
const root = createRoot(container); // Create a root.
root.render( 
<Provider store={store}>
  <App/>
</Provider>,);
