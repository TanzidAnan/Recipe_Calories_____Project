
import './App.css'
import Banner from './Compontent/Banner/Banner'
import Navber from './Compontent/Navber/Navber'
import Recipes from './Compontent/Recipes/Recipes'
import Sitbar from './Compontent/Sitbar/Sitbar'

function App() {


  return (
    <>
    <div className='w-10/12 mx-auto'>
    <Navber></Navber>
    <Banner></Banner>
      <section className='flex flex-col lg:flex-row gap-6'>
        <Recipes></Recipes>

        <Sitbar></Sitbar>
      </section>
    </div>
    </>
  )
}

export default App
