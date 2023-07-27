import React from "react";
import Category from "./components/Category";
import Foods from "./components/Foods";
import HeadlineCards from "./components/HeadlineCards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Foods />
      <Category />
    </div>
  );
}

export default App;
