import React from 'react'
import styled from 'styled-components';
import NewsStories from './NewsStories';
import Reef from '../assets/reef.jpeg';

// Data
const data = [
  {
    category: 'Science',
    title: 'The Rise and Fall of Private Medical Data',
    author: 'Joe Bloggs'
  },
  {
    category: 'Technology',
    title: 'New 5G Scanners confirmed to cause brainwaves',
    author: 'Joeyyy Bloggerina'
  },
  {
    category: 'Artificial Intelligence',
    title: 'How AI stole my job',
    author: 'Not A Robot'
  },
  {
    category: 'Gadgets',
    title: 'Why a £1000 drone is ideal for you',
    author: 'DJI Guy'
  }
]

// Styled Components
const Row = styled.div`
  display: flex;
`

const HeroWrapper = styled.div`

`

const HeroImage = styled.img`
  width: 100%;
`

const HeroTitle = styled.h1`
  font-weight: bold;
  font-size: 3.5rem;
  background-color: black;
  color: white;
  position: relative;
  bottom: 100px;
`

const ColLeft = styled.div`
  flex: 60%;
`

const ColRight = styled.div`
  flex: 40%;
`

const MainStories = () => {
  return (
    <div className='container'>
      <Row>
        <ColLeft>
          <HeroWrapper>
            <HeroImage src={Reef}></HeroImage>
            <HeroTitle>How The Reef Can Teach Us About AI Models</HeroTitle>
          </HeroWrapper>
        </ColLeft>

        <ColRight>
          {data.map((story) => {
          return <NewsStories
                    category={story.category}
                    title={story.title}
                    author={story.author}
                  />
          })}
        </ColRight>

      </Row>
    </div>
  )
}

export default MainStories
