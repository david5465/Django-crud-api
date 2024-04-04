import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ProductFormPage } from './pages/ProductFormPage'
import { Products } from './pages/Products'
import { Navigation } from './components/Navigation'
import { Toaster } from 'react-hot-toast'

function App() {
  return(
    <BrowserRouter>
    <div className='container mx-auto'>
      <Navigation/>
      <Routes>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products-create" element={<ProductFormPage/>}/>
        <Route path="/products/:id" element={<ProductFormPage/>}/>
        <Route path="/" element={<Navigate to='/products'/>}/>
      </Routes>
      <Toaster/>
    </div>
    </BrowserRouter>
  )
}

export default App