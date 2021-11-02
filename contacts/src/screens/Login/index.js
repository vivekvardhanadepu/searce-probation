import React, {useContext, useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

import LoginComponent from '../../components/Login';
import {GlobalContext} from '../../context/Provider';
import login from '../../context/actions/auth/login';

const Login = () => {
  const [form, setForm] = useState({});
  const [signedUp, setSignedUp] = useState(false);
  const {navigate} = useNavigation();
  const {
    authDispatch,
    authState: {error, loading, data},
  } = useContext(GlobalContext);
  const {params} = useRoute();

  useEffect(() => {
    if (params?.data) {
      setSignedUp(true);
      setForm(prevForm => ({...prevForm, userName: params.data.username}));
    }
  }, [params]);
  const onChange = ({name, value}) => {
    setSignedUp(false);
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
      loading={loading}
      justSignedUp={signedUp}></LoginComponent>
  );
};

export default Login;
