import NavBar from "./Components/NavBar";
import './App.scss'
import ItemListContainer from "./Components/ItemListContainer";
import ItemDetailContainer from "./Components/itemDetailContainer";

function App () {
  return (
    <div>
      <NavBar/>
      {/* <ItemDetailContainer/> */}
      <ItemListContainer/> 
    </div>

  )
}

export default App;