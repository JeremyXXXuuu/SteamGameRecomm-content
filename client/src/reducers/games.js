import { FETCH_ALL } from "../actions/actionTypes";

export default (games = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;

    default:
      return games;
  }
};
