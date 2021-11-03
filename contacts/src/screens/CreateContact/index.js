import React, {useContext, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import CreateContactComponent from '../../components/CreateContact';
import {GlobalContext} from '../../context/Provider';
import createContact from '../../context/actions/contacts/createContact';
import {CONTACT_LIST} from '../../constants/routeNames.js';

const CreateContact = () => {
  const {navigate} = useNavigation();
  const {
    contactsDispatch,
    contactsState: {
      createContact: {loading, error},
    },
  } = useContext(GlobalContext);
  const [form, setForm] = useState({});

  const onChangeText = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  const onSubmit = () => {
    createContact(form)(contactsDispatch)(() => {
      navigate(CONTACT_LIST);
    });
  };

  return (
    <CreateContactComponent
      onChangeText={onChangeText}
      form={form}
      onSubmit={onSubmit}
      setForm={setForm}
      loading={loading}
      error={error}
    />
  );
};

export default CreateContact;
