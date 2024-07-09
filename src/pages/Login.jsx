import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useAuth} from '../Context/authContext'

const Login = () => {

  const [rememberLogin,setRememberLogin] = useState(true)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {user, logIn} = useAuth()
const navigate = useNavigate()


  const handleSubmit =async(e) => {
    e.preventDefault();
    // Perform signup logic here
    console.log('Email:', email);
    console.log('Password:', password);

    try{
      await logIn(email,password);
      navigate("/")
    }catch(err){
      console.log(err)
    }
  };
  return (
    <>
      <div className="w-full h-screen ">
        <img
          className='hidden sm:block absolute object-cover w-full h-full'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt="" />
        <div className='bg-black/70 fixed top-0 left-0 w-full h-screen' />
        <div className=" fixed w-full px-4 py-24 z-20">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/80 rounded-lg">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl md:text-6xl font-NetSan-bold text-white mb-8">Login</h1>
              <form className=" w-full flex flex-col items-center py-4">
                <input
                  type="email"
                  placeholder="Email"
                  autoComplete='email'
                  onChange={e=> setEmail(e.target.value)}
                  className="my-2 w-full max-w-md bg-gray-700 text-white rounded p-3"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  autoComplete='current-password'
                  onChange={e=> setPassword(e.target.value)}
                  className="my-2 w-full max-w-md bg-gray-700 text-white rounded p-3"
                  required
                />
                <button
                onClick={handleSubmit}
                  type="submit"
                  className="w-full max-w-md py-3 my-6 font-NetSan-bold bg-red-600 text-white rounded hover:bg-red-700 mt-4"
                >
                  Login
                </button>
                <div className="flex justify-between text-gray-600">
                  <p>
                    <input type="checkbox" className="mr-2" />
                    Remenber me 
                  </p>
                  <p> Need help?</p>
                </div>

                <p className='my-4'>
                  <span className="text-gray-600 mr-2">
                    New to NetFlix?
                  </span>
                  <Link to="/signup" className="text-blue-500 ml-1">
                    Sign up
                  </Link>
                </p>


              </form>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Login