import React from 'react';
import style from 'styled-components';
import {connect} from 'react-redux';
import Sidebar from './components/Sidebar.jsx';
import Session from './components/DisplaySession.jsx';
import Components from './components/DisplayComponents.jsx'

const mapStateToProps = ({focus, page}) => ({focus, page});

const Console = style.div`
  width: 75%;
  font-size: 1.2em;
`;


function App({focus, page, session, options}) {
  console.log('creating App');
  if (page === 1) {
    return (
      <div>
        <Sidebar />
        <Session data={session} />
      </div>
    )
  } else if (page === 2) {
    return (
      <div>
        <Sidebar />
        <Components data={options[focus]} type={focus} />
      </div>
    )
  }
}

export default connect(mapStateToProps)(App);


// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       session: {
//         title: '',
//         description: '',
//         cost: 0,
//         perceptionDC: 15,
//         disarmDC: 15,
//         mitigation: [],
//         trigger:[],
//         target:[],
//         component:[]
//       },
//       options: {
//         mitigation: null,
//         trigger: null,
//         target: null,
//         component: null,
//       },
//       page: 1,
//       focus: '',
//     };
//   }

//   addComponent({itemType, id, upgrades}) {
//     this.setState(state => {
//       const component = state.options[itemType][id];
//       const obj = Object.create(component);
//       if (itemType !== 'mitigation') {
//         obj.upgrades = upgrades.map(uid => {
//           return component.upgrades.find(upgrade => {
//             upgrade.id === uid;
//           })
//         })
//       }
//       state.session[itemType].push(obj);
//       return state;
//     }).then(() => this.updateStatsFromCost());
//   }

//   removeComponent({itemType, id}) {
//     this.setState(state => {
//       state.session[itemType].filter(component => component.id !== id);
//     })
//   }

  // updateStatsFromCost() {
  //   this.setState(state => {
  //     var cost = 0;
  //     const addToCost = obj => {
  //       cost+= obj.cost;
  //       if (obj.upgrades) {
  //         obj.upgrades.forEach(addToCost);
  //       }
  //     }
  //     state.mitigation.forEach(addToCost);
  //     state.trigger.forEach(addToCost);
  //     state.target.forEach(addToCost);
  //     state.component.forEach(addToCost);
  //     state.cost = cost;
  //   })
  // }

//   async requestTrapData() {
//     return testData;
//   }

//   componentDidMount() {
//     this.requestTrapData().then(data => {
//       actions.handleOption(data);
//     })
//   }

//   render() {
//     const {session, options, focus, page} = this.state;
//     return (
//       <Wrapper>
//         <NavBar />
//         <Main>
//           <Sidebar stats={session}/>
//           <Console data={this.state} updatePage={this.updatePage.bind(this)}
//             updateFocus={this.updateFocus.bind(this)}/>
//         </Main>
//         <Footer>
//           <div>
//             Excepting logos owned by other parties, images and content are copyright of 2CGaming, 2019. Please do not reproduce without permission. All mailing lists are moderated by 2CGaming. We will never distribute your information provided to any third-parties. You can unsubscribe at any time. If you want your information changed, please contact us via our contact us page. 
//           </div>
//         </Footer>
//       </Wrapper>
//     )
//   }
// }
