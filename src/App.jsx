import Hero from "./components/Hero";
import Shorten from "./components/Shorten";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import Boost from "./components/Boost";
import Footer from "./components/Footer";

export default function App() {
  return (
    <body className="  m-auto lg:py-10">
      <Navbar />
      <Hero />
      <Shorten />
      <Boost />
      <Footer />
    </body>
  );
}
