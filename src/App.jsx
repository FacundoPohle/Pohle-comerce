import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./Components/CartContext";
import NavBar from "./Components/NavBar";
import './App.scss'
import ItemListContainer from "./Components/ItemListContainer";
import ItemDetailContainer from "./Components/itemDetailContainer";
import Carrito from "./Components/Carrito"

function App() {
  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:idCategory' element={<ItemListContainer />} />
            <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Carrito />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>

  )
}

export default App;