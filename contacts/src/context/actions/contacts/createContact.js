import {
  CREATE_CONTACT_LOADING,
  CREATE_CONTACT_SUCCESS,
  CREATE_CONTACT_FAIL,
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInstance';

export default ({
    firstName,
    lastName,
    phoneNumber,
    phoneCode,
    contactPicture,
  }) =>
  dispatch =>
  onSuccess => {
    const reqPayload = {
      first_name: firstName || '',
      last_name: lastName || '',
      phone_number: phoneNumber || '',
      country_code: phoneCode || '',
      contact_picture: contactPicture || null,
      is_favourite: false,
    };

    dispatch({
      type: CREATE_CONTACT_LOADING,
    });
    axiosInstance
      .post('/contacts/', reqPayload)
      .then(res => {
        console.log('contacts:', res.data);
        dispatch({type: CREATE_CONTACT_SUCCESS, payload: res.data});
        onSuccess();
      })
      .catch(err => {
        console.log('contacts err:', err.response);
        dispatch({
          type: CREATE_CONTACT_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'Something went wrong! Try Again'},
        });
      });
  };
