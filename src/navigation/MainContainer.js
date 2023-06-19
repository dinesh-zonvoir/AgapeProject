import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import DetailsScreen from './src/screen/DetailsScreen';
import HomeScreen from './screen/HomeScreen';
import DetailsScreen from './screen/DetailsScreen';
import ProfileScreen from './screen/ProfileScreen';
import ActOfKindNessScreen from './screen/ActOfKindNessScreen';
import NomineteGiverScreen from './screen/NomineteGiverScreen';
const Tab=createBottomTabNavigator()
const MainContainer = () => {
  return ( 
    
    <Tab.Navigator
    // screenOptions={({ route }) => ({
    //   tabBarIcon: ({ focused, color, size }) => {
    //     let iconName;

    //     if (route.name === 'Home') {
    //       iconName = focused
    //         ? 'home'
    //         : 'home';
    //     } else if (route.name === 'Profile') {
    //       iconName = focused ? 'profile' : 'profile';
    //     }
    //     else if (route.name === 'Details') {
    //       iconName = focused ? 'setting' : 'setting';
    //     }

    //     // You can return any component that you like here!
    //     return <Ionicons name={iconName} size={size} color={color} />;
    //   },
    //   tabBarActiveTintColor: 'tomato',
    //   tabBarInactiveTintColor: 'gray',
    // })}
  >
      
<Tab.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
<Tab.Screen name='ActivityKindness' component={ActOfKindNessScreen}/>
<Tab.Screen name='NominiGiver' component={NomineteGiverScreen}/>
<Tab.Screen name='Details' component={DetailsScreen}/>
<Tab.Screen name='Profile' component={ProfileScreen}/>


        </Tab.Navigator>
    
    
  );
};

export default MainContainer;
