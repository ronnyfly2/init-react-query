import { useEffect, useState } from 'react'

import './App.css'

const getRandomNumber = async():Promise<number> => {
  const response = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new')
  const numberString = await response.text()
  return +numberString
}

const App = () =>{
  const [number, setNumber] = useState<number>()
  useEffect(() => {
    getRandomNumber().then( num => setNumber(num) )
  }, [])

  return (
    <div className="App App-header">
      <span>Random Number: <small>{number}</small></span>
    </div>
  )
}

export default App
