/**
 * Adds Components to state
 * @param {Object[]} state current display of the application
 * @param {Object} event event received containing new window type
 * @return {Object[]}
 */
export default function componentsReducer(
  state = [], {type, components}
) {
  return type === 'ADD_COMPONENTS' ? components : state;
}