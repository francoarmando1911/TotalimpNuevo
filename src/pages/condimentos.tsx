import React from 'react';
import Product from '../components/Products';
import { useCart } from '../hooks/useCart';
import { Product as ProductType } from '../types/index';

const Condimentos: React.FC = () => {
    const { data, addToCart } = useCart('condimentos');

    return (
        <main className="container-xl mt-5">
            <h2 className="text-center">Condimentos</h2>
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
    );
};

export default Condimentos;
