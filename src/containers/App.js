import React from 'react'
import { Route, Link } from 'react-router-dom';
import {hot} from 'react-hot-loader';

import 'bootstrap/dist/css/bootstrap.min.css';

import CounterExample from './CounterExample'
import About from './About'

const App = () => (
  <div>
    <div className='row'>
      <div className='col'>
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link" href='/'>Counter</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='/about-us'>About</a>
        </li>
      </ul>
    </div>
    </div>

    <main>
      <Route exact path="/" component={CounterExample} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

export default hot(module)(App)
