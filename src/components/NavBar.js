import React, { useState, useEffect, useRef } from "react";
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import styled from 'styled-components';
import './NavBar.css';
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import Submenu from "./Submenu";
import ButtonNavbar from "./ButtonNavbar";

const Nav = styled.div`
  background: rgb(79, 198, 219);
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: rgb(241, 253, 255);
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const NavBar = (props) => {
  let menuRef = useRef();
  useEffect(() => {
      document.addEventListener("mousedown", (event) => {
        if (!menuRef.current.contains(event.target)) {
          setSidebar(false)
        }
      }, [sidebar])
    })
   
  // const handleClickOutside = (event) => {
  //   if (
  //     this.container.current &&
  //     !this.container.current.contains(event.target)
  //   ) {
  //     this.setState({
  //       open: false,
  //     });
  //   }
  // };


  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return(
    <div>
    <IconContext.Provider value={{color:'#000'}}>
      <Nav>
        <NavIcon to='#'>
          <FaIcons.FaBars onClick={showSidebar} />
        </NavIcon>
      </Nav>
      <SidebarNav sidebar={sidebar} >
        <SidebarWrap ref={menuRef}>
          <NavIcon to='#'>
            <AiIcons.AiOutlineClose onClick={showSidebar} />
          </NavIcon>
          {SidebarData.map((item, index) => {
            return (
              <div key ={index}>
              <Submenu item={item} key={index} />
              </div>
            )
          })}
          <ButtonNavbar className="btn-navbar"/>
        </SidebarWrap>
      </SidebarNav>
    </IconContext.Provider>
    </div>
  )
}

export default NavBar