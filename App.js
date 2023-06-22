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
import NominateaGiver from './src/screens/NominateaGiver';
import AppliedOpportunities from './src/screens/AppliedOpportunities';
import Opportunity from './src/screens/Opportunity';
import Account from './src/screens/Account';
import Settings from './src/screens/Settings';
import TopGivers from './src/screens/TopGivers';
import TopBadges from './src/screens/TopBadges';
import Help from './src/screens/Help';
import Activity from './src/screens/Activity';
import FriendRequests from './src/screens/FriendRequeste';
import Notifications from './src/screens/Notification';
import Oppertunities from './src/screens/Opportunities';
import Friends from './src/screens/Friends';
import Message from './src/screens/Message';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="OnBoarding" component={OnBoarding} options={{ headerShown: false }} />
        <Stack.Screen name="FirstPage" component={FirstPage} options={{ headerShown: false }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassConfirm" component={ForgotPassConfirm} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
        <Stack.Screen name="MainContainer" component={MainContainer} options={{ headerShown: false }} />
        <Stack.Screen name="Drawer" component={YourDrawerScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AppliedOpportunities" component={AppliedOpportunities} options={{ headerShown: false }} />
        <Stack.Screen name="Message" component={Message} options={{ headerShown: false }} />
        <Stack.Screen name="Friends" component={Friends} options={{ headerShown: false }} />
        <Stack.Screen name="Oppertunities" component={Oppertunities} options={{ headerShown: false }} />
        <Stack.Screen name="Notifications" component={Notifications} options={{ headerShown: false }} />
        <Stack.Screen name="FriendRequests" component={FriendRequests} options={{ headerShown: false }} />
        <Stack.Screen name="Activity" component={Activity} options={{ headerShown: false }} />
        <Stack.Screen name="Help" component={Help} options={{ headerShown: false }} />
        <Stack.Screen name="TopBadges" component={TopBadges} options={{ headerShown: false }} />
        <Stack.Screen name="TopGivers" component={TopGivers} options={{ headerShown: false }} />
        <Stack.Screen name="Account" component={Account} options={{ headerShown: false }} />
        <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
        <Stack.Screen name="Opportunity" component={Opportunity} options={{ headerShown: false }} />
        <Stack.Screen name="NominateaGiver" component={NominateaGiver} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
