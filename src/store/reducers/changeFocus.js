/**
 * Changes the user view
 * @param {Object[]} state current display of the application
 * @param {Object} event event received containing new window type
 * @return {Object[]}
 */
export default function focusReducer(
  state = '', {type, focus}
) {
  return type === 'CHANGE_FOCUS' ? focus : state;
}