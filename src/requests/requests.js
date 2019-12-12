import axios from 'axios';
import {parseTierValues} from './parseTierValues';

async function fetchData() {
  var components = localStorage.getItem('trap_compendium_components');
  var traps = localStorage.getItem('trap_compendium_traps');

  if (components === null) {
    console.log('unable to find local components')
    components = await fetchComponents();
    components = parseTierValues(components);
    JSON.stringify(components)
    localStorage.setItem('trap_compendium_components', JSON.stringify(components));
  } else {
    components = JSON.parse(components)
  }

  var upgrades = localStorage.getItem('trap_compendium_upgrades');
  if (upgrades === null) {
    console.log('unable to find local upgrades')
    upgrades = await fetchUpgrades();
    JSON.stringify(upgrades)
    localStorage.setItem('trap_compendium_upgrades', JSON.stringify(upgrades));
  } else {
    upgrades = JSON.parse(upgrades)
  }

  var traps = localStorage.getItem('trap_compendium_traps');
  if (traps === null) {
    console.log('unable to find local traps');
    /* not implemented
    traps = await fetchTraps();
    JSON.stringify(components)*/
    traps = [];
    localStorage.setItem('trap_compendium_traps', JSON.stringify(traps));
  } else {
    console.log(traps);
    traps = JSON.parse(traps)
  }
  return [components, upgrades, traps];
}

async function fetchComponents() {
  return axios.get('/api/tc/components').then(res => {
    if (res.status === 200) {
      return res.data;
    } else {
      console.log("error querying component data from server");
      return null;
    }
  })
}

async function fetchUpgrades() {
  return axios.get('/api/tc/upgrades').then(res => {
    if (res.status === 200) {
      return res.data;
    } else {
      console.log("error querying upgrade data from server");
      return null;
    }
  })
}

/* async function fetchUpgrades() {
  return axios.get('/api/tc/upgrades').then(res => {
    if (res.status === 200) {
      return res.data;
    } else {
      console.log("error querying upgrade data from server");
      return null;
    }
  })
}*/

export {
  fetchData,
  fetchUpgrades,
  fetchComponents
}