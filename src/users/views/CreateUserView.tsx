import React from 'react';
import { User } from '../interfaces';
import { FormUser } from '../components/FormUser';

import { apiClient } from "../../api"

const saveUser = async (user: Partial<User> ) => {
  const { data } = await apiClient.post('/users', user)
  return data
}

export const CreateUserView = () => {
  const handleClose = () => {
    console.log('close');
  };

  const handleSubmit = (user: Partial<User>) => {
    console.log('submit', user);
    saveUser(user)
  };
  return (
    <div>
      <h1>Create User</h1>
      <FormUser
        handleCancel={handleClose}
        handleSubmit={handleSubmit}
       />
    </div>
  )
}

export default CreateUserView