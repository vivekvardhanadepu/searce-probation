import {
  CLEAR_AUTH_STATE,
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../../constants/actionTypes';
import initialAuthState from '../initialStates/authState';
const auth = (state, {type, payload}) => {
  switch (type) {
    case REGISTER_LOADING:
      return {...state, loading: true};
    case REGISTER_SUCCESS:
      return {...state, loading: false, data: payload};
    case REGISTER_FAIL:
      return {...state, loading: false, error: payload};
    case CLEAR_AUTH_STATE:
      return {...initialAuthState};
    default:
      return state;
  }
};

export default auth;
