import React, {useContext, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import LoginComponent from '../../components/Login/index';
import {GlobalContext} from '../../context/Provider';
import login from '../../context/actions/login';

const Login = () => {
  const [form, setForm] = useState({});
  const {navigate} = useNavigation();
  const {
    authDispatch,
    authState: {error, loading, data},
  } = useContext(GlobalContext);

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  const onSubmit = () => {
    if (form.userName && form.password) {
      login(form)(authDispatch);
    }
  };

  return (
    <LoginComponent
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
      loading={loading}></LoginComponent>
  );
};

export default Login;
