import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// Importa tus componentes
import ItemList from './ItemList';
import Category from './Category';
import Offers from './Offers';
import UserProfile from './UserProfile';
import Help from './Help';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === 'ItemList') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Category') {
            iconName = focused ? 'apps' : 'apps-outline';
          } else if (route.name === 'Offers') {
            iconName = focused ? 'pricetag' : 'pricetag-outline';
          } else if (route.name === 'UserProfile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Help') {
            iconName = focused ? 'help' : 'help-outline';
          }

          return <Icon name={iconName} size={20} color={color} />;
        },
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#c4c4c4',
        tabBarStyle: {
          backgroundColor: '#0c9942',
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarScrollEnabled: true, // Permite que la barra de navegación sea deslizable
        tabBarIndicatorStyle: {
          backgroundColor: '#ffffff',
        },
        tabBarShowIcon: true,
      })}
    >
      <Tab.Screen name="ItemList" component={ItemList} options={{ title: 'Artículos' }} />
      <Tab.Screen name="Category" component={Category} options={{ title: 'Categorías' }} />
      <Tab.Screen name="Offers" component={Offers} options={{ title: 'Ofertas' }} />
      <Tab.Screen name="UserProfile" component={UserProfile} options={{ title: 'Perfil' }} />
      <Tab.Screen name="Help" component={Help} options={{ title: 'Ayuda' }} />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
