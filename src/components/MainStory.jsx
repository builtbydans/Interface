import React from 'react';
import Reef from '../assets/reef.jpeg';
import styled from 'styled-components';
import Navbar from './Navbar';
import InterfaceLogo from '../assets/interface-logo.svg';

const MainImg = styled.img`
  position: absolute;
  width: 100%;
  top: 0;
`

const Logo = styled.img`
  position: relative;
  z-index: 1;
`

const MainStory = () => {
  return (
    <>
      <Navbar />
      <MainImg src={Reef} alt="" />
    </>
  )
}

export default MainStory
