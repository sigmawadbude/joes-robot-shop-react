
import Catalog from './Calalog'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cart from './Cart'
import { CartProvider } from './CartProvider'
// import ProductDetails from './ProductDetails'
import Home from './Home'
import SiteHeader from './SiteHeader'
import SignIn from './SignIn'

function App() {

  return (
    <>
      <Router>
        <CartProvider>
          <SiteHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/sign-in" element={<SignIn />} />
          </Routes>
        </CartProvider>
      </Router>
    </>
  )
}

export default App
