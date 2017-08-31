import axios from 'axios';
import { FETCH_USER, FETCH_ADMIN } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchAdmin = () => async dispatch => {
  const res = await axios.get('/api/admin');
  dispatch({ type: FETCH_ADMIN, payload: res.data });
};
