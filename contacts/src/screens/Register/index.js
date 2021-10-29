import React, {useContext, useState, useCallback, useEffect} from 'react';
import {useNavigation, useFocusEffect} from '@react-navigation/native';

import RegisterComponent from '../../components/Signup';
import {LOGIN} from '../../constants/routeNames';
import register, {clearAuthState} from '../../context/actions/register';
import {GlobalContext} from '../../context/Provider';

const Signup = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {navigate} = useNavigation();
  const {
    authDispatch,
    authState: {error, loading, data},
  } = useContext(GlobalContext);

  useFocusEffect(
    useCallback(() => {
      if (data) {
        navigate(LOGIN);
      }
      return () => {
        if (data || error) {
          clearAuthState()(authDispatch);
        }
      };
    }, [data, error]),
  );

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
    if (value) {
      if (name === 'password') {
        if (value.length < 6) {
          setErrors({
            ...errors,
            password: 'Password must be at least 6 characters',
          });
        } else {
          setErrors({...errors, password: null});
        }
      } else {
        setErrors(prevErrors => ({...prevErrors, [name]: null}));
      }
    } else {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: 'This field is required',
      }));
    }
  };

  const onSubmit = () => {
    if (!form.userName) {
      setErrors(prevErrors => ({
        ...prevErrors,
        userName: 'Please enter a username',
      }));
    }

    if (!form.firstName) {
      setErrors(prevErrors => ({
        ...prevErrors,
        firstName: 'Please enter a firstname',
      }));
    }

    if (!form.lastName) {
      setErrors(prevErrors => ({
        ...prevErrors,
        lastName: 'Please enter a lastname',
      }));
    }

    if (!form.email) {
      setErrors(prevErrors => ({
        ...prevErrors,
        email: 'Please enter an email',
      }));
    }

    if (!form.password) {
      setErrors(prevErrors => ({
        ...prevErrors,
        password: 'Please enter a password',
      }));
    }

    if (
      Object.values(form).length === 5 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)
    ) {
      register(form)(authDispatch);
    }
  };
  return (
    <RegisterComponent
      form={form}
      errors={errors}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
      loading={loading}></RegisterComponent>
  );
};

export default Signup;
