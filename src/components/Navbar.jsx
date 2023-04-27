import styled from 'styled-components';
import InterfaceLogo from '../assets/interface-logo.svg';

// Styled Components
const Nav = styled.nav`
  color: white;
  height: 64px;
  position: relative;
  z-index: 1;
`

const Navbar = () => {
  return (
    <div>
      <Nav>
        <a href="/">
          <img src={InterfaceLogo} alt="interface-logo" height={50}/>
        </a>
      </Nav>
    </div>
  )
}

export default Navbar
