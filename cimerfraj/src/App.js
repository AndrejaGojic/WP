import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Kitchen  from "./pages/Kitchen";
import Kids from "./pages/Kids";
import BathRoom from "./pages/BathRoom"
import BedRoom from "./pages/BedRoom"
import DiningRoom from "./pages/DiningRoom"
import LivingRoom from "./pages/LivingRoom"
import Bravo from "./pages/Bravo";
import DoneShopping from "./pages/DoneShopping";
import ShoppinCart from "./pages/ShoppinCart";
import SingleProduct from "./pages/SingleProduct";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./fire";


function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

  }, [])

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  

  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path='/' element= {<Home/>}/>
                <Route path='/register' element= {<Register/>}/>
                <Route path='/login' element= {<Login/>}/>
                <Route path='/kitchen' element= {<Kitchen/>}/>
                <Route path='/kids' element= {<Kids/>}/>
                <Route path='/bathroom' element= {<BathRoom/>}/>
                <Route path='/bedroom' element= {<BedRoom/>}/>
                <Route path='/diningroom' element= {<DiningRoom/>}/>
                <Route path='/livingroom' element= {<LivingRoom/>}/>
                <Route path='/bravo' element= {<Bravo/>}/>
                <Route path='/done' element= {<DoneShopping/>}/>
                <Route path="/product/:id" element={<SingleProduct/>}/>
                <Route path="/cart" element={<ShoppinCart/>}/>
        </Routes>
        
      
      
      </div>
    </Router>
  );
};

export default App;