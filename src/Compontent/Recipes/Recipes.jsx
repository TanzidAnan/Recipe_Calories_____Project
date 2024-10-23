
import { useEffect } from "react";
import { useState } from "react";

const Recipes = () => {
    const [recipes,setRecipes] =useState([]);
    useEffect(() =>{
        fetch('Food.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
    return (
        <div className="w-2/3">
           <h1>Recipes {recipes.length}</h1> 
        </div>
    );
};

export default Recipes;