
// import Catalog from './Calalog'
import Cart from './Cart'
import { CartProvider } from './CartProvider'
//import Home from './Home'
import SiteHeader from './SiteHeader'

function App() {

  return (
    <>
      <SiteHeader />
      <CartProvider>
        <Cart />
      </CartProvider>
    </>
  )
}

export default App
