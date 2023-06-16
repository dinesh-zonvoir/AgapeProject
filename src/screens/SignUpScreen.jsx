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
  
  import {MyColor} from '../assets/colors'
  
  
  const SignUpScreen = ({navigation}) => {
    const onPressLogin = () => {
     navigation.navigate("LoginScreen")
    };
    const onPressForgotPassword = () => {
      // Do something about forgot password operation
    };
    const onPressSignUp = () => {
      navigation.navigate("ForgotPassword")
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
            <View style={styles.loginBjbj}>
              <Text style={styles.title}>Sign Up</Text>
            </View>
  
  
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="Email"
                placeholderTextColor="#D3D3D3"
              // onChangeText={text => setState({email:text})}
              />
              {/* <MaterialIcons name="person" style={styles.icon} /> */}
            </View>
  
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                secureTextEntry
                placeholder="Full Name"
                placeholderTextColor="#D3D3D3"
              // onChangeText={text => setState({password:text})}
              />
            </View>

            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="Password"
                placeholderTextColor="#D3D3D3"
              // onChangeText={text => setState({email:text})}
              />
              {/* <MaterialIcons name="person" style={styles.icon} /> */}
            </View>
  
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                secureTextEntry
                placeholder="Confirm Password"
                placeholderTextColor="#D3D3D3"
              // onChangeText={text => setState({password:text})}
              />
            </View>
            <Text style={{marginTop:20,marginHorizontal:20}}>Must be at least 8 characters, and contain at{"\n"}least one number and one special character</Text>
            <Text style={{marginTop:20,marginHorizontal:20}}>Password meets all requirements</Text>
            <TouchableOpacity onPress={onPressSignUp} style={styles.loginBtn}>
              <Text style={{ fontSize: 18, color: 'white' }}>Sign Up</Text>
            </TouchableOpacity>
  
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
      marginTop: 80,
      marginBottom: 10
    },
    text: {
      fontSize: 14,
      color: MyColor.grey,
      marginBottom:40
    },
    signupText: {
      color: '#C60000',
      fontWeight: "bold",
      textDecorationLine: 'underline',
    },
  });
  export default SignUpScreen;