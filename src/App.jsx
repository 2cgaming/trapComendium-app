import React from 'react';
import style from 'styled-components';
import {BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import {Header} from './components/Templates/Header.jsx';
import {Sidebar} from './components/Templates/Sidebar.jsx';
import MainMenu from './components/Builder/MainMenu.jsx';
import ComponentMenu from './components/Builder/ItemMenu.jsx';

const App = () => (
  <div>
    <Header/>
    <Main className="row">
      <Sidebar/>
        <Switch>
          <Route path='/mytraps' component={TestDiv}/>
          <Route exact path='/build' component={MainMenu}/>
          <Route path="/build/:item_type" component={ComponentMenu}/>
      </Switch>
    </Main>
  </div>
);


const Main = style.div`
  width: 100%;
  min-height: 80vh;
  font-size: 1.2em;
`;

const TestDiv = style.div`
  height: 100px;
  width: 100px;
  background-color: pink;
`

export default App;