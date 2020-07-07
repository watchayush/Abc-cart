export default function Reducer(state = { loggedIn_person: null }, action) {
  switch (action.type) {
    case "USER_LOGGEDIN":
      console.log("inside reducer");

      return { loggedIn_person: action.loggedIn_person };
    default:
      return state;
  }
}
