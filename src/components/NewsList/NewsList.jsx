import React from 'react'
import { Wrapper, Category, Title } from '../../components/NewsList/NewsListStyles.js';

const NewsList = ({ category, title, author }) => {
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

export default NewsList
