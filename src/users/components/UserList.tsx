import { useQuery } from "@tanstack/react-query"
import { FC } from "react"
import { apiClient } from "../../api"
import { UserCard } from "../components/UserCard"
import { User } from "../interfaces"


interface Props {
  user: User[];
}

const getUsers = async () => {
  const { data } = await apiClient.get('/users')
  return data
}

export const UserList: FC<Props> = () => {
  const usersQuery = useQuery(['users'], getUsers)
  return (
    <>
      {
        usersQuery.data?.map((user: any) => (
          <UserCard key={user.id} user={user} />
        )
      )
    }
    </>
  )
}

export default UserList