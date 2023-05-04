import React from 'react';
import VR from '../assets/vr.jpeg';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0px 30px;
  margin: 20px 0px;
  max-width: 1200px;
`

const Wrapper = styled.div`
  position: relative;
  height: 550px;
  width: 100%;
  top: 0;
  `

const MainTextArea = styled.div`
  position: absolute;
  bottom: 80px;
  color: white;
`

const MainImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: inherit;
`

const MainTitle = styled.h1`
  font-size: 60px;
  font-family: "Righteous", cursive;
`

const MainCaption = styled.h2`
  font-size: 30px;
`

const MainAuthor = styled.a`
  font-size: 1rem;
  color: white;
`

const MainStory = () => {
  return (
    <Wrapper>
      <MainImg src={VR} alt="" />
      <Container>
        <MainTextArea>
          <MainTitle>The Doctor of the Future is Virtual</MainTitle>
          <MainCaption>Say goodbye to long lines at A&E</MainCaption>
          <MainAuthor href='/authors'>Danish Shafi</MainAuthor>
        </MainTextArea>
      </Container>
    </Wrapper>
  )
}

export default MainStory
