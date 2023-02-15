import React from 'react'
import { FC } from "react";
import { useParams } from 'react-router-dom';
import { ButtonLink } from "../components/ButtonLink"
import { useQuery } from "@tanstack/react-query"
import { User } from '../interfaces';
import { FormUser } from '../components/FormUser';

import { apiClient } from "../../api"
import { useNavigate } from "react-router-dom"


interface Props {
  user: User;
  id: number;
}

const getUser = async (id:any) => {
  const { data } = await apiClient.get(`/users/${id}`)
  return data
}

export const EditUserView: FC<Props> = ( ) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const queryUser = useQuery({
    queryKey: ['user', id],
    queryFn: () => getUser(id),
    retry: 1,
  })

  const handleClose = () => {
    console.log('close');
  }

  const handleSubmit = async (user: Partial<User>) => {
    const { data } = await apiClient.put(`/users/${user.id}`, user)
    data && queryUser.refetch()
    navigate('/')
  }

  return (
    <div>
      <h1>Edit User</h1>
      <ButtonLink link={'/'} title={'Back'} />
      {queryUser.isLoading ? <p>Loading...</p> : (
        <>
          <p>id: {queryUser.data?.id }</p>
          <FormUser
            handleCancel={handleClose}
            userData={queryUser.data}
            handleSubmit={handleSubmit}
          />
        </>
      )}
    </div>
  )
}

export default EditUserView