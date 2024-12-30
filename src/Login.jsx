import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login as llogin } from './wordleSlice'
import { useForm } from 'react-hook-form'



export default function Login() {

const [log,setlog]=useState(false)
const dispatch=useDispatch()
const {register, handleSubmit} = useForm()
const login = async (data)=>{
   const c =await data;
  
   dispatch(llogin(data))
 
}


  return (
    <div className=' place-items-center'>
   <div className='place-items-center content-center mt-8 h-64 w-72 rounded-lg border-2 '>
<div className='mr-40'>Login</div>
   <form
   
   onClick={handleSubmit(login)}>
    <div>

      <input
      className='px-3 py-2 mt-4 mb-1 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200'
      placeholder='name'
      type='text'
      {...register("name", {
                    required: true,
                   
                    })}
      />
      <div><input 
      id='email'
      label="email"
      className='px-3 py-2 mt-2 mb-1 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 '
      placeholder='email'
      type='Email'
      {...register("email", {
                    required: true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }})}/></div>
      <div><input
      id='pass'
      className='px-3 py-2 mt-2 mb-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 '
      placeholder='password'
      label="password"
      type='password'
      {...register("password", {
                    required: true,
                   
                    })}/></div>
                  <div>  <Submit ></Submit></div>
      
    </div>


   </form>
   
   </div></div>
  )
}
function Submit(){
  
  return <button  type='submit' className='rounded-lg bg-gray-400 h-10 w-16'>Submit</button>
}

