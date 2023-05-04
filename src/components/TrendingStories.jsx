import React from 'react'
import styled from 'styled-components';
import NewsStories from './NewsStories';

const Wrapper = styled.div`
  margin: 20px 0px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`

const data = [
  {
    category: 'Science',
    title: 'The Rise and Fall of Private Medical Data',
    blurb: 'loremipsum100000',
    author: 'Joe Bloggs'
  },
  {
    category: 'Technology',
    title: 'New 5G Scanners confirmed to cause brainwaves',
    blurb: 'loremipsum10000dsddsddsddsd0',
    author: 'Joeyyy Bloggerina'
  },
  {
    category: 'Artificial Intelligence',
    title: 'How AI stole my job',
    blurb: 'itdidreally',
    author: 'Not A Robot'
  },
  {
    category: 'Gadgets',
    title: 'Why a £1000 drone is ideal for you',
    blurb: 'loremipsum100000',
    author: 'DJI Guy'
  }
]

const TrendingStories = () => {
  return (
    <div>
      <Wrapper>
        {data.map((story) => {
          return <NewsStories
                    category={story.category}
                    title={story.title}
                    blur={story.blurb}
                    author={story.author}
                  />
        })}
      </Wrapper>
    </div>
  )
}

export default TrendingStories
