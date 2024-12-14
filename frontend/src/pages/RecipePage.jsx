import Footer from "../components/Footer";

const RecipePage = () => {
    return (
      <div className="bg-gradient-to-br from-light-beige via-white to-golden-yellow min-h-screen">
        {/* Header Section */}
        <header className="bg-gradient-to-r from-tandoori-red to-burnt-orange text-white py-6 text-center shadow-lg">
          <h1 className="text-4xl font-extrabold tracking-wide animate-fade-in">
            TandooriBot Recipes
          </h1>
          <p className="text-md mt-2 italic">Crafting flavors, one recipe at a time!</p>
        </header>
  
        {/* Main Content */}
        <main className="mt-8 p-6">
          {/* Recipe Generator Section */}
          <section className="text-center mb-8">
            <button className="bg-gradient-to-r from-tandoori-red to-golden-yellow text-white py-3 px-8 rounded-full text-lg font-bold shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl animate-bounce">
              Generate Recipe
            </button>
          </section>
  
          {/* Recipe Card Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {/* Example Recipe Card */}
            <div className="bg-white border-2 border-golden-yellow rounded-lg shadow-lg hover:shadow-2xl p-6 transform transition-transform hover:scale-105">
              <h2 className="text-xl font-bold text-tandoori-red mb-2">
                Spicy Chicken Curry
              </h2>
              <p className="text-slate-gray text-sm">
                A flavorful curry with tender chicken, aromatic spices, and a touch of heat.
              </p>
              <div className="flex gap-2 mt-4">
                <span className="bg-olive-green text-white text-xs px-3 py-1 rounded-full">
                  Gluten-Free
                </span>
                <span className="bg-olive-green text-white text-xs px-3 py-1 rounded-full">
                  High Protein
                </span>
              </div>
              <button className="mt-4 bg-gradient-to-r from-burnt-orange to-tandoori-red text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform">
                Save Recipe
              </button>
            </div>
  
            {/* Add more Recipe Cards dynamically */}
            <div className="bg-white border-2 border-golden-yellow rounded-lg shadow-lg hover:shadow-2xl p-6 transform transition-transform hover:scale-105">
              <h2 className="text-xl font-bold text-deep-purple mb-2">
                Paneer Butter Masala
              </h2>
              <p className="text-slate-gray text-sm">
                A creamy, tomato-based curry with succulent paneer cubes.
              </p>
              <div className="flex gap-2 mt-4">
                <span className="bg-olive-green text-white text-xs px-3 py-1 rounded-full">
                  Vegetarian
                </span>
              </div>
              <button className="mt-4 bg-gradient-to-r from-burnt-orange to-tandoori-red text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform">
                Save Recipe
              </button>
            </div>
          </section>
        </main>
  
        <Footer/>
      </div>
    );
  };
  
  export default RecipePage;
  