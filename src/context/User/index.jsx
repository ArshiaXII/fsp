"use client"
import React, { useEffect, useState } from 'react';
import { customAlphabet } from 'nanoid';
import { useRouter } from 'next/navigation';
export const UsersContext = React.createContext();

function Users(props) {

  const nanoid = customAlphabet("1234567890", 8);
  const route = useRouter();

  const [isLoginned, setIsLoginned] = useState(false);
  const [loginnedUser, setLoginnedUser] = useState({});
  const [userFavorites, setUserFavorites] = useState([]);
  const [userBasket,setUserBasket] = useState([]);


  useEffect(() => {
    var loginned = JSON.parse(localStorage.getItem("loginned"));
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



  const fetchUserFavorites = async () => {
    const favorites = [];
    for (var i = 0; i < loginnedUser.favorites?.length; i++) {
      const res = await fetch(`https://amber-goat-garb.cyclic.app/products/${loginnedUser.favorites[i]}`);
      const data = await res.json();
      favorites.push(data);
    }
    setUserFavorites(favorites);
  }

  const handleAddBasket = (product, count) => {
    console.log(product);
    if(count === undefined){
      count = 1;
    }
    console.log(count);
    const control = userBasket.filter((e) => e.product.title === product.title);
    if (control.length === 0) {
        const basketItem = { ...{ count: count}, product }
        setUserBasket([...userBasket, basketItem])
    }
    else{
        control[0].count = control[0].count + count;
        let newList = userBasket.filter((e) => e.product.title !== product.title);
        console.log(control);
        setUserBasket([...newList, control[0]])
    }
    console.log(userBasket)
}


const completeShopping = async () => {

  let userOrders = loginnedUser.orders;
  userBasket.forEach((e) => {
      userOrders = [...userOrders, { id: nanoid(), status: "Hazırlanıyor", productCount: e.count, productImage: e.product.images[0], productTitle: e.product.title, orderPrice: e.count * e.product.totalprice }]
  })

  await fetch(`https://amber-goat-garb.cyclic.app/users/${loginnedUser.id}`, {
      method: "PATCH",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ orders: userOrders })
  })
  fetchLoginnedUserData(loginnedUser.id);
  route.push("/completed-order");
  setTimeout(() => {
      setUserBasket([]);
  },2000)

}


  const values = {
    isLoginned,
    setIsLoginned,
    loginnedUser,
    setLoginnedUser,
    fetchLoginnedUserData,
    fetchUserFavorites,
    userFavorites,
    userBasket,
    setUserBasket,
    handleAddBasket,
    completeShopping
  };


  return (
    <UsersContext.Provider value={values}>
      {props.children}
    </UsersContext.Provider>
  )
}

export default Users;