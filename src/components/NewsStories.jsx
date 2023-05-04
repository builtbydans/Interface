import React from 'react'

const NewsStories = ({ category, title, blurb, author }) => {
  return (
    <div>
      <p>{category}</p>
      <p>{title}</p>
      <p>{blurb}</p>
      <p>{author}</p>
    </div>
  )
}

export default NewsStories
