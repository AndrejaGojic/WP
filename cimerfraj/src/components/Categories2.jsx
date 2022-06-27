import React from 'react'
import { categories1 } from '../data'
import { categories2 } from '../data'
import styled from 'styled-components'
import CategoryItem from './CategoryItem'
import { Container, Col, Row } from 'react-bootstrap';



const Categories2 = () => {
  return (
    <div>
<Container>
    <Row>
    {
            categories1.map(item => (
                <Col md={4}><CategoryItem item={item}/></Col>
                ))
      }
    </Row>
    <Row>
    {
            categories2.map(item => (
                <Col md={4}><CategoryItem item={item}/></Col>
                ))
      }
    </Row>
</Container>
    </div>
  )
}

export default Categories2