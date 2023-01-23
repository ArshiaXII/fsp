"use client"
import React, { useEffect, useState } from 'react';

export const UsersContext = React.createContext();

function Users(props) {

  const [isLoginned, setIsLoginned] = useState(false);
  const [loginnedUser, setLoginnedUser] = useState({});

  useEffect(() => {
    const loginned = JSON.parse(localStorage.getItem("loginned"));
    setIsLoginned(loginned);
    if (loginned === true) {
      const userId = JSON.parse(localStorage.getItem("loginnedUser"));
      fetchLoginnedUserData(userId);

    }

  }, [])

  const fetchLoginnedUserData = async (id) => {
    const res = await fetch(`https://amber-goat-garb.cyclic.app/users/${id}`);
    const data = await res.json();
    setLoginnedUser(data);
  }


  const values = {
    isLoginned,
    setIsLoginned,
    loginnedUser,
    setLoginnedUser
  };


  return (
    <UsersContext.Provider value={values}>
      {props.children}
    </UsersContext.Provider>
  )
}

export default Users;