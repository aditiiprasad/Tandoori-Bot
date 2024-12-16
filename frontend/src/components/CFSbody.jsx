import React, { useState } from "react";
import Input from "../components/Input";
import Chat from "../components/Chat";
import bg from '../assets/wood.jpeg'

const CFSbody = () => {
  const [ingredients, setIngredients] = useState([]);

  return (
    <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-6 p-6 bg-gradient-to-tr from-yellow-600 via-golden-yellow to-yellow-700"
    style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
    >
      <div className="flex-1">
        <Input ingredients={ingredients} setIngredients={setIngredients} />
      </div>
      <div className="flex-1">
        <Chat ingredients={ingredients} />
      </div>
    </div>
  );
};

export default CFSbody;
