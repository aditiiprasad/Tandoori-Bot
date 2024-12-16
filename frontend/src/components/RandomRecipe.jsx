import React, { useState } from "react";
import { generateRecipe, generateAnswer } from "../lib/gemini"; 
import botDp from '../assets/logodp.png';
import ReactMarkdown from 'react-markdown'; 
import chatBackground from '../assets/chatbg.jpeg';


const RandomRecipe = ({ placeholder }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState(""); 

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { user: true, text: input }]);
      setInput("");

      setTimeout(() => {
        if (currentRecipe) {
          handleQuery(input);  
        } else {
          setMessages((prevMessages) => [
            ...prevMessages,
            { user: false, text: "I don't have a recipe yet. Please generate one first!" },
          ]);
        }
      }, 1000);
    }
  };

  const handleGenerateRecipe = async () => {
    setLoading(true); 
    setMessages([
      ...messages,
      { user: false, text: "Generating a random recipe..." },
    ]);

    try {
      const recipe = await generateRecipe(); 
      setCurrentRecipe(recipe); 
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
      setLoading(false); 
    }
  };

  
  const handleQuery = async (query) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { user: false, text: "Processing your query..." },
    ]);

    try {
      const answer = await generateAnswer(query, currentRecipe); 
      setMessages((prevMessages) => [
        ...prevMessages,
        { user: false, text: answer }, 
      ]);
    } catch (error) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { user: false, text: "Sorry, I couldn't answer that question." },
      ]);
    }
  };

  return (
    <div className="relative h-full">
      <h2 className="text-2xl font-bold text-deep-purple">Khane mei kya banau?</h2>
      <p className="text-deep-purple mt-2">
        Tired of asking 'Khane mei kya banau?' Let AI decide! This Random Dish
        Generator will surprise you with a new recipe each day. No more
        decision fatigue—just delicious meals at your fingertips!
      </p>

      <div className="flex justify-center mt-4">
        <button
          onClick={handleGenerateRecipe}
          className="bg-deep-purple text-white text-2xl font-bold px-4 py-2 rounded-full hover:bg-violet-950 transition"
          disabled={loading}
        >
          {loading ? "Loading..." : "Generate Recipe"}
        </button>
      </div>

      <div
  className="mt-4 h-screen overflow-y-auto rounded-md p-4 shadow-inner"
  style={{
    backgroundImage: `url(${chatBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 flex ${message.user ? "justify-end" : "justify-start"}`}
          >
            <div className="flex items-start">
              {!message.user && (
                <img
                  src={botDp} 
                  alt="Bot Profile"
                  className="w-10 h-10 rounded-full mr-3"
                />
              )}
              <div
                className={`max-w-xs p-3 rounded-lg ${message.user ? "bg-light-beige text-black" : "bg-deep-purple bg-opacity-70 text-white"}`}
              >
                <ReactMarkdown>{message.text}</ReactMarkdown>  
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex">
      <input
  type="text"
  placeholder=" Chat with the bot , Modify dish tailored to your preferences – e.g., gluten-free, vegetarian alternative.."
  value={input}
  onChange={(e) => setInput(e.target.value)}
  className="flex-1 bg-gradient-to-br from-light-beige to-orange-200 rounded-full p-3 focus:outline-none focus:ring-2 mr-2 focus:ring-deep-purple placeholder-deep-purple"
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
