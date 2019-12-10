import React from 'react';
import style from 'styled-components';
import {BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import BuildMenu from './components/Builder/Menu.jsx';
import ComponentMenu from './components/Builder/ItemMenu.jsx';
import MainMenu from './components/MainMenu.jsx';

const App = () => (
  <div>
    <Main>
      <Switch>
        <Route exact path='/build' component={BuildMenu}/>
        <Route path="/build/:item_type" component={ComponentMenu}/>
        <Route path='/' component={MainMenu}/>
      </Switch>
    </Main>
  </div>
);

const Main = style.div`
  width: 100%;
  min-height: 80vh;
`;

export default App;