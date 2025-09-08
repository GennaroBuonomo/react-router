import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/About-us" element={<AboutUs />} />
      <Route path="/Products" element={<ProductsPage />} />
    </Routes>
   </BrowserRouter>
  )
  
}

export default App
