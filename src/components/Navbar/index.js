import React , {useState,useEffect} from 'react'
import {Navitem,Nav,NavbarContainer,NavMenu,MobileIcon,NavLink, NavLogo} from './NavbarElements'
import {FaBars} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
function Navbar({toggle}) {
    const [scrollNav,setScrollNav] = useState(false)
    const changeNav = ()=>{
      if(window.scrollY >= 80){
          setScrollNav(true)
      }  else{
          setScrollNav(false)
      }
    }
    useEffect(() => {
        window.addEventListener('scroll' ,changeNav)
    }, [])
    const toggelHome =()=>{
        scroll.scrollToTop()
    }
    return (
        < >
            
        <Nav scrollNav={scrollNav}>
             <NavbarContainer>
                 <NavLogo to='/'onClick={toggelHome}><span>NKUSI</span>KEVIN</NavLogo>
                 <MobileIcon onClick={toggle}>
                     <FaBars/>
                 </MobileIcon>
            <NavMenu>
        <Navitem>
            <NavLink to='herosection'  smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80} >
                HOME
            </NavLink>
            </Navitem>
        <Navitem>
            <NavLink to='about'
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80} >
                ABOUT ME!
            </NavLink>
        </Navitem>
        <Navitem>
            <NavLink to='tech'
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80} >
                TECHNOLOGIES
            </NavLink>
        </Navitem>
        <Navitem>
            <NavLink to='services' smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}>
                My Work
            </NavLink>
        </Navitem>
         <Navitem>
            <NavLink to='services1' smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}>
               Services
            </NavLink>
        </Navitem>
        <Navitem>
            <NavLink to='contactme' smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80} >
                 Contact Me
            </NavLink>
        </Navitem>
            </NavMenu>
            </NavbarContainer>
        </Nav>
       
    

</>
    )
}

export default Navbar
