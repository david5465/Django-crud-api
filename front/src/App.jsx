import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ProductFormPage } from './pages/ProductFormPage'
import { Products } from './pages/Products'
import { Navigation } from './components/Navigation'

function App() {
  return(
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products-create" element={<ProductFormPage/>}/>
        <Route path="/" element={<Navigate to='/products'/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App