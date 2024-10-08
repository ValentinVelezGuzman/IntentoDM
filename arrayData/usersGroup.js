const usersGroup = [
    {
        id: 1,
        image: require('../images/imgUsers/u1.png'),
        nameUser: 'Usuario Primero',
        age: 21,
        user: 'user1',
        password: 'User#1',
        myPurchases: [
            {
                itemId: 1,
                quantity: 2,
                status: 'Entregado',
            },
            {
                itemId: 3,
                quantity: 1,
                status: 'En tránsito',
            }
        ],
        isLoggedIn: true,
        favorites: [6, 7, 8],
    },
    {
        id: 2,
        image: require('../images/imgUsers/u1.png'),
        nameUser: 'Camilo Gutierrez',
        age: 19,
        user: 'user2',
        password: 'User#2',
        myPurchases: [
            {
                itemId: 2,
                quantity: 3,
                status: 'Entregado',
            },
            {
                itemId: 4,
                quantity: 1,
                status: 'Cancelado', 
            }
        ],
        isLoggedIn: false,
        favorites: [6, 7, 8],
    },
    {
        id: 3,
        image: require('../images/imgUsers/u1.png'),
        nameUser: 'Marta Mendoza',
        age: 40,
        user: 'user3',
        password: 'User@3',
        myPurchases: [
            {
                itemId: 5,
                quantity: 1,
                status: 'En tránsito', 
            },
            {
                itemId: 6,
                quantity: 1,
                status: 'Entregado', 
            }
        ],
        isLoggedIn: false,
        favorites: [6, 7, 8],
    },
];

export default usersGroup;
