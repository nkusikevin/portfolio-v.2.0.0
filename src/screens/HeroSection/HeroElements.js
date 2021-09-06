import styled from 'styled-components'

export const HeroContainer= styled.div`
 display:flex;
 justify-content:center;
 align-items:center;
 text-align:center;
 line-height:2;
 padding:0 30px;
 height:800px;
 position:relative;
 z-index:1;
 `
//  reserved

export const HeroBg = styled.div`
position:absolute;
top:5em;
right:0;
bottom:0;
left:0;
width:100%;
height:100%;
overflow:hidden;
`
export const HeroContent = styled.div`
z-index:3;
max-width:1200px;
position:absolute;
padding:8px 24px;
display:flex;
flex-direction:column;
align-items:center;
`
export const HeroH1 = styled.div`
background:url(../../assets/images/profile.png)
color:#fff;
font-size:60px;
text-align:center;
@media screen and (max-width:768px){
    font-size:40px;
}
@media screen and (max-width:480px){
    font-size:32px;
}
`;
export const HeroP = styled.p`
	font-family: "Rajdhani", sans-serif;
	margin-top: 30px;
	color: #fff;
	font-size: 40px;
	text-align: center;
	max-width: 600px;
	@media screen and (max-width: 768px) {
		font-size: 24px;
	}
	@media screen and (max-width: 480px) {
		font-size: 24px;
	}
`;
// export const Image = styled.img`
// padding-top:0px;
// height:300px;
// width:300px;
// border-radius:50%;
// @media screen and (max-width:768px){
//     height:200px;
// width:200px;
// canvas{
//     height:700px
// }
// }
// @media screen and (max-width:480px){
//     height:200px;
// width:200px;
// canvas{
//     height:700px
// }
// }
// `
