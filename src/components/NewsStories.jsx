import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 400px;
`

const Category = styled.p`
  color: green;
`

const Title = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`

const NewsStories = ({ category, title, author }) => {
  return (
    <Wrapper>
      <div className="row">
        <div className="col-12">
          <Category>{category}</Category>
        </div>
        <div className="col-12">
          <Title>{title}</Title>
        </div>
        <div className="col-12">
          <p>{author}</p>
        </div>
      </div>
    </Wrapper>
  )
}

export default NewsStories
