import { Navigate, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Inicio from "./pages/inicio"
import Carta from "./pages/Carta"
import Carrito from "./pages/Carrito"
import Contacto from "./pages/Contacto"
import Footer from "./components/Footer"


function App() {

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/carta" element={<Carta />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
