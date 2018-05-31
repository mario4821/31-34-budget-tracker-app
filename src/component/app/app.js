import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from '../dashboard/dashboard';
import '../../style/main.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
      <BrowserRouter>
      <div>
        <header>
          <h1>Budget Tracker</h1>
          </header>
          <Route exact path="/" component={Dashboard} />
          </div>
          </BrowserRouter>
          </div>
    );
  }
}
