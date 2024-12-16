import React, { useState } from "react";
import botDp from "../assets/logodp.png"; 

const IngredientsRecipe = ({ placeholder }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { user: true, text: input }]);
      setInput(""); 

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { user: false, text: `Launching Soon...` },
        ]);
      }, 1000); 
    }
  };

  return (
    <div className="h-screen text-7xl flex justify-center font-bold text-deep-purple">
      COMING SOON
    </div>
  );
};

export default IngredientsRecipe;
