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
import Icon from 'react-native-ionicons';
import { MyColor } from '../assets/colors';


const LoginScreen = ({ navigation }) => {
 
  const onPressLogin = () => {
    navigation.navigate("Drawer")
    // navigation.navigate("MainContainer")
    
  };
  const onPressForgotPassword = () => {
    navigation.navigate("ForgotPassword")
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
      {/* <StatusBar backgroundColor="#E4E4E4"/> */}
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
          <View style={styles.loginBjbj}>
            <Text style={styles.title}>Login</Text>

          </View>

          <View style={styles.sectionStyle}>
        
            <TextInput
              style={styles.inputText}
              placeholder="Email"
              placeholderTextColor="#D3D3D3"
            // onChangeText={text => setState({email:text})}
            />
          </View>

          <View style={styles.sectionStyle}>
            {/* <Image
              source={{
                uri:
                  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/input_username.png',
              }}
              style={styles.imageStyle}
            /> */}
            <TextInput
              style={styles.inputText}
              placeholder="Password"
              placeholderTextColor="#D3D3D3"
            // onChangeText={text => setState({email:text})}
            />
          </View>

          <View style={styles.forgotPasswordContainer}>
            <TouchableOpacity onPress={onPressForgotPassword}>
              <Text style={styles.forgotAndSignUpText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
            <Text style={{ fontSize: 18, color: 'white' }}>Login</Text>
          </TouchableOpacity>

          <View>
            <Text style={styles.text}>
              Don't have an account?{' '}
              <Text style={styles.signupText} onPress={onPressSignUp}>Signup</Text>
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
  loginBjbj: {
    alignItems: 'flex-start',
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    marginLeft: 20,
    color: "#3E3E3E",
    marginBottom: 20,
    marginTop: 20,
  },
  sectionStyle: {
    height: 50,
    width: "90%",
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    borderColor: '#E4E4E4',
    borderWidth: 1,
    alignItems: 'center',
    marginTop: 20,
    padding: 20
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
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
    flex: 1,
    height: 50,
    color: "#3E3E3E"
  },
  icon: {
    marginLeft: 8,
    fontSize: 24,
    color: 'gray',
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    width: "100%",
  },
  forgotAndSignUpText: {
    color: '#C60000',
    marginRight: 20,
    fontSize: 12,
    padding: 5,
    textAlign: 'left',
  },

  loginBtn: {
    width: "90%",
    backgroundColor: "#C60000",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
    marginBottom: 10
  },
  text: {
    fontSize: 14,
    color: MyColor.grey,
    marginBottom: 40
  },
  signupText: {
    color: '#C60000',
    fontWeight: "bold",
    textDecorationLine: 'underline',
  },

});
export default LoginScreen;