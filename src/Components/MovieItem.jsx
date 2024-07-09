// src/components/MovieItem.js
import React, { useState } from 'react';
import { createImageUrl } from '../Services/movieServices';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useAuth } from '../Context/authContext';
import { doc, setDoc, updateDoc, arrayUnion, getDoc } from 'firebase/firestore';
import { db } from '../Services/firebase';

const MovieItem = ({ movie }) => {
  const [likes, setLikes] = useState(false);
  const { title, backdrop_path, poster_path, id } = movie;
  const { user } = useAuth();

  const handleLike = async () => {
    const userEmail = user?.email;
    if (userEmail) {
      const userDocRef = doc(db, 'users', userEmail);

      try {
        // Check if the document exists
        const docSnapshot = await getDoc(userDocRef);

        if (docSnapshot.exists()) {
          // Update the existing document
          await updateDoc(userDocRef, {
            favShows: arrayUnion({ ...movie })
          });
        } else {
          // Create a new document
          await setDoc(userDocRef, {
            favShows: [{ ...movie }]
          });
        }

        setLikes(!likes);
        console.log('Favorite movie marked successfully');
      } catch (error) {
        console.error('Error marking favorite movie: ', error);
      }
    } else {
      console.error('User is not logged in');
    }
  };

  return (
    <div className='relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block overflow-hidden rounded-lg cursor-pointer m-2'>
      <img
        className='w-full h-40 block object-cover object-top'
        src={createImageUrl(backdrop_path ?? poster_path, "w500")} alt={title}
      />
      <div className="absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100">
        <p className='whitespace-normal text-xs md:text-sm flex justify-center items-center h-full'>{title}</p>
        <p onClick={handleLike}>
          {likes ? (
            <FaHeart size={20} className="absolute top-2 left-2 text-gray-300" />
          ) : (
            <FaRegHeart size={20} className="absolute top-2 left-2 text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
};

export default MovieItem;
