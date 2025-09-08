import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import ProductsPage from "./pages/ProductsPage";
import ProductsDetailsPage from './pages/ProductsDetailsPage';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/About-us" element={<AboutUs />} />
      <Route path="/Products" element={<ProductsPage />} />
      <Route path=":id" element={<ProductsDetailsPage />} />      
    </Routes>
   </BrowserRouter>
  )
  
}

export default App
