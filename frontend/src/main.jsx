import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Errorhandle from './Component/Container/Errorhandle.jsx'
import App from './App'
import AddQuestionModal from './Component/Container/AddQuestionModal'
import './index.css'
import { useState } from 'react'

// time show 
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
// import ru from 'javascript-time-ago/locale/ru'


// TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(en)


const AppRoute = createBrowserRouter([
  {
    path: "/",
    element : <App />,
    // errorElement : <Errorhandle />,
    // children : [
    //   {
    //     path : '/addQuestion',
    //     element : <AddQuestionModal />
    //   }
    // ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={AppRoute} />
  </React.StrictMode>,
)
