import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Body from "../components/Body";
import backgroundImage from "../assets/recbg.jpeg"; 

const RecipePage = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Header Section */}
      <Header />

      <Body />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default RecipePage;
