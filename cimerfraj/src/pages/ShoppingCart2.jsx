import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CartItem from '../components/CartItem';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { auth } from '../fire';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";




const Container= styled.div`

`;

const Wrapper= styled.div`
    padding: 20px;
`;

const Title= styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top= styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton= styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
`;

const Bottom= styled.div`
    display: flex;
    justify-content: space-between;
`;

const Info= styled.div`
    flex:3;
`;


const Summary= styled.div`
    flex:1;
    border: 0.5px solid gray;
    border-radius: 10px;
    padding: 20px;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`;

const SummaryItemPrice = styled.span`

`;

const SummaryItemText = styled.span`

`;

const SummaryButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`;

const ShoppinCart = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [loggedHidden, setLoggedHidden] = useState();
  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if(currentUser){
        setLoggedHidden(false);
      }
      else{
        setLoggedHidden(true);
      }
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
  function GetUserUid(){
    const[uid, setUid] = useState(null);
    useEffect(() => {
      auth.onAuthStateChanged(user =>{
        if(user){
          setUid(user.uid);
        }
      })
    }, [])
    return uid;
  }

  const uid = GetUserUid();
  const ref = firebase.firestore().collection('Cart ' + uid)

  const [data, setdata] = useState([])
  const [loader, setloader] = useState(false)
  const [name, setName] = useState("")

  function createDoc(newDataObj){
    ref
    .doc(newDataObj.id)
    .set(newDataObj)
    .catch((err) => {
        alert(err)
        console.log(err);
    })
  }

  function getData(){
    firebase.firestore().collection('Cart ' + uid).onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      })
      setdata(items)
      setloader(false)
      console.log(loader)
    })
  }

  function deleteDoc(){
    {loader === false && (data.map((product) => (
        firebase.firestore().collection('Cart ' + uid)
        .doc(product.id)
        .delete()
    )))}

}

  useEffect(() => {
    getData()
  }, [])

 
  return (
    <div>
        <Navbar/>
        <Container>
        <Wrapper>
            <Title>
                TVOJA KOŠARICA
            </Title>
            <Top>
                <Link to ='/'><TopButton>NASTAVI KUPNJU</TopButton></Link>

            </Top>
            <Bottom>
                <Info>
                {loader === false && (data.map((product) => (
                        <CartItem key={product.id} product={product}/>
                    )))}
                </Info>
            </Bottom>
            <Link to = '/done'><SummaryButton onClick={() => deleteDoc()}>NARUČI</SummaryButton></Link>
        </Wrapper>
   </Container>
      <Footer/>
    </div>
  )
}

export default ShoppinCart
