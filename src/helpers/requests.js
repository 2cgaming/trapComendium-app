//import dummyData from './dummydata';
import axios from 'axios';

async function fetchData() {
  var components = localStorage.getItem('trap_compendium_components');

  if (components === null) {
    console.log('unable to find components')
    components = await fetchComponents();
    JSON.stringify(components)
    localStorage.setItem('trap_compendium_components', JSON.stringify(components));
  } else {
    components = JSON.parse(components)
  }

  var upgrades = localStorage.getItem('trap_compendium_upgrades');
  if (upgrades === null) {
    upgrades = await fetchUpgrades();
    JSON.stringify(upgrades)
    localStorage.setItem('trap_compendium_upgrades', JSON.stringify(upgrades));
  } else {
    upgrades = JSON.parse(upgrades)
  }
  return [components, upgrades];
}

async function fetchComponents() {
  return axios.get('/api/tc/components').then(res => {
    if (res.status === 200) {
      return res.data;
    } else {
      console.log("error querying component data from server");
      // render an error of some kind
    }
  })
}

async function fetchUpgrades() {
  return axios.get('/api/tc/upgrades').then(res => {
    if (res.status === 200) {
      return res.data;
    } else {
      console.log("error querying upgrade data from server");
      // render an error of some kind
    }
  })
}

export {
  fetchData,
  fetchUpgrades,
  fetchComponents
}