import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavbarHeader from './Component/Header/NavbarHeader';
import LeftSideBar from './Component/Container/LeftSideBar';
import RightSideBar from './Component/Container/RightSideBar';
import Feed from './Component/Container/Feed'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <NavbarHeader />
      <div className="  main-container">

      <div className="container">
        <div className='container-box d-flex row'>

        <div className='col-sm-2 ' ><LeftSideBar /> </div>
        <div className='col-sm-6 ' > <Feed /> </div>
        <div className='col-sm-3 ' > <RightSideBar /> </div>
        </div>
      </div>
      </div>

    </div>
  )
}

export default App
