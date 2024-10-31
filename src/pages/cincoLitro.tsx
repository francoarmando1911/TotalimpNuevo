import React from 'react';
import Header from '../components/Header';
import Product from '../components/Products';
import { useCart } from '../hooks/useCart';

const CincoLitros: React.FC = () => {
    const { cart, addToCart, removeFromCart, decreaseQuantity, increaseQuantity, clearCart, isEmpty, cartTotal, data } = useCart('cincoLitros');

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
                showCart={true}
                isCondimentosPage={false}  
            />

            <main className="container-xl mt-5">
                <h2 className="text-center">Nuestros Productos de 5 Litros</h2>
                <hr />

                <div className="row mt-5">
                    {Array.isArray(data) && data.length > 0 ? (
                        data.map((product) => (
                            <Product
                                key={product.id}
                                product={product}
                                addToCart={addToCart}
                            />
                        ))
                    ) : (
                        <p className="text-center">No hay productos disponibles.</p>
                    )}
                </div>
            </main>

            <footer className="bg-dark mt-5 py-5">
                <div className="container-xl">
                    <p className="text-white text-center fs-4 mt-4 m-md-0">TOTALIMP - (3442) 310036 - Concepción del Uruguay</p>
                </div>
            </footer>
        </>
    );
};

export default CincoLitros;
