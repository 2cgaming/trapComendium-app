let defaultState = {
  title: '',
  description: '',
  cost: 0,
  perceptionDC: 15,
  disarmDC: 15,
  mitigation: [],
  trigger:[],
  target:[],
  component:[]
};

/**
 * Changes the user view
 * @param {Object[]} state current display of the application
 * @param {Object} event event received containing new window type
 * @return {Object[]}
 */
export default function sessionReducer(
  state = defaultState, {type, session}
) {
  if (type !== 'CHANGE_SESSION') {
    return state;
  }

  for (let key of Object.keys(session)) {
    state[key] = session[key];
  }

  return state;
}