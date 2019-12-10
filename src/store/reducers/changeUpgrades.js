/**
 * Adds Upgrades to state
 * @param {Object[]} state current upgrades available
 * @param {Object} event event received containing new upgrades
 * @return {Object[]}
 */
export default function upgradesReducer(
  state = [], {type, upgrades}
) {
  return type === 'ADD_UPGRADES' ? upgrades : state;
}