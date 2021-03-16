import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/home/homepage.component';

const WalletsPage = () => {
  return (
    <div>
      <h1>Wallets</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/wallets" component={WalletsPage} />
      </Switch>
    </div>
  );
}

export default App;
