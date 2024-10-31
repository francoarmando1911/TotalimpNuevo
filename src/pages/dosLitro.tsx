import React from 'react';
import Header from '../components/Header';
import Product from '../components/Products';
import { useCart } from '../hooks/useCart';
import { Product as ProductType } from '../types/index';

const DosLitros: React.FC = () => {
    
    const { data, cart, addToCart, removeFromCart, decreaseQuantity, increaseQuantity, clearCart, isEmpty, cartTotal } = useCart('dosLitros');

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
                <h2 className="text-center">Nuestros Productos de 2 Litros</h2>
                <hr />

                <div className="row mt-5">
                    {Array.isArray(data) && data.length > 0 ? (
                        data.map((product: ProductType) => (
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
