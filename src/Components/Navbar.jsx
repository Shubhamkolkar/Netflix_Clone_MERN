import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/authContext';

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="w-full absolute p-4 flex items-center z-30 justify-between">
      <Link to="/">
        <h1 className="uppercase text-red-600 cursor-pointer font-NetSan-bold text-5xl">Netflix</h1>
      </Link>

      {user?.email ? (
        <div>
          
          <Link to="/profile">
            <button className="capitalize bg-red-600 px-6 py-2 rounded cursor-pointer">
              Profile
            </button>
          </Link>
          <button onClick={handleLogOut} className="pr-4 capitalize">
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="pr-4 capitalize">Login</button>
          </Link>
          <Link to="/signup">
            <button className="capitalize bg-red-600 px-6 py-2 rounded cursor-pointer">Signup</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
