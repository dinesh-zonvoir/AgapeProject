import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ForgotPassword from './src/screens/forgotPass';
import ForgotPassConfirm from './src/screens/ForgotPassConfirm';
import FirstPage from './src/screens/FirstPage';
import OnBoarding from './src/screens/OnBoarding';
import MainContainer from './src/navigation/MainContainer';
import YourDrawerScreen from './src/navigation/YourDrawerScreen';


const Stack = createNativeStackNavigator();
  
  const App = () => {
    return (
      <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen name="OnBoarding" component={OnBoarding} options={{ headerShown: false}} />
          <Stack.Screen name="FirstPage" component={FirstPage} options={{ headerShown: false}} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false}} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false}} />
          <Stack.Screen name="ForgotPassConfirm" component={ForgotPassConfirm} options={{ headerShown: false}} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false}} />
          <Stack.Screen name="Drawer" component={YourDrawerScreen} options={{ headerShown: false}} />
          <Stack.Screen name="MainContainer" component={MainContainer} options={{ headerShown: false}} />
          </Stack.Navigator>
      </NavigationContainer>
    );
  }

  export default App;
