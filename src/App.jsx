import NavBar from "./Componentes/NavBar";
import './App.scss'
import logo from './imagenes/logo.png';
import ItemListContainer from "./Componentes/ItemListContainer";

function App () {
  return (
    <div>
      <NavBar/>
      <ItemListContainer
      name="ZAPATOS"
      description="confortables zapatos de cuero refinado"
      image={logo}
      />
    </div>

  )
}

export default App;