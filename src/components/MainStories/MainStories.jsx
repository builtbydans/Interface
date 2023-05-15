import React from 'react'
import styled from 'styled-components';
import NewsList from '../NewsList/NewsList.jsx';
import Reef from '../../assets/reef.jpeg';
import Data from '../../lib/Data';

// Styled Components
const Row = styled.div`
  display: flex;
`

const HeroWrapper = styled.div`

`

const HeroImage = styled.img`
  width: 100%;
`

const HeroTitle = styled.a`
  font-weight: bold;
  font-size: 3.5rem;
  color: #7f1ae5;
  position: relative;
  bottom: 100px;
  cursor: pointer;
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
          {Data.map((story) => {
          return <NewsList
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
