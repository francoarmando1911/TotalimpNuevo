import type { Product } from "../types";

export const dosLitros: Product[] = [
    {
        id: 19,
        name: 'Costo envase de 5 litros',
        image: '/public/magistral',
        description: 'Puede cambiarlo limpio y con tapa',
        price: 1900,
    },
    {
        id: 1,
        name: 'Jabon liquido',
        image: 'deterAmarillo',
        description: '(Por 5 litros sin envase) (Especificar cual en mensaje) - ARIEL, SKIP, ALA ROJO',
        price: 3300,
    },
    {
        id: 2,
        name: 'Jabon liquido premium',
        image: 'premium',
        description: '(Por 5 litros sin envase) (Especificar cual en mensaje) - ARIEL, SKIP',
        price: 4400,
    },
    {
        id: 3,
        name: 'Jabon liquido lavado de manos',
        image: 'jpManos',
        description: '(Por 5 litros sin envase)',
        price: 3300,
    }
]