export default function sessionChange(session) {
  return {
    type: 'CHANGE_SESSION',
    session
  }
}