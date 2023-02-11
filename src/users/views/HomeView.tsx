import { useQuery } from "@tanstack/react-query"
import { FC } from "react";
import { apiClient } from "../../api"
import { UserCard } from "../components/UserCard"
import { User } from "../interfaces";


interface Props {
  user: User[];
}

const getUsers = async () => {
  const { data } = await apiClient.get('/users')
  console.log(data)
  return data
}

export const HomeView: FC<Props> = () => {
  const usersQuery = useQuery(['users'], getUsers)
  return (
    <div>
      {
        usersQuery.data?.map((user: any) => (
          <UserCard key={user.id} user={user} />
        )
      )
    }
    </div>
  )
}

export default HomeView