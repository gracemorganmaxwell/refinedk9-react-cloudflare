import React from "react";

import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Services } from "./components/Services/Services";
import { Reviews } from "./components/Reviews/Reviews";
import { Gallery } from "./components/Gallery/Gallery";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Header />
			<Hero />
			<About />
			<Services />
			<Reviews />
			<Gallery />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
