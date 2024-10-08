import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './UI/Login';
import UserRegistration from './UI/UserRegistration';
import ItemList from './UI/ItemList';
import ItemDetails from './UI/ItemDetails';
import Offers from './UI/Offers';
import Category from './UI/Category';
import Help from './UI/Help';
import UserProfile from './UI/UserProfile';
import ShoppingCar from './UI/ShoppingCar';
import PaymentBranch from './UI/PaymentBranch';
import Favorites from './UI/Favorites';
import { CartProvider } from './hook/CartContext';
import MyPurchases from './UI/MyPurchases';

const Stack = createNativeStackNavigator();

function App() {
  return (
      <CartProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name={"Login"} component={Login} options={{ title: 'Bienvenido' }}/>
            <Stack.Screen name={"UserRegistration"} component={UserRegistration} options={{ title: 'Registro de Usuario' }}/>
            <Stack.Screen name={"ItemList"} component={ItemList} options={{ title: 'Lista de Articulos' }}/>
            <Stack.Screen name={"ItemDetails"} component={ItemDetails} options={{ title: 'Detalles de Articulos' }}/>
            <Stack.Screen name={"Help"} component={Help} options={{ title: 'Ayudas' }}/>
            <Stack.Screen name={"Category"} component={Category} options={{ title: 'Category' }}/>
            <Stack.Screen name={"Offers"} component={Offers} options={{ title: 'Ofertas' }}/>
            <Stack.Screen name={"UserProfile"} component={UserProfile} options={{ title: 'Perfil de Usuario' }}/>
            <Stack.Screen name={"Favorites"} component={Favorites} options={{ title: 'Favoritos'}}/>
            <Stack.Screen name={"ShoppingCar"} component={ShoppingCar} options={{ title: 'Carrito de Compras'}}/>
            <Stack.Screen name={"PaymentBranch"} component={PaymentBranch} options={{ title: 'Sucursal de Pago'}}/>
            <Stack.Screen name={"MyPurchases"} component={MyPurchases} options={{ title: 'Mis Compras'}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </CartProvider>
  );
}

export default App;
