const itemGroup = [
    {
        id: 1,
        image: require('../images/1.jpg'),
        nameItem: 'Café 100% Colombiano',
        description: 'Café de grano entero, tostado oscuro y molido',
        price: 35000,
        discount: 20,
        category: 'Bebidas',
        ProductFeaturesItem: 'Café de origen colombiano, cultivado en la región cafetera. Sabor intenso y aroma cautivador. Ideal para preparar espresso, americano o cualquier bebida a base de café.',
        paymentMethods: ['Efectivo', 'Tarjeta de crédito', 'Transferencia bancaria'],
        comments: [
            '¡Excelente café! El sabor es increíble, lo recomiendo.',
            'Muy buen producto, pero me gustaría que el empaque fuera más grande.'
        ],
        rating: 5
    },
    {
        id: 2,
        image: require('../images/2.jpg'),
        nameItem: 'Arroz Blanco Grano Largo',
        description: 'Arroz de alta calidad',
        price: 18500,
        discount: 5,
        category: 'Alimentos',
        ProductFeaturesItem: 'Arroz blanco de grano largo, ideal para acompañar tus platos favoritos. Cocción rápida y textura suave. Fuente de energía natural.',
        paymentMethods: ['Efectivo', 'Tarjeta de crédito'],
        comments: [
            'El arroz tiene muy buena calidad y su cocción es rápida.',
            'El precio es justo, pero el paquete debería ser un poco más grande.',
            'Perfecto para acompañar cualquier comida, muy recomendable.'
        ],
        rating: 4
    },
    {
        id: 3,
        image: require('../images/3.jpg'),
        nameItem: 'Audífonos Inalámbricos',
        description: 'Sonido de alta fidelidad',
        price: 129900,
        category: 'Electrónica',
        ProductFeaturesItem: 'Audífonos inalámbricos con cancelación activa de ruido. Sonido envolvente y bajos profundos. Batería de larga duración. Perfectos para escuchar música y realizar llamadas.',
        paymentMethods: ['Efectivo', 'Tarjeta de crédito', 'PayPal'],
        comments: [
            'El sonido es excelente, pero la batería no dura tanto como esperaba.',
            'Cancelación de ruido impresionante, y son muy cómodos.'
        ],
        rating: 4
    },
    {
        id: 4,
        image: require('../images/4.jpg'),
        nameItem: 'Televisor Smart 4K',
        description: 'Experiencia visual superior',
        price: 1599900,
        discount: 35,
        category: 'Electrónica',
        ProductFeaturesItem: 'Televisor de 55 pulgadas con resolución 4K Ultra HD. Smart TV con acceso a tus aplicaciones favoritas y asistente de voz integrado. Disfruta de colores vibrantes y un contraste excepcional.',
        paymentMethods: ['Efectivo', 'Tarjeta de crédito', 'Transferencia bancaria', 'PayPal'],
        comments: [
            'La calidad de imagen es impresionante. ¡Me encanta!',
            'Buena calidad, pero a veces el sistema operativo es un poco lento.',
            'Es perfecto para ver películas en 4K, una experiencia inmersiva.'
        ],
        rating: 5
    },
    {
        id: 5,
        image: require('../images/5.jpg'),
        nameItem: 'Mouse Inalámbrico Ergonómico',
        description: 'Comodidad y precisión',
        price: 99900,
        discount: 30,
        category: 'Electrónica',
        ProductFeaturesItem: 'Mouse inalámbrico con diseño ergonómico para reducir la fatiga en la mano. Conexión Bluetooth y sensor de alta precisión. Ideal para trabajar y jugar.',
        paymentMethods: ['Efectivo', 'Tarjeta de crédito'],
        comments: [
            'Muy cómodo de usar, perfecto para largas sesiones de trabajo.',
            'Funciona muy bien, pero me gustaría que la batería durara más tiempo.'
        ],
        rating: 4
    },
    {
        id: 6,
        image: require('../images/6.jpg'),
        nameItem: 'Laptop Gamer',
        description: 'Potencia y rendimiento',
        price: 3299900,
        discount: 60,
        category: 'Electrónica',
        ProductFeaturesItem: 'Laptop gaming con procesador de última generación, tarjeta gráfica dedicada y pantalla de alta frecuencia de actualización. Disfruta de tus juegos favoritos con gráficos fluidos y sin retrasos.',
        paymentMethods: ['Efectivo', 'Tarjeta de crédito', 'Transferencia bancaria', 'PayPal'],
        comments: [
            'El rendimiento es increíble, puedo jugar cualquier juego sin problemas.',
            'Muy buena para juegos, pero se calienta un poco cuando se usa por mucho tiempo.'
        ],
        rating: 5
    },
    {
        id: 7,
        image: require('../images/7.jpg'),
        nameItem: 'Silla de Oficina Ergonómica',
        description: 'Comodidad y soporte',
        price: 899900,
        discount: 20,
        category: 'Muebles',
        ProductFeaturesItem: 'Silla de oficina ajustable en altura y respaldo, con reposabrazos acolchados. Diseñada para brindar comodidad y soporte durante largas jornadas de trabajo.',
        paymentMethods: ['Efectivo', 'Transferencia bancaria'],
        comments: [
            'Muy cómoda, perfecta para largas horas de trabajo.',
            'Buena silla, pero el montaje es algo complicado.'
        ],
        rating: 4
    },
    {
        id: 8,
        image: require('../images/8.jpg'),
        nameItem: 'Escritorio de Madera',
        description: 'Elegante y funcional',
        price: 699900,
        category: 'Muebles',
        ProductFeaturesItem: 'Escritorio de madera maciza con amplio espacio de trabajo. Diseño moderno y minimalista. Perfecto para cualquier espacio de trabajo.',
        paymentMethods: ['Efectivo', 'Tarjeta de crédito'],
        comments: [
            'Es un escritorio muy elegante y resistente. Me encanta el diseño.',
            'El tamaño es ideal y tiene mucho espacio para trabajar cómodamente.'
        ],
        rating: 4
    }
];

export default itemGroup;
