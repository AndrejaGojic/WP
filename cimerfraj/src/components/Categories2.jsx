import React from 'react'
import { categories2 } from '../data'
import styled from 'styled-components'
import CategoryItem from './CategoryItem'

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`;

const Categories2 = () => {
  return (
    <Container>
        {
            categories2.map(item => (
                <CategoryItem item={item}/>
                ))
      }
    </Container>
  )
}

export default Categories2
