import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import { MyColor } from '../assets/colors'


const ForgotPassword = ({navigation}) => {
  const onPressLogin = () => {
    navigation.navigate("LoginScreen")
  };
  const onResetPass = () => {
    navigation.navigate("ForgotPassConfirm")
  };
  const onPressSignUp = () => {
    navigation.navigate("SignUpScreen")
  };
  const [state, setState] = useState({
    email: '',
    password: '',
  })
  return (
    <ScrollView>
      <View style={{ flex: 1, }}>

        <View style={styles.imageView}>
          <Image style={styles.image} source={require('../assets/logo.png')} />
          <Image source={require('../assets/name_img.png')} />
        </View>

        <View style={{
          flex: 1, backgroundColor: '#F5F7F9', alignItems: 'center',
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15
        }}>
          <Text style={styles.text1}>Enter the email address associated with your{"\n"}account and we will send a link to reset your{"\n"}password.</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Email Address"
              placeholderTextColor="#D3D3D3"
            // onChangeText={text => setState({email:text})}
            />
            {/* <MaterialIcons name="person" style={styles.icon} /> */}
          </View>
          <TouchableOpacity onPress={onResetPass} style={styles.loginBtn}>
            <Text style={{ fontSize: 18, color: 'white' }}>Reset Password</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.text}>
              Don’t have an account?{' '}
              <Text style={styles.signupText} onPress={onPressSignUp}>Sign Up</Text>
            </Text>
          </View>
          <View>
            <Text style={styles.text}>
              Already have an account?{' '}
              <Text style={styles.signupText} onPress={onPressLogin}>Login</Text>
            </Text>
          </View>
        </View>

      </View>
    </ScrollView>

  );
}
const styles = StyleSheet.create({
  imageView: {
    height: 200,
    width: "100%",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    height: 80,
    width: 90,
    marginBottom: 10
  },

  inputView: {
    height: 50,
    width: "90%",
    backgroundColor: 'white',
    borderRadius: 25,
    borderColor: '#E4E4E4',
    borderWidth: 1,
    marginTop: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "#3E3E3E"
  },
  icon: {
    marginLeft: 8,
    fontSize: 24,
    color: 'gray',
  },
  loginBtn: {
    width: "90%",
    backgroundColor: "#C60000",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10
  },
  text: {
    fontSize: 14,
    color: MyColor.grey,
    marginBottom: 5
  },
  signupText: {
    color: '#C60000',
    fontWeight: "bold",
    textDecorationLine: 'underline',
  },
  text1:{
    marginBottom:5,
    marginTop:80,
    marginHorizontal:20
  }
});
export default ForgotPassword;