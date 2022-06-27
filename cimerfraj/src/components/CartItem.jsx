import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import firebase from '../firebase';
import { auth } from '../fire';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";


const Product= styled.div`
    display: flex;
    justify-content: space-between;
`;

const ProductDetail= styled.div`
    flex: 2;
    display: flex;
`;

const Image= styled.img`
    height: 200px;
`;

const Details= styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName= styled.span`

`;

const ProductId= styled.span`

`;

const PriceDetail= styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductPrice= styled.span`

`;

const Button= styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    height: 50px;
`;

const Hr = styled.hr`
    background-color: gray;
    border: none;
    height: 1px;
`;

window.suma = 0;
const CartItem = ({product}) => {
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
        console.log(user.uid);
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
        console.log(user.uid);
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
    
    function deleteDoc(docx){
        ref
        .doc(docx.id)
        .delete()
    }

    return (
        <div key={product.id}>
        <Product>
            <ProductDetail>
                <Image src={product.product.img}/>
                <Details>
                    <ProductName><b>Proizvod:</b> {product.product.name}</ProductName>
                    <ProductId><b>ID:</b> {product.product.id}</ProductId>
                </Details>
            </ProductDetail>
            <PriceDetail>
                <ProductPrice>{product.product.price} kn</ProductPrice>
            </PriceDetail>
            <Button onClick={() => deleteDoc(product)}>UKLONI</Button>
        </Product>
        <Hr/>
        </div>
      )
}

export default CartItem
