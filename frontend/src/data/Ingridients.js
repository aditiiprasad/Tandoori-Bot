// data/Ingredients.js

const commonIngredients = [
    // Vegetables
    "Potato", "Tomato", "Carrot", "Onion", "Garlic", "Ginger", "Spinach", "Peas", "Capsicum", 
    "Cucumber", "Cabbage", "Cauliflower", "Broccoli", "Zucchini", "Mushrooms", "Bell Peppers", 
    "Chili", "Beetroot", "Radish", "Sweet Potato", "Pumpkin", "Squash", "Turnip", "Celery", 
    "Leeks", "Shallots", "Brussels Sprouts", "Asparagus", "Artichokes", "Okra", "Kale", 
    "Swiss Chard", "Collard Greens", "Iceberg Lettuce", "Romaine Lettuce", "Mustard Greens", 
    "Eggplant", "Fennel", "Horseradish", "Endive", "Bamboo Shoots", "Seaweed", "Lotus Root", 
    "Water Chestnuts", "Parsnip",
  
    // Fruits
    "Apple", "Banana", "Mango", "Orange", "Lemon", "Lime", "Pineapple", "Grapes", "Strawberries", 
    "Blueberries", "Raspberries", "Blackberries", "Cherries", "Peach", "Plum", "Apricot", 
    "Kiwi", "Avocado", "Watermelon", "Cantaloupe", "Papaya", "Passion Fruit", "Guava", "Fig", 
    "Dates", "Pomegranate", "Lychee", "Dragon Fruit", "Starfruit", "Breadfruit", "Tamarind", 
    "Persimmon", "Cranberries", "Currants", "Gooseberries", "Mulberries", "Jackfruit", 
    "Rhubarb", "Custard Apple", "Sapota", "Soursop",
  
    // Meats
    "Chicken", "Beef", "Pork", "Lamb", "Goat", "Duck", "Turkey", "Quail", "Rabbit", "Veal", 
    "Bacon", "Ham", "Salami", "Sausage", "Prosciutto", 
  
    // Seafood
    "Fish", "Shrimp", "Crab", "Lobster", "Squid", "Octopus", "Clams", "Mussels", "Oysters", 
    "Scallops", "Prawns", "Cod", "Salmon", "Tuna", "Mackerel", "Sardines", "Trout", 
    "Herring", "Snapper", "Anchovies", 
  
    // Dairy
    "Milk", "Cream", "Yogurt", "Butter", "Cheese", "Eggs", "Mozzarella", "Cheddar", "Parmesan", 
    "Feta", "Goat Cheese", "Ricotta", "Cream Cheese", "Brie", "Camembert", "Gorgonzola", 
    "Blue Cheese", "Swiss Cheese", "Halloumi", "Cottage Cheese", "Paneer", 
  
    // Grains & Pasta
    "Rice", "Quinoa", "Wheat", "Barley", "Oats", "Millet", "Rye", "Corn", "Couscous", 
    "Polenta", "Pasta", "Noodles", "Vermicelli", "Macaroni", "Spaghetti", "Fusilli", 
    "Lasagna Sheets", "Ravioli", "Tortellini", 
  
    // Legumes
    "Chickpeas", "Black Beans", "Kidney Beans", "White Beans", "Lentils", "Peanuts", "Soybeans", 
    "Edamame", "Split Peas", "Toor Dal", "Moong Dal", "Urad Dal", "Masoor Dal", 
  
    // Nuts & Seeds
    "Almonds", "Cashews", "Walnuts", "Pistachios", "Hazelnuts", "Pecans", "Macadamia Nuts", 
    "Brazil Nuts", "Sunflower Seeds", "Pumpkin Seeds", "Chia Seeds", "Flaxseeds", "Sesame Seeds", 
    "Pine Nuts", "Hemp Seeds",
  
    // Baking
    "Flour", "Sugar", "Brown Sugar", "Powdered Sugar", "Baking Powder", "Baking Soda", "Yeast", 
    "Cornstarch", "Gelatin", "Agar Agar", "Vanilla Extract", "Cocoa Powder", "Chocolate Chips", 
    "Milk Powder", "Almond Flour", "Coconut Flour",
  
    // Oils & Fats
    "Olive Oil", "Canola Oil", "Vegetable Oil", "Coconut Oil", "Butter", "Ghee", "Lard", 
    "Sesame Oil", "Peanut Oil", "Avocado Oil", "Sunflower Oil", "Mustard Oil", 
  
    // Spices & Herbs
    "Salt", "Black Pepper", "Turmeric", "Cumin", "Coriander", "Paprika", "Chili Powder", 
    "Cinnamon", "Cardamom", "Nutmeg", "Cloves", "Ginger Powder", "Garlic Powder", "Oregano", 
    "Thyme", "Rosemary", "Basil", "Bay Leaves", "Parsley", "Mint", "Dill", "Saffron", "Vanilla", 
  
    // Condiments & Sauces
    "Soy Sauce", "Vinegar", "Ketchup", "Mustard", "Mayonnaise", "BBQ Sauce", "Hot Sauce", 
    "Worcestershire Sauce", "Fish Sauce", "Chili Sauce", "Tahini", "Pesto", "Hummus", "Chutney", 
    "Pickles", 
  
    // Sweeteners
    "Honey", "Maple Syrup", "Molasses", "Agave Syrup", "Stevia", 
  
    // Beverages
    "Water", "Milk", "Coffee", "Tea", "Green Tea", "Black Tea", "Orange Juice", "Apple Juice", 
    "Lemonade", "Coconut Water", "Soda", "Wine", "Beer", 
  
    // Miscellaneous
    "Breadcrumbs", "Tofu", "Tempeh", "Seitan", "Rice Paper", "Tapioca", "Arrowroot", 
    "Tamarind Paste", "Coconut Milk", "Coconut Cream", "Whipped Cream", "Sour Cream", 
    "Evaporated Milk", "Condensed Milk", "Marzipan", "Nori Sheets", "Panko", 
  
    // International Ingredients
    "Kimchi", "Miso", "Dashi", "Wasabi", "Sriracha", "Hoison Sauce", "Mirin", "Rice Vinegar", 
    "Togarashi", "Umeboshi", "Za'atar", "Harissa", "Sumac", "Ras el Hanout", "Gochujang", 
    "Natto", "Shichimi", 
  
    // Frozen & Canned Items
    "Frozen Peas", "Frozen Spinach", "Canned Tomatoes", "Canned Beans", "Canned Pineapple", 
    "Canned Coconut Milk", "Canned Tuna", "Canned Sardines", "Frozen Corn", "Frozen Blueberries",
  ];
  
  export default commonIngredients;
  
 
  
  
 
  