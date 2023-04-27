import React from 'react';
import VR from '../assets/vr.jpeg';
import styled from 'styled-components';
import Navbar from './Navbar';

const Wrapper = styled.div`
  position: absolute;
  height: 550px;
  width: 100%;
  top: 0;
  `
const MainImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: inherit;
`

const MainStory = () => {
  return (
    <Wrapper>
      <MainImg src={VR} alt="" />
    </Wrapper>
  )
}

export default MainStory
