
import { useEffect } from "react";
import { useState } from "react";

const Recipes = ({addRecipesToQueue}) => {
    // console.log(addRecipesToQueue)
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('Food.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
    return (
        <div className="w-full lg:w-2/3 mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  " >
                {
                    recipes.map(recipe => <div key={recipe.recipe_id}>
                        <div className="card bg-white text-black w-96 border-2 ">
                            <figure className="px-8 py-6">
                                <img className="md:h-60 w-full rounded-xl"
                                    src={recipe.recipe_image}
                                    alt="recipe img" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-xl text-slate-600 font-medium">{recipe.recipe_name}</h2>
                                <p className="text-gray-600 text-base font-semibold">{recipe.short_description}</p>
                                <h2 className="text-xl text-slate-700 font-medium">Ingredients: {recipe.ingredients.length}</h2>
                                <ul className="ml-8">
                                    {
                                        recipe.ingredients.map((item, idx) => <li className="list-disc text-gray-700" key={idx}>{item}</li>)
                                    }
                                </ul>
                                <div className="flex gap-5">
                                    <div className="flex items-center">
                                        <i className="fa-regular fa-clock mr-2 text-2xl"></i>
                                        <p>{recipe.preparing_time} minutes</p>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fa-solid fa-fire mr-2 text-2xl"></i>
                                        <p>{recipe.calories} kcal</p>
                                    </div>
                                </div>
                                <div className="card-actions">
                                    <button onClick={() =>addRecipesToQueue(recipe)} className="btn bg-green-500 text-white rounded-2xl border-none">Want to cook</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Recipes;