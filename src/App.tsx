import { useQuery } from '@tanstack/react-query'
import Button from '@mui/material/Button';

import './App.scss'

const getRandomNumber = async():Promise<number> => {
  const response = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new')
  const numberString = await response.text()
  return +numberString
}

const App = () =>{
  const query = useQuery(['randomNumber'], getRandomNumber)

  return (
    <div className="App App-header">
      <span>Random Number: <small>{ query.data }</small></span>
      <div>
        <Button variant="contained" onClick={ () => query.refetch() } disabled={ query.isFetching }>update number</Button>
      </div>
    </div>
  )
}

export default App
