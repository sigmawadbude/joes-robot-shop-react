
import Catalog from './Calalog'
import { CartProvider } from './CartProvider'
//import Home from './Home'
import SiteHeader from './SiteHeader'

function App() {

  return (
    <>
      <SiteHeader />
      <CartProvider>
        <Catalog />
      </CartProvider>
    </>
  )
}

export default App
