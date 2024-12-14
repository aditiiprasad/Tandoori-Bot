import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Body from "../components/Body";

const RecipePage = () => {
  

  return (
    <div className="bg-gradient-to-r from-slate-400 to-white via-white min-h-screen">
      {/* Header Section */}
      <Header />

      <Body/>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};



 


export default RecipePage;
