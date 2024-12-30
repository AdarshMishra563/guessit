import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import App from './App'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';
import { logout } from './wordleSlice';
export default function Layout({children}) {

  const navigate=useNavigate()
const stat=useSelector((state)=>state.auth)
let status=stat.status
let nostat=!status
const name=stat.userData
console.log(status)
const dispatch =useDispatch()
  return (
  <div> 
    <div className="w-full flex justify-between  h-16 justify-center bg-gray-800">
  <div className='mt-2'><Link
  className="text-2xl mr-2 ml-1 bg-white place-self-end rounded-lg w-12 "
  to='/login'
  >Login</Link>
  <Link
  className="text-2xl bg-white place-self-end rounded-lg w-12 "
  to='/app'
  >Play</Link></div>
 <div className='absolute right-0 w-24 mt-2'><button  className='bg-white rounded-lg text-2xl 'onClick={()=>{
  dispatch(logout())


 }}>Logout</button></div>
</div> 
{!status&& <div className='text-white w-26  bg-gray-800 text-3xl content-center text-center'>Login To Play</div>}{status&&<div className='text-white w-26  bg-gray-800 text-3xl content-center text-center'>Ready to Play</div>}
{nostat&&<Login/>}
{status&&<div className='bg-gray-300 text-2xl place-items-center text-center capitalize'> !!Welcome:{name.name}!!</div>}
   {
    status&&<App />
   }
  
    </div>
    
  )
}
