import { createStore } from "redux";

import Reducer from "./Reducer/Reducer";

export default function configureStore() {
  const state = { loggedIn_person: null };
  const store = createStore(Reducer, state);
  return store;
}
