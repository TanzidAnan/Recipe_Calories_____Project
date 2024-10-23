
import { useState } from 'react'
import './App.css'
import Banner from './Compontent/Banner/Banner'
import Navber from './Compontent/Navber/Navber'
import Recipes from './Compontent/Recipes/Recipes'
import Sitbar from './Compontent/Sitbar/Sitbar'

function App() {
  const [recipesQueue,setRecipesQueue] =useState([]);
  const addRecipesToQueue =(recipe) =>{
    const isExiten =recipesQueue.find(priviousRecipes => priviousRecipes.recipe_id ===recipe.recipe_id)
    if(!isExiten){
      setRecipesQueue([...recipesQueue,recipe])
    }
    else{
      alert('Add a cart')
    }
    
  }

  return (
    <>
    <div className='w-10/12 mx-auto'>
    <Navber></Navber>
    <Banner></Banner>
      <section className='flex flex-col lg:flex-row gap-6'>
        <Recipes addRecipesToQueue={addRecipesToQueue}></Recipes>

        <Sitbar recipesQueue={recipesQueue}></Sitbar>
      </section>
    </div>
    </>
  )
}

export default App
