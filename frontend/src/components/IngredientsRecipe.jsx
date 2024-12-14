// IngredientsRecipe.js
import React, { useState } from "react";

const IngredientsRecipe = ({ placeholder }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { user: true, text: input }]);
      setInput(""); // Clear input field

      // Simulate bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { user: false, text: `Launching Soon...` },
        ]);
      }, 1000); // Simulate response delay
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-tandoori-red">Recipe by Ingredients available in your Pantry</h2>
      <p className="text-gray-600 mt-2">Got ingredients? Get recipes, served hot!
      </p>
      <div className="mt-4 h-80 overflow-y-auto border rounded-md p-4 bg-gray-50 shadow-inner">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 flex ${message.user ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs p-3 rounded-lg ${
                message.user
                  ? "bg-tandoori-red text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex">
        <input
          type="text"
          placeholder={placeholder}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded-l-md p-2 focus:outline-none focus:ring-2 focus:ring-tandoori-red"
        />
        <button
          onClick={handleSendMessage}
          className="bg-tandoori-red text-white px-4 rounded-r-md hover:bg-burnt-orange transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default IngredientsRecipe;
