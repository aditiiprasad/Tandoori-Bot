import React, { useState } from "react";
import { generateRecipe } from "../lib/gemini";  // Import the generateRecipe function
import botDp from '../assets/logodp.png'

const RandomRecipe = ({ placeholder }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false); // To manage loading state

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { user: true, text: input }]);
      setInput("");

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { user: false, text: "Launching Soon..." },
        ]);
      }, 1000);
    }
  };

  const handleGenerateRecipe = async () => {
    setLoading(true);  // Set loading to true while fetching
    setMessages([
      ...messages,
      { user: false, text: "Generating a random recipe..." },
    ]);

    try {
      const recipe = await generateRecipe();  // Call the generateRecipe function
      setMessages((prevMessages) => [
        ...prevMessages,
        { user: false, text: recipe },
      ]);
    } catch (error) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { user: false, text: "Failed to fetch a recipe. Please try again later." },
      ]);
    } finally {
      setLoading(false);  // Set loading to false after completion
    }
  };

  return (
    <div className="relative h-full">
      <h2 className="text-2xl font-bold text-white">Khane mei kya banau?</h2>
      <p className="text-white mt-2">
        Tired of asking 'Khane mei kya banau?' Let AI decide! This Random Dish
        Generator will surprise you with a new recipe each day. No more
        decision fatigue—just delicious meals at your fingertips!
      </p>
      <div className="flex justify-center mt-4">
        <button
          onClick={handleGenerateRecipe}
          className="bg-deep-purple text-white font-bold px-4 py-2 rounded-full hover:bg-light-purple transition"
          disabled={loading}  // Disable the button while loading
        >
          {loading ? "Loading..." : "Generate Recipe"}
        </button>
      </div>
      <div className="mt-4 h-80 overflow-y-auto rounded-md p-4 bg-gradient-to-br from-golden-yellow to-orange-400 shadow-inner">
        {/* Generate Recipe button at the top */}
       

        {/* Scrollable messages */}
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 flex ${message.user ? "justify-end" : "justify-start"}`}
          >
            <div className="flex items-start">
              {/* Show bot image for non-user messages */}
              {!message.user && (
                <img
                  src={botDp} // Replace with actual bot image source
                  alt="Bot Profile"
                  className="w-10 h-10 rounded-full mr-3"
                />
              )}
              <div
                className={`max-w-xs p-3 rounded-lg ${
                  message.user ? "bg-light-beige text-black" : "bg-deep-purple text-white"
                }`}
              >
                {message.text}
              </div>
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
          className="flex-1 bg-gradient-to-br from-light-beige to-orange-200 rounded-full p-3 focus:outline-none focus:ring-2 mr-2 focus:ring-tandoori-red"
        />
        <button
          onClick={handleSendMessage}
          className="bg-olive-green text-white font-extrabold px-6 py-3 rounded-full hover:bg-white hover:border-olive-green hover:text-olive-green transition border-none hover:border-2"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default RandomRecipe;
