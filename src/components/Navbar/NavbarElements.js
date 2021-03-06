import styled from 'styled-components'
import {Link as LinkS} from "react-scroll"
import {Link as LinkR} from "react-router-dom"
export const Nav = styled.nav`
	background: ${({ scrollNav }) => (scrollNav ? "black" : "transparent")};
	height: 80px;
	margin-top: -80px;
	display: flex;
	font-family: "Rajdhani", sans-serif;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	position: sticky;
	top: 0;
	z-index: 10;
	@media screen and (max-width: 960px) {
		transition: 0.8 all ease;
	}
`;
 export const NavbarContainer = styled.div`
display:flex;
justify-content:space-between;
height:80px;
z-index:1;
width:100%;
padding:0 24px;
max-width:1100px;
`
export const MobileIcon= styled.div`
display:none;
@media screen and (max-width:768px){
color:#fff;
display: block;
position:absolute;
top:0;
right:0;
transform:translate(-100%,60%);
font-size:1.8rem;
cursor:pointer;}
`
export const NavMenu= styled.ul`
display:flex;
text-decoration: none;
align-items:center;
list-style:none;
text-align:center;
margin-right:-22px;
@media screen and (max-width:768px){
    display:none;
}
` 
export const NavLogo= styled(LinkR)`
color: white;
justify-self:flex-start;
cursor:pointer;
font-size:2rem;
display:flex;
align-items:center;
margin-left:24px;
font-weight:bold;
text-decoration: none;
` 
export const NavLink= styled(LinkS)`
color:#fff;
display:flex;
align-items:center;
text-decoration:none;
list-style:none;
padding:0 1rem;
height:100%;
cursor:pointer;
text-decoration: none;
&.active{
    border-bottom:3px solid white;
}
` 
export const Navitem= styled(LinkR)`
height:80px;
list-style:none;
text-decoration: none;
`
export const NavBtn= styled.nav`
display:flex;
align-items:center;
@media screen and (max-width:768px){
    display:none
}
`
export const NavBtnLink= styled(LinkR)`
border-radius:50px;
background-color:#01bf71;
white-space:nowrap;
padding:10px 22px;
color:#010606;
font-size:16px;
outline:none;
border:none;
cursor:pointer;
transition: all 0.2s ease-ease-in-out;
text-decoration: none;
&:hover{
   transition: all 0.2s ease-ease-in-out;
    background-color:#fff;
    color:#010606;
}
`