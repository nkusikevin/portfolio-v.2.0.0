import React from "react";
import Particles from "react-particles-js";
import {
	HeroContainer,
	HeroBg,
	HeroContent,
	HeroH1,
	HeroP,
} from "./HeroElements";
import Typical from "react-typical";
import image from "../../assets/images/hero.jpg";
function HeroSection() {
	return (
		<HeroContainer
			id='herosection'
			style={{
				backgroundImage: `url(${image})`,
				backgroundPosition: "center",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}}>
			<HeroBg>
				<Particles
					params={{
						" polygon": {
							enable: true,
							type: "inside",
							move: {
								radius: 10,
							},
						},
						particles: {
							number: {
								value: 60,
							},
							size: {
								value: 4,
							},
						},
						interactivity: {
							events: {
								onhover: {
									enable: true,
									mode: "repulse",
								},
							},
						},
					}}
				/>
			</HeroBg>
			<HeroContent>
				<HeroH1></HeroH1>
				<HeroP>
					<Typical
						steps={[
							"I'm  Software developer",
							1000,
							"I'm  Crypto Investor",
							1000,
							"I'm  Tech enthusiast",
							1000,
							"I'm  Designer",
							1000,
							"I'm  Music Lover",
							1000,
							"I'm  Creative jerk ",
							1000,
						]}
						loop={Infinity}
						wrapper='b'
					/>
				</HeroP>
			</HeroContent>
		</HeroContainer>
	);
}

export default HeroSection;
