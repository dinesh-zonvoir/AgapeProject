import React, { useState } from 'react';
import { FAB } from 'react-native-elements';
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



const FirstPage = ({ navigation }) => {
  const clickHandler = () => {
    //function to handle click on floating Action Button
    alert('Floating Button Clicked');
  };
  const onPressLogin = () => {
    navigation.navigate("LoginScreen")
  };
  const onPressForgotPassword = () => {
    // Do something about forgot password operation
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
      <StatusBar backgroundColor="#C60000"/>
      <View style={{ flex: 1, }}>

        <View style={styles.imageView}>
          <Image style={styles.image} source={require('../assets/logowithname.png')} />

        </View>

        <View style={{ flex: 1, alignItems: 'center', }}>
          <Text style={styles.text1}>Congratulate those who do{"\n"}positive deeds</Text>
          <Text style={styles.text2}>Applaud, Explore & Share with your friends</Text>

          <View style={styles.flotView}>
            <TouchableOpacity
              style={styles.cardBg}
              onPress={() => { alert('Button is pressed') }}
            >
             
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardBg}
              onPress={() => { alert('Button is pressed') }}
            >
              <Text style={{ color: "white" }}>ing</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardBg}
            
              onPress={() => { alert('Button is pressed') }}
            >
              <Text style={{ color: "white" }}>ing</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
            <Text style={{ fontSize: 18, color: 'white' }}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressSignUp} style={styles.loginBtn}>
            <Text style={{ fontSize: 18, color: 'white' }}>Create Account</Text>
          </TouchableOpacity>

        </View>

      </View>
    </ScrollView>

  );
}
const styles = StyleSheet.create({
  imageView: {
    height: 210,
    width: "100%",
    backgroundColor: '#C60000',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    height: 150,
    width: 180,
    marginBottom: 10,
    marginTop: 10
  },
  cardBg: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 53,
    marginHorizontal: 5,
    height: 53,
    backgroundColor: 'grey',
    borderRadius: 100,
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
  flotView: {
    marginVertical: 50,
    flexDirection: 'row'
  },
  touchableOpacityStyle: {
    width: 50,
    height: 50,
    marginLeft: 10,

  },
  floatingButtonStyle: {
    width: 50,
    height: 50
  },
  loginBtn: {
    width: "90%",
    backgroundColor: "#C60000",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20
  },

  text1: {
    marginBottom: 5,
    marginTop: 80,
    color: '#3E3E3E',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 500,
    alignItems: 'center',
    marginHorizontal: 20
  },
  text2: {
    marginHorizontal: 20,
    fontSize: 16,
    fontWeight: 400,
    color: '#9E9E9E'
  }

});
export default FirstPage;