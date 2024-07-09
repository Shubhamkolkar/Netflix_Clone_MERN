import React, { useEffect, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';
import { useAuth } from '../Context/authContext';
import { db } from '../Services/firebase';
import { createImageUrl } from '../Services/movieServices';
import { arrayRemove, doc, onSnapshot, updateDoc } from 'firebase/firestore';

const Profile = () => {
  const [movies, setMovies] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      const unsubscribe = onSnapshot(doc(db, 'users', user?.email), (doc) => {
        if (doc.exists()) {
          setMovies(doc.data().favShows);
        }
      });

      return () => unsubscribe();
    }
  }, [user]);

  const removeMovie = async (movie) => {
    try {
      const userDoc = doc(db, 'users', user.email);
      await updateDoc(userDoc, {
        favShows: arrayRemove(movie)
      });
    } catch (error) {
      console.error("Error removing movie: ", error);
    }
  };

  return (
    <div>
      <div>
      <img
        className="object-cover"
        src={createImageUrl(backdrop_path,"original")}
        alt="Shows Banner"
      />
      </div>
    </div>
  );

 
};

export default Profile;
