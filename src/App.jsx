
import './App.css'
import Banner from './Compontent/Banner/Banner'
import Navber from './Compontent/Navber/Navber'
import Recipes from './Compontent/Recipes/Recipes'

function App() {


  return (
    <>
    <Navber></Navber>
    <Banner></Banner>
      <section>
        <Recipes></Recipes>
      </section>
    </>
  )
}

export default App
