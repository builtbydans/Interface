import styled from 'styled-components';
import InterfaceLogo from '../assets/interface-logo.svg';

// Styled Components

const Container = styled.div`
  padding: 0px 30px;
  margin: 0px 20px;
  max-width: 1200px;
`
const NavMain = styled.nav`
  color: white;
  height: 64px;
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  float: left;
  gap: 30px;
`

const NavItems = styled.li`
  list-style: none;
`

const Navbar = () => {
  return (
    <Container>
      <NavMain>
        <a href="/">
          <img src={InterfaceLogo} alt="interface-logo" height={50}/>
        </a>
        <NavItems>Science</NavItems>
        <NavItems>Security</NavItems>
        <NavItems>Technology</NavItems>
      </NavMain>
    </Container>
  )
}

export default Navbar
