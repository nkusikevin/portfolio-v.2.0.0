import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { homeObjOne } from "./screens/AboutSection/data";
import AboutMe from "./screens/AboutSection";
import Service from "./screens/Services"
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./screens/HeroSection";
function App() {
	const [isOpen, setisOpen] = useState(false);
	const toggle = () => {
		setisOpen(!isOpen);
	};
	return (
		<Router>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<HeroSection />
			<AboutMe {...homeObjOne} />
			<Service/>
			<Footer />
		</Router>
	);
}

export default App;
