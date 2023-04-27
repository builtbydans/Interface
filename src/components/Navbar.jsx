import styled from 'styled-components';
import InterfaceLogo from '../assets/interface-logo.svg';

// Styled Components

const Container = styled.div`
  padding: 0px 30px;
  margin: 20px 0px;
`
const Nav = styled.nav`
  color: white;
  height: 64px;
  position: relative;
  z-index: 1;
`

const Navbar = () => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src={InterfaceLogo} alt="interface-logo" height={50}/>
        </a>
      </Nav>
    </Container>
  )
}

export default Navbar
