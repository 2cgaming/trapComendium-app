import React from 'react';
import Navbar from './Navbar.jsx';
import styles from './TrapBuilder.scss'

export default class TrapBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trap: {
        tier: 1,
        cost: 1,
        xp: 100,
        mitigation: {
          perception: 15,
          disarm: 15,
          upgrades: []
          // added cost is in upgrades
        },
        trigger: {
          type: 1,
          // added cost is in type and upgrades
          upgrades:[]
        },
        targets: {
          type: 1,
          upgrades:[]
        },
        components: [],
        componentUpgrades: [],
      },
      traps_store:[],
    };
    this.handleTierSelection = this.handleTierSelection.bind(this);
  }

  handleTierSelection(e) {
    const {value} = e.target
    this.setState(state => {
      state.trap.tier = value;
      return state;
    }) 
  }

  requestTrapAttributes() {
    // GET request for trap triggers, targets, upgrades and components
    // 
  }

  render() {
    return (
      <div className="trap_console">
        <Navbar trap={this.state.trap} handleSelect={this.handleTierSelection}/>
        <div className="options">
        </div>
      </div>
    )
  }
}