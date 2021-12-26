import React from 'react';
import NotFound from './pages/NotFound';
import Main from './pages/Main';
import './styles/App.css';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/' component={NotFound} />
    </Switch>
  );
}

export default App;