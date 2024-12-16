import React, { useState } from "react";
import { generateRecipe, answerRecipeQuestion } from "../lib/gemini2";
import ReactMarkdown from "react-markdown";
import logo from '../assets/logo.png'

const Chat = ({ ingredients }) => {
  const [activeTab, setActiveTab] = useState("recipe"); 
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [chatMessages, setChatMessages] = useState([]); 
  const [chatInput, setChatInput] = useState("");

  const handleGenerateRecipe = async () => {
    setLoading(true);
    setError("");

    try {
      const generatedRecipe = await generateRecipe(ingredients);
      setRecipe(generatedRecipe);
    } catch (err) {
      setError(err.message || "An error occurred while generating the recipe.");
    } finally {
      setLoading(false);
    }
  };

  const handleChatSubmit = async () => {
    if (!chatInput.trim()) return;

    
    const userMessage = { text: chatInput, sender: "user" };
    setChatMessages((prev) => [...prev, userMessage]);

    setLoading(true);
    setChatInput("");

    try {
     
      const answer = await answerRecipeQuestion(recipe, chatInput);
      const botMessage = { text: answer, sender: "bot" };
      setChatMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setChatMessages((prev) => [
        ...prev,
        { text: "An error occurred while answering your question.", sender: "bot" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-deep-purple bg-opacity-45 rounded-xl p-4 w-full">
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-300 mb-4">
        <button
          className={`py-2 px-4 ${
            activeTab === "recipe"
              ? "border-b-2 border-golden-yellow text-golden-yellow font-bold"
              : "text-white hover:text-golden-yellow"
          }`}
          onClick={() => setActiveTab("recipe")}
        >
          Generate Recipe
        </button>
        <button
          className={`py-2 px-4 ${
            activeTab === "chat"
              ? "border-b-2 border-golden-yellow text-golden-yellow font-bold"
              : "text-white hover:text-golden-yellow"
          }`}
          onClick={() => setActiveTab("chat")}
        >
          Chat and Ask Questions
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "recipe" && (
        <div>
          {/* Create Recipe Button */}
          <button
            onClick={handleGenerateRecipe}
            className="bg-gradient-to-tr from-golden-yellow to-tandoori-red font-bold text-lg text-white px-4 py-2 rounded-full hover:bg-blue-600 transition transform hover:scale-105 shadow-sm active:shadow-xl shadow-orange-300 active:scale-95"
            disabled={loading}
          >
            {loading ? "Generating..." : "Create Recipe"}
          </button>

          {error && <p className="text-red-500 font-bold mt-3">{error}</p>}

          {recipe && (
            <div className="mt-6">
              <h4 className="text-lg font-bold text-golden-yellow mb-2">Generated Recipe:</h4>
              <ReactMarkdown className="prose text-white">{recipe}</ReactMarkdown>
            </div>
          )}
        </div>
      )}

      {activeTab === "chat" && (
        <div>
          <h3 className="text-lg font-semibold text-golden-yellow mb-3">Chat about the Recipe:</h3>
          <div className="bg-transparent p-4 rounded-md max-h-80 overflow-y-auto border border-olive-green mb-4">
            {chatMessages.length > 0 ? (
              chatMessages.map((message, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-xl mb-2 flex items-start ${
                    message.sender === "user"
                      ? "bg-blue-100 bg-opacity-20 text-white"
                      : "bg-olive-green bg-opacity-30 text-white"
                  }`}
                >
                  {message.sender === "bot" && (
                    <img
                      src={logo} 
                      alt="Bot DP"
                      className="w-8 h-8 rounded-full mr-3"
                    />
                  )}
                  <div className="flex-1">{message.text}</div>
                </div>
              ))
            ) : (
              <p className="text-yellow-500">No messages yet. Start chatting!</p>
            )}
          </div>

          <div className="flex items-center space-x-3">
            <input
              type="text"
              className="border-2 border-olive-green bg-transparent rounded-full text-white p-2 flex-1 placeholder:text-gray-50"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Ask a question about the recipe..."
              disabled={!recipe}
            />
            <button
              onClick={handleChatSubmit}
              className="bg-olive-green text-white px-4 py-2 rounded-full hover:bg-lime-600 font-bold transition"
              disabled={!recipe || loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
