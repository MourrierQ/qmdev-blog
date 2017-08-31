import { FETCH_ADMIN } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_ADMIN:
      return action.payload || false; //This is the user model
    default:
      return state;
  }
}
