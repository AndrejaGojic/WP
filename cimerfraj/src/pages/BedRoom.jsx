import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styled from 'styled-components';
import Product from '../components/Product';
import {Container, Row, Col} from 'react-bootstrap'

const ref = firebase.firestore().collection('bedroom')
const Input = styled.input`
  margin: 40px 40px;
`;

const BedRoom = () => {
  const [data1,setData1]=useState(null)
  function getData1(val)
  {
    window.name = 0;
    console.log(window.location.pathname);
    console.log(window.location.href);
    setData1(val.target.value)
    if(val.target.value.trim().length == 0){
      window.name = 0;
    }
    else{
      window.name = parseInt(val.target.value);
    }

   
    
  }

  window.flag=2;


  const [data, setdata] = useState([])
  const [loader, setloader] = useState(true)

  function getData(){
    ref.onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      })
        setdata(items)
        setloader(false)
        console.log(loader)
    })
  }


  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
    <Navbar/>
   
    <Input
      type="text" onChange={getData1}
    />
       <Container>
        <Row>
              
              
                {loader === false && (data.map((product) => (
                        <Col md={4}>
                          <Product key={product.id} item={product.product}/>
                        </Col>
                    )))}
        </Row>

      </Container>
    
    <Footer/>
    </div>
  )
}



export default BedRoom
