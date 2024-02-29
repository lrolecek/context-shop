import Cart from './components/Cart'
import Products from './components/Products'
import { CartContextProvider } from './context/CartContext'
import { UserContextProvider } from './context/UserContext'
import { Komponenta } from './reducer'

function App() {

  return (
    <>
      <UserContextProvider>
        <Komponenta />


        <h1>Context Shop</h1>

        <CartContextProvider>
          <Cart />
          <Products />
        </CartContextProvider>

      </UserContextProvider>
    </>
  )
}

export default App
