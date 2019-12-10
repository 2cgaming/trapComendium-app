let defaultState = {
  name: '',
  text: '',
  cost: 0,
  perceptionDC: 15,
  disarmDC: 15,
  triggers:[],
  targets:[],
  effects:[],
  upgrades:[]
};

/**
 * The store needs to know:
 *  - When adding
 *  --> copy entire object
 *  ---> add an array for upgrades, with a "applications" key
 *  - When subtracting
 *  --> just need _id, will also delete upgrades
 *  */

/**
 * Manipulates the trap the user is creating
 * @param {Object[]} state current components added and cost
 * @param {Object} event event received containing new window type
 * @return {Object[]}
 */
export default function sessionReducer(
  state = defaultState, {type, component}
) {
  if (type === 'ADD_TO_SESSION') {
  
    var t = component.type + 's';
  
    state[t].push(component);
    
  } if (type === 'REMOVE_FROM_SESSION') {
  
    var t = component.type + 's';

    state[t] = state[t].filter(c => c._id === component.id)
  }

  return state;
}
