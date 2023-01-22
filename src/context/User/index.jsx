"use client"
import React, { useState } from 'react';

export const UsersContext = React.createContext();

function Users(props) {

    const [isLoginned,setIsLoginned] = useState(false);

    const values = {
        setIsLoginned
    };


  return (
    <UsersContext.Provider value={values}>
        {props.children}
    </UsersContext.Provider>
  )
}

export default Users;