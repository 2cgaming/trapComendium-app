/**
 * Adds Upgrades to state
 * @param {Object[]} state current display of the application
 * @param {Object} event event received containing new window type
 * @return {Object[]}
 */
export default function upgradesReducer(
  state = [], {type, upgrades}
) {
  return type === 'ADD_UPGRADES' ? upgrades : state;
}