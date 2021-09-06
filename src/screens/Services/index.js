import React from "react";
import { AiOutlineMobile } from "react-icons";
import {
	ServicesContainer,
	ServicesH1,
	ServiceWrapper,
	ServiceCard,
	ServicesIcon,
	ServicesH2,
} from "./ServiceElements";
import Icon1 from "../../assets/images/web.svg";
function Services() {
	return (
		<ServicesContainer id='services1'>
			<ServicesH1>Services</ServicesH1>
			<ServiceWrapper>
				<ServiceCard href='https://nkmovies-33990.web.app/' target='_black'>
					<ServicesIcon src={Icon1} />
					<ServicesH2>Website Design</ServicesH2>
				</ServiceCard>
				<ServiceCard href='http://nkhchatapp.herokuapp.com/' target='_black'>
					<ServicesIcon src={Icon1} />
					<ServicesH2>Mobile App Development</ServicesH2>
				</ServiceCard>
				<ServiceCard href='https://nkusikevin.netlify.app/' target='_black'>
					<ServicesIcon src={Icon1} />
					<ServicesH2>IT Consultation</ServicesH2>
				</ServiceCard>
				<ServiceCard href='https://nkusikevin.netlify.app/' target='_black'>
					<ServicesIcon src={Icon1} />
					<ServicesH2>Graphic Design</ServicesH2>
				</ServiceCard>
			</ServiceWrapper>
		</ServicesContainer>
	);
}

export default Services;
