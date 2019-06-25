import React from 'react';
import styles from './App.scss'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trap: {
        tier: 1,
        cost: 1,
        xp: 0,
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
    }
  }

  render() {
    return (
      <div>
        <nav>
          <div className="button brand_name">
            2CGaming
          </div>
          <div className="button">
            Home
          </div>
          <div className="button app_name">
            Trap Builder App
          </div>
          <div className="button dropdown">
            Dropdown Stand-in
          </div>
        </nav>
        <main>
          <div className="wrapper">
            <div>lots of stuff will go here</div>
            <div>Holy mother of god</div>
          </div>
        </main>
        <footer>
          <div>
          Excepting logos owned by other parties, images and content are copyright of 2CGaming, 2019. Please do not reproduce without permission. All mailing lists are moderated by 2CGaming. We will never distribute your information provided to any third-parties. You can unsubscribe at any time. If you want your information changed, please contact us via our contact us page. 
          </div>
        </footer>
          
        </div>)
  }
}