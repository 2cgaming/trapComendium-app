export default function pageReducer(
  state = 1, {type, page}
) {
  return type === 'CHANGE_PAGE' ? page : state;
}