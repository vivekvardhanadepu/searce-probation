import {
  GET_CONTACTS_FAIL,
  GET_CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInstance';

export default () => dispatch => {
  const data = [
    {
      country_code: 'gbp',
      id: 234,
      first_name: 'vicky',
      last_name: 'mathew',
      phone_number: '124152561676',
      is_favorite: true,
    },
    {
      country_code: 'in',
      id: 12123,
      first_name: 'eren',
      last_name: 'eager',
      phone_number: '12131313313',
      contact_picture: 'https://source.unsplash.com/45x45/?eren,yeager',
      is_favorite: false,
    },
    {
      country_code: 'in',
      id: 1441,
      first_name: 'levi',
      last_name: 'ackerman',
      phone_number: '12151154545',
      contact_picture: 'https://source.unsplash.com/45x45/?levi,ackerman',
      is_favorite: false,
    },
  ];
  dispatch({
    type: GET_CONTACTS_LOADING,
  });
  axiosInstance
    .get('/contacts/')
    .then(res => {
      console.log('contacts:', res.data);
      dispatch({type: GET_CONTACTS_SUCCESS, payload: data});
    })
    .catch(err => {
      dispatch({
        type: GET_CONTACTS_FAIL,
        payload: err.response
          ? err.response.data
          : {error: 'Something went wrong! Try Again'},
      });
    });
};
