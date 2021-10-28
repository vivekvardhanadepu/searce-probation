import React, {useState} from 'react';

import RegisterComponent from '../../components/Signup';

const Signup = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

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
          setErrors({...errors, password: ''});
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
  };
  return (
    <RegisterComponent
      form={form}
      errors={errors}
      onChange={onChange}
      onSubmit={onSubmit}></RegisterComponent>
  );
};

export default Signup;
