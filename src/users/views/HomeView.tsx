import { useQuery } from "@tanstack/react-query"
import { apiClient } from "../../api"

const getUsers = async () => {
  const { data } = await apiClient.get('/users')
  console.log(data)
  return data
}

export const HomeView = () => {
  const usersQuery = useQuery(['users'], getUsers)
  return (
    <div>
      {
        usersQuery.data?.map((user: any) => (
          <div key={user.id}>
            <h1>{user.first_name} {user.second_name}</h1>
            <p>{user.second_name}</p>
            <p>{user.email}</p>
            <img src={user.avatar} alt={user.id} />
          </div>
        )
      )
    }
    </div>
  )
}

export default HomeView