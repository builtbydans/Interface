import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  max-width: 400px;
  border-bottom: 1px solid #0f0f0f;
`

export const Category = styled.p`
  color: #7f1ae5;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
  font-weight: bold;
`

export const Title = styled.a`
  color: #0f0f0f;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: normal;
  cursor: pointer;
  &:hover {
    color: #7f1ae5;
  }
`
