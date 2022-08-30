import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

import { StateProvider } from "./context/StateProvider";
import { initialState } from "./context/initialState";
import reducer from './context/reducer';
// userAuthContextProvider context
import { UserAuthContextProvider } from './context/UserAuthContext';
//Redux
import { Provider } from 'react-redux';
import store from './components/redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <UserAuthContextProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </UserAuthContextProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();