let defaultState = {
  mitigation: null,
  trigger: null,
  target: null,
  component: null,
};

/**
 * Changes the user view
 * @param {Object[]} state current display of the application
 * @param {Object} event event received containing new window type
 * @return {Object[]}
 */
export default function optionsReducer(
  state = defaultState, {type, options}
) {
  return type === 'ADD_OPTIONS' ? options : state;
}