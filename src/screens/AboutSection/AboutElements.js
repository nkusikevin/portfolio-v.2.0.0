import styled from "styled-components";
export const InfoContainer = styled.div`
	color: #000;
	background:white;
	@media screen and (max-width: 768) {
		padding: 100px 0;
	}
`;
export const InfoWrapper = styled.div`
	display: grid;
	z-index: 1;
	height: 800px;
	width: 100%;
	max-width: 1100px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 24px;
	justify-content: center;
`;
export const InfoRow = styled.div`
	display: grid;
	grid-auto-columns: minmax(autofill, 1fr);
	align-items: center;
	grid-template-areas: ${({ imgStart }) =>
		imgStart ? `'col2 col1'` : `'col1 col2'`};
	@media screen and (max-width: 768px) {
		grid-template-areas: ${({ imgStart }) =>
			imgStart ? `'col2' 'col1'` : `'col1 col1''col2 col2'`};
	}
`;
export const Column1 = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col1;
`;
export const Column2 = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col2;
`;
export const TextWrapper = styled.div`
	max-width: 540px;
	padding: 0;
	padding-top: 60px;
`;
export const TopLine = styled.p`
	color:black;
	font-size: 2.375rem;
	line-height: 16px;
	font-weight: 700;
	letter-spacing: 1.4px;
	text-transform: uppercase;
	margin-bottom: 16px;
	@media screen and (max-width: 768px) {
		font-size:1.5rem
	}
`;
export const Heading = styled.div`
	margin-bottom: 24px;
	font-size: 25px;
	line-height: 1.1;
	font-weight: 600;
	color: black;
	@media screen and (max-width: 480px) {
		font-size: 20px;
	}
`;
export const Subtitle = styled.p`
	max-width: 440px;
	margin-bottom: 35px;
	font-size: 18px;
	line-height: 1;
	font-weight: 800;
	font-family: "Rajdhani", sans-serif;
	color: black;
`;
export const BtnWrap = styled.div`
	display: flex;
	justify-content: flex-start;
`;
export const ImgWrap = styled.div`
	max-width: 555px;
	height: 100%;
`;
export const Img = styled.img`
	width: 100%;
	margin: 0 0 10px 0;
	padding-right: 0;
	padding-bottom: 4em;
	// border-radius: 50%;
	
	-webkit-filter: drop-shadow(5px 5px 5px #222);
	filter: drop-shadow(5px 5px 5px #222);
	@media screen and (max-width: 768) {
		margin: 0;
		width: 50%;
	}
`;
export const Button = styled.button`
	border-radius: 50px;
	background-color:black;
	white-space: nowrap;
	padding: 10px 22px;
	color: white;
	font-size: 16px;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-ease-in-out;
	text-decoration: none;
	&:hover {
		transition: all 0.2s ease-ease-in-out;
		background-color: #fff;
		color: #010606;
	}
`;
