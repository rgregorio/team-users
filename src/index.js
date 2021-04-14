import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Team from './pages/Team/Team';
import TeamDetail from './pages/TeamDetail/TeamDetail';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
      <Switch>
          <Route path="/" exact={true} component={App} />
          <Route path="/team" exact={true} component={Team} />
          <Route path="/team/:id" component={TeamDetail} />
      </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();