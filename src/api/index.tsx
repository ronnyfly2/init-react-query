import axios from "axios"


const api = 'https://635017b9df22c2af7b630c3e.mockapi.io/api/v1'

export const apiClient = axios.create(
  {
    baseURL: api,
    headers: {
      'Content-Type': 'application/json',
    }
  }
)
