/* eslint-disable react/prop-types */

const Sitbar = ({ recipesQueue, recipeRemove, preperRecipe,calculaterTimeAndCalories,totleTime,totleCalure }) => {
    return (
        <div className="w-full lg:w-1/3 mt-4 border-2 rounded-2xl bg-white">
            <h1 className="text-center text-2xl font-bold mt-2">Went To cook : {recipesQueue.length}</h1>

            <div>
                <div className="overflow-x-auto text-black font-medium">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                recipesQueue.map((recipe, idx) =>
                                    <tr className="hover hover:text-white" key={idx}>
                                        <th>{idx + 1}</th>
                                        <td>{recipe.recipe_name}</td>
                                        <td>{recipe.preparing_time}</td>
                                        <td>{recipe.calories}</td>
                                        <td><button onClick={() => {
                                            recipeRemove(recipe.recipe_id)
                                            calculaterTimeAndCalories(recipe.preparing_time,recipe.calories)
                                        }} className="btn bg-green-500 hover:bg-green-500 text-white rounded-2xl border-none">Priping</button></td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            <div>
                <h1 className="text-center text-2xl font-bold mt-2">current cooking : {preperRecipe.length}</h1>
                <div className="overflow-x-auto text-black font-medium">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                preperRecipe.map((recipe, idx) =>
                                    <tr className="hover hover:text-white" key={idx}>
                                        <th>{idx + 1}</th>
                                        <td>{recipe.recipe_name}</td>
                                        <td>{recipe.preparing_time}</td>
                                        <td>{recipe.calories}</td>
                                    </tr>)
                            }
                            <tr className="border-none">
                                <th></th>
                                <td></td>
                                <td>Totle Time= {totleTime}</td>
                                <td>Totle calories= {totleCalure}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Sitbar;