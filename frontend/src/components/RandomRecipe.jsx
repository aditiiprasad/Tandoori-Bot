import React, { useState } from "react";

const RandomRecipe = ({ placeholder }) => {
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
    <div>
      <h2 className="text-2xl font-bold text-white">Khane mei kya banau?</h2>
      <p className="text-light-beige mt-2">
        Tired of asking 'Khane mei kya banau?' Let AI decide! This Random Dish Generator will surprise you with a new recipe each day. No more decision fatigue—just delicious meals at your fingertips!
      </p>
      <div className="mt-4 h-80 overflow-y-auto rounded-md p-4 bg-gradient-to-br from-golden-yellow to-orange-400 shadow-inner">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 flex ${message.user ? "justify-end" : "justify-start"}`}
          >
            <div className="flex items-center">
              {/* Only show DP for bot's messages */}
              {!message.user && (
                <img
                  src={botDp} // Display the bot's DP for bot messages
                  alt="Bot Profile"
                  className="w-10 h-10 rounded-full mr-3" // Adjust the size and position
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
          className="flex-1  bg-gradient-to-br from-light-beige to-orange-200 rounded-full p-3 focus:outline-none focus:ring-2  focus:ring-tandoori-red"
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
