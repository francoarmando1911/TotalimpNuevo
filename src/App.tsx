import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Categories from './components/Categories';
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import { useCart } from './hooks/useCart';

interface AppProps { }

const App: React.FC<AppProps> = () => {
  const location = useLocation();

  // Determina el tipo basado en la ruta
  let type = '';
  if (location.pathname === '/unLitro') {
    type = 'unLitro';
  } else if (location.pathname === '/dosLitro') {
    type = 'dosLitro';
  } else if (location.pathname === '/cincoLitros') {
    type = 'cincoLitros';
  }

  const { cart, removeFromCart, decreaseQuantity, increaseQuantity, clearCart, isEmpty, cartTotal } = useCart(type);
  const isCondimentosPage = true;

  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
        showCart={true} // Siempre mostrar el carrito
        isCondimentosPage={isCondimentosPage}
      />

      <main className="container-xl mt-5">
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route path="/unLitro" element={<ProductsList type="unLitro" />} />
          <Route path="/dosLitro" element={<ProductsList type="dosLitro" />} />
          <Route path="/cincoLitros" element={<ProductsList type="cincoLitros" />} /> {/* Corrige aquí */}
        </Routes>

      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">TOTALIMP - (3442) 310036 - Concepción del Uruguay</p>
        </div>
      </footer>
    </>
  );
};

export default App;
