import React from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton'

const Navbar = () => {
  return (
    <>
    <NavContainer>
        <h2>Navbar <span>Responsive</span></h2>
        <div className='linksNav active'>
          <a href="">Home</a>
          <a href="">Shop</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Blog</a>
        </div>
        <div className='burguerMenu'>
        <BurguerButton />
        </div>
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
background-color: #00071a;
display: flex;
align-items: center;
justify-content: space-between;
a{
  color: white;
  text-decoration: none;
  margin-right: 1rem;
}
.linksNav{
  position: absolute;
  top: -700px;
  left: -2000;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  a{
    color: black;
    font-size: 2rem;
    display: block;
  }
  @media(min-width: 768px){
    position: initial;
    margin: 0;
    a{
      font-size: 1rem;
      color: white;
      display: inline;
    }
  }
}
.linksNav.active{
  width: 100%;
  display: block;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 30%;
  left: 0;
  right: 0;
  text-align: center;
}

.burguerMenu{
  @media(min-width: 768px){
    display: none;
  }
}
`