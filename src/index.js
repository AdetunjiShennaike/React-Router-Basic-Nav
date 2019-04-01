import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

//import as router
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


// ReactDOM.render(<App />, document.getElementById('root'));
const rootElement = document.getElementById('root');
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
