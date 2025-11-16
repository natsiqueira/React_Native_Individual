import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Home } from '../pages/Home/index';
import { Library } from '../pages/Library/index';
import { Login } from '../pages/Login/index';
import { Search } from '../pages/Search/index';

export type AuthStackParamList = {
  Login: undefined;
  TabRoutes: undefined; 
};
export type TabStackParamList = {
  HomeStack: undefined;
  SearchStack: undefined;
  LibraryStack: undefined;
};
export type RootStackParamList = AuthStackParamList & TabStackParamList;

const Stack = createNativeStackNavigator<AuthStackParamList>();
const Tab = createBottomTabNavigator<TabStackParamList>();


const TabRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FFF', 
        tabBarInactiveTintColor: '#B3B3B3', 
        tabBarStyle: {
          backgroundColor: '#000', 
          borderTopColor: '#1E1E1E', 
          height: 85, 
          paddingBottom: 10, 
        },
        tabBarLabelStyle: {
          fontSize: 12, 
          fontWeight: 'bold',
        }
      }}
    >
      <Tab.Screen 
        name="HomeStack" 
        component={Home}
        options={{
          title: 'Início',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="SearchStack" 
        component={Search}
        options={{
          title: 'Buscar',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="LibraryStack" 
        component={Library}
        options={{
          title: 'Sua Biblioteca',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="library" color={color} size={size} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}

export const AppRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      
      <Stack.Screen name="Login" component={Login} />

      <Stack.Screen name="TabRoutes" component={TabRoutes} />
      
    </Stack.Navigator>
  );
};