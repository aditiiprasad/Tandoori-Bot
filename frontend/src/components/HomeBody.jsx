// HomeBody.jsx

import React from "react";
import Card from "../components/Card"; // Import the Card component
import data from "../data/data"; // Import card data

const HomeBody = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 bg-gradient-to-br from-red-700 to-burnt-orange">
      <h2 className="text-4xl font-bold text-white mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((service, index) => (
          <Card key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default HomeBody;
