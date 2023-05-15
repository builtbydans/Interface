import styled from 'styled-components';
import InterfaceLogo from '../../assets/interface-logo.svg';

// Styled Components
const NavMain = styled.nav`
  color: black;
  height: 64px;
  z-index: 1;
  display: flex;
`

const NavItems = styled.li`
  list-style: none;
`

const Navbar = () => {
  return (
    <>
      <NavMain className="container">
        <a href="/">
          <img src={InterfaceLogo} alt="interface-logo" height={50}/>
        </a>
        <NavItems>Science</NavItems>
        <NavItems>Security</NavItems>
        <NavItems>Technology</NavItems>
      </NavMain>
    </>
  )
}

export default Navbar
