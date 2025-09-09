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
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/products">
        <Route index element={<ProductsPage />} />
        <Route path=":id" element={<ProductsDetailsPage />} />   
       </Route>      
    </Routes>
   </BrowserRouter>
  )
  
}

export default App
