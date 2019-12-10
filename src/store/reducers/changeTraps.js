/**
 * Adds Traps to state
 * @param {Object[]} state current traps created by user
 * @param {Object} event event received containing new traps
 * @return {Object[]}
 */
export default function trapsReducer(
  state = [], {type, trap}
) {
  if (type === 'ADD_TRAP') {
    var newState = Array.from(state)
    newState.push(trap)
    return newState;
  }
  return state;
}