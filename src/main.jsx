import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import {  Route,RouterProvider ,createBrowserRouter} from 'react-router-dom'
import './index.css'
import { createRoutesFromElements} from 'react-router-dom'
import App from './App.jsx'
import Layout from './Layout.jsx'
import Login from './Login.jsx'
import NewLayout from './NewLayout.jsx'
import store from './Store.js'
const router = createBrowserRouter([
  {
    path: "/wordplay",
    element: <Layout/>,
    children: [
        {
            path: "/login",   
            element: 
              <Login/>
            ,
        },
        {
          path:"/app",
          element:<App/>
        }
        ]
      }
      ,{

      }
    ])
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
  </StrictMode>,
)
