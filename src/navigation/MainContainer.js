import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import DetailsScreen from './src/screen/DetailsScreen';
import HomeScreen from './screen/HomeScreen';
import ProfileScreen from './screen/ProfileScreen';
import ActOfKindNessScreen from './screen/ActsScreen';
const Tab=createBottomTabNavigator()
const MainContainer = () => {
  return ( 
    
    <Tab.Navigator>
<Tab.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
<Tab.Screen name='ActivityKindness' component={ActOfKindNessScreen}/>
<Tab.Screen name='NominiGiver' component={NomineteGiverScreen}/>
<Tab.Screen name='Profile' component={ProfileScreen}/>
        </Tab.Navigator>
    
    
  );
};

export default MainContainer;
