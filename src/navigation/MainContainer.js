import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import DetailsScreen from './src/screen/DetailsScreen';
import HomeScreen from './screen/HomeScreen';
import DetailsScreen from './screen/DetailsScreen';
import ProfileScreen from './screen/ProfileScreen';
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
<Tab.Screen name='Profile' component={ProfileScreen}/>
<Tab.Screen name='Details' component={DetailsScreen}/>

        </Tab.Navigator>
      //  {/* <Stack.Navigator initialRouteName="Home">
      //   <Stack.Screen name="Home" component={HomeScreen} />
      //   <Stack.Screen name="Details" component={DetailsScreen} />
      // </Stack.Navigator> */}
    
  );
};

export default MainContainer;
