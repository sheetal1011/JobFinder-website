import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Jobcards from "../components/Jobcards";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div className="home">
        <Hero/>
        <Jobcards/>
        <Footer/>
      </div>
    </>
  )
}

export default Home;