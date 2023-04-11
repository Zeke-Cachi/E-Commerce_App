import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <>
    <NavContainer>
        <h2>Navbar <span>Responsive</span></h2>
    </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
h2{
  color: white;
    font-weight: 400;
    span{
        font-weight: bold;
    }
}
padding: .4rem;
background-color: #003655;
display: flex;
align-items: center;
justify-content: space-between;
`