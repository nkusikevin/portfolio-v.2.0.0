import React from "react";
import image from "../../assets/images/profile.png";
import {
	InfoContainer,
	Button,
	InfoWrapper,
	Column2,
	ImgWrap,
	Img,
	InfoRow,
	Column1,
	BtnWrap,
	Subtitle,
	TextWrapper,
	TopLine,
	Heading,
} from "./AboutElements";
function AboutMe({
	id,
	lightText,
	lightBg,
	ligthTextDesc,
	topLine,
	headline,
	description,
	buttonLabel,
	imgStart,
	img,
	alt,
	dark,
	primary,
	darkText,
}) {
	return (
		<>
			<InfoContainer lightBg={lightBg} id={id}>
				<InfoWrapper>
					<InfoRow imgStart={imgStart}>
						<Column1>
							<TextWrapper>
								<TopLine>{topLine}</TopLine>
								<Heading lightText={lightText}>{headline}</Heading>
								<Subtitle darkText={darkText}>{description}</Subtitle>
								<BtnWrap>
									<Button
										to='contactme'
										smooth={true}
										duration={500}
										spy={true}
										exact='true'
										offset={-80}>
										{buttonLabel}
									</Button>
								</BtnWrap>
							</TextWrapper>
						</Column1>
						<Column2>
							<ImgWrap>
								<Img src={image} alt={alt} />
							</ImgWrap>
						</Column2>
					</InfoRow>
				</InfoWrapper>
			</InfoContainer>
		</>
	);
}

export default AboutMe;
