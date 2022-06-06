import React from 'react'
import { categories1 } from '../data'
import { categories2 } from '../data'
import styled from 'styled-components'
import CategoryItem from './CategoryItem'

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`;

const Categories = () => {
  return (
    <div>
      <Container>
        {
            categories1.map(item => (
                <CategoryItem item={item}/>
                ))
      }
    </Container>
    <Container>
    {
            categories2.map(item => (
                <CategoryItem item={item}/>
                ))
      }
    </Container>
    </div>
  )
}

export default Categories
