import React from 'react';
import style from 'styled-components';
import {connect} from 'react-redux';
import {actions} from '../store';

const Option = style.p`
  padding: 10px 15px;
  margin: 0.5rem 1rem;
  background: white;
  border: 3px solid black;
  border-radius: 5px;
  font-size: 1.3rem;
  font-family: var(--fonts);
  text-align: center;
  &.focused {
    border-color: var(--primary-color);
    background: var(--primary-color);
    color: white;
  }
  &:hover {
    cursor: pointer;
  }
`;

const Sidebar = style.div`
  width: fit-content;
  background-color: #9ea1ee30;
  height: fill-available;
`;

const SidebarComponent = ({focus, page, updatePage}) => (
  <Sidebar id="sidebar" className="col">
    <Option className={focus === 'user_traps' ? 'focused' : null}
      onClick={(e) => console.log('Going to user traps')}>
        My Traps
    </Option>
    <Option className={focus === 'create' ? 'focused' : null}
      onClick={(e) => console.log('Going to create trap')}>
      Create New Trap</Option>
    <Option className={focus === 'something' ? 'focused' : null}
      onClick={(e) => console.log('Going to... do something')}
        >Something Else</Option>
    <Option>Focus: {focus}<br/>Page: {page}</Option>
  </Sidebar>
);

const mapStateToProps = ({focus, page}) => ({focus, page});

const mapDispatchToProps = (dispatch) => ({
  updatePage: (page) => {
    dispatch(actions.handlePage(page));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SidebarComponent);

/*

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
*/