import React from 'react'
import {SidebarContainer,Icon,CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink,SideBtnWrap,SidebarRouter } from './SidebarElements'
function Sidebar({isOpen,toggle}) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
          <Icon onClick={toggle}>
              <CloseIcon/>
              </Icon> 
              <SidebarWrapper>
                  <SidebarMenu>
                      <SidebarLink to="herosection" onClick={toggle} exact>
                          HOME
                      </SidebarLink>
                      <SidebarLink to="about" onClick={toggle}>
                          ABOUT ME!
                      </SidebarLink>
                      <SidebarLink to="tech" onClick={toggle}>
                          TECHNOLOGIES
                      </SidebarLink>
                      <SidebarLink to="services1" onClick={toggle}>
                          Services
                      </SidebarLink>
                      <SidebarLink to="services" onClick={toggle}>
                          Projects
                      </SidebarLink>
                      <SidebarLink to="contactme" onClick={toggle}>
                         Contact Me
                      </SidebarLink>
                  </SidebarMenu>
                  <SideBtnWrap>
                          <SidebarRouter to="/signin" onClick={toggle}>Sign In</SidebarRouter>
                      </SideBtnWrap>
                  </SidebarWrapper> 
        </SidebarContainer>
    )
}

export default Sidebar
