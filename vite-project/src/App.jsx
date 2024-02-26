import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import classes from './modules/App.module.scss'
import Weather from './components/Weather'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={classes['main-wrapper']}>
      <Weather />
    </div>
  )
}

export default App
