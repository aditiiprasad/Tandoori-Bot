import image1 from "../assets/ingri.webp";
import image2 from "../assets/random.jpg";
import image3 from "../assets/dhanba.jpg";
import image4 from "../assets/bg4.webp";

const data = [
  {
    image: image1,
    name: "Cook From Stock",
    description:
      "Turn your leftover ingredients into culinary masterpieces! Simply tell the bot what's in your fridge, and it will whip up personalized recipes tailored to your dietary preferences. No ingredient goes to waste—deliciousness awaits!",
    status: "Explore", // Service is ready
    link: "/cookfromstock", // Link for Cook From Stock
  },
  {
    image: image2,
    name: "Khane mei kya banau?",
    description:
      "Tired of asking 'Khane mei kya banau?' Let AI decide! This Random Dish Generator will surprise you with a new recipe each day. No more decision fatigue—just delicious meals at your fingertips!",
    status: "Explore", // Service is ready
    link: "/random", // Link for Khane mei kya banau
  },
  {
    image: image3,
    name: "Random Dhaba",
    description:
      "Stuck in a food rut? Let AI pick your next dining experience! Share your preferences, and AI will suggest a new restaurant for you to try. From local gems to exotic cuisines, enjoy the thrill of discovering something new every time!",
    status: "launching-soon", // Not ready yet
    link: "", 
  },
];

export default data;
