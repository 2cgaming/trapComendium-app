import React from 'react';
import styled from 'styled-components';
import testData from './dummydata.js';

import NavBar from './components/NavBar.jsx';
import TrapConsole from './components/TrapConsole.jsx';

const Main = styled.main`
  min-height: 80vh;
  width: 80vw;
  margin: auto;
  h2 {
    font-family: Luminari, cursive;
    font-size: 3em;
    margin: 20px 0px;
  }
`;

const Footer = styled.footer`
  justify-content: space-around;
  text-align: center;
  background: #f9f9f9;
  padding: 5vh 0;
  div {
    margin:auto;
    font-size: 0.75em;
    color: #676767;
    width: 60%;
  }
`;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: {
        tier: 1,
        cost: 1,
        xp: 100,
        perceptionDC: 15,
        disarmDC: 15
      },
      components:[],
      options: []
    };
  }

  addTrapComponent() {

  }

  updateTrapComponent() {

  }

  updateStats(state) {
    // iterate through all components
    // update cost, tier, xp, DCs, etc.
    // 
  }

  /**
   * @description tests the current state for at least 1 target, trigger and effect
   */
  trapIsComplete(state) {
    //
  }


  componentWillSomedayMount() {
    // request trap options
    // add trap options to state
    const data = testData;
    const dataKeys = Object.keys(data);
    for (let i = 0; i < dataKeys.length; i++) {
      const propertykeys = Object.keys(data[dataKeys[i]]);
      for (let j = 0; j < propertykeys.length; j++) {
        // debugger;
        this.setState(state => {
          state[dataKeys[i]][propertykeys[j]] = data[dataKeys[i]][propertykeys[j]];
          return state;
        })
      }
    }
  }

  requestTrapAttributes() {
    // GET request for trap triggers, targets, upgrades and components
    // render these as options in the modal menus
  }

  render() {
    // divs should become anchor tags when deployed
    return (
      <div id="app">
        <NavBar />
        <Main>
          <h2>Ye Olde Trap Builder</h2>
          <TrapConsole state={this.state}/>
        </Main>
        <Footer>
          <div>
            Excepting logos owned by other parties, images and content are copyright of 2CGaming, 2019. Please do not reproduce without permission. All mailing lists are moderated by 2CGaming. We will never distribute your information provided to any third-parties. You can unsubscribe at any time. If you want your information changed, please contact us via our contact us page. 
          </div>
        </Footer>
      </div>
    )
  }
}
