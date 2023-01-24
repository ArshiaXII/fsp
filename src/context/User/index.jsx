"use client"
import React, { useEffect, useState } from 'react';

export const UsersContext = React.createContext();

function Users(props) {

  const [isLoginned, setIsLoginned] = useState(false);
  const [loginnedUser, setLoginnedUser] = useState({});
  const [userFavorites, setUserFavorites] = useState([]);

  useEffect(() => {

    if (typeof window !== 'undefined') {
      var loginned = JSON.parse(localStorage.getItem("loginned"));
      setIsLoginned(loginned);
      if (loginned === true) {
        const userId = JSON.parse(localStorage.getItem("loginnedUser"));
        fetchLoginnedUserData(userId);

      }
    }

  }, [])

  const fetchLoginnedUserData = async (id) => {
    const res = await fetch(`https://amber-goat-garb.cyclic.app/users/${id}`);
    const data = await res.json();
    setLoginnedUser(data);
  }

  const fetchUserFavorites = async () => {
    const favorites = [];
    for (var i = 0; i < loginnedUser.favorites?.length; i++) {
      const res = await fetch(`https://amber-goat-garb.cyclic.app/products/${loginnedUser.favorites[i]}`);
      const data = await res.json();
      favorites.push(data);
    }
    setUserFavorites(favorites);
  }


  const values = {
    isLoginned,
    setIsLoginned,
    loginnedUser,
    setLoginnedUser,
    fetchLoginnedUserData,
    fetchUserFavorites,
    userFavorites
  };


  return (
    <UsersContext.Provider value={values}>
      {props.children}
    </UsersContext.Provider>
  )
}

export default Users;