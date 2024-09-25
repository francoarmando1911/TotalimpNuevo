import React from 'react';
import Header from '../components/Header';
import Product from '../components/Products';
import { useCart } from '../hooks/useCart';
import { dosLitros } from '../data/dosLitros';

const DosLitros: React.FC = () => {
    const { cart, addToCart, removeFromCart, decreaseQuantity, increaseQuantity, clearCart, isEmpty, cartTotal } = useCart('dosLitros');
    const products = dosLitros; // No necesitas setProducts si solo usas los datos directamente

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
                isCondimentosPage={false}  // Agrega esta línea
            />

            <main className="container-xl mt-5">
                <h2 className="text-center">Nuestros Productos de 2 Litros</h2>
                <hr />

                <div className="row mt-5">
                    {Array.isArray(products) && products.length > 0 ? (
                        products.map((product) => (
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

export default DosLitros;

