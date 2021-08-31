import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
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
			<Footer />
		</Router>
	);
}

export default App;
