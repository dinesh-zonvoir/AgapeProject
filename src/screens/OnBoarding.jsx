import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    Button,
    ImageBackground,
  } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
    {
      key: 's1',
      text: 'Best Recharge offers',
      title: 'Mobile Recharge',
      image: require('../assets/img1.png'),
  
    },
    {
      key: 's2',
      title: 'Flight Booking',
      text: 'Upto 25% off on Domestic Flights',
      image: require('../assets/img2.png'),
     
    },
    {
      key: 's3',
      title: 'Great Offers',
      text: 'Enjoy Great offers on our all services',
      image: require('../assets/img3.png'),
    
    },
    {
      key: 's4',
      title: 'Best Deals',
      text: ' Best Deals on all our services',
      image: require('../assets/img4.png'),
     
    },
    {
      key: 's5',
      title: 'Bus Booking',
      text: 'Enjoy Travelling on Bus with flat 100% off',
      image: require('../assets/img5.png'),
    
    },
    {
      key: 's6',
      title: 'Bus Booking',
      text: 'Enjoy Travelling on Bus with flat 100% off',
      image: require('../assets/img5.png'),
    
    },
    {
      key: 's7',
      title: 'Train Booking',
      text: ' 10% off on first Train booking',
      image: require('../assets/img6.png'),
      
    },
  ];

const OnBoarding = ({navigation}) => {

    const onDone = () => {
    navigation.navigate("FirstPage")
    };
    const onSkip = () => {
navigation.navigate("FirstPage")
    };
  
    const RenderItem = ({ item }) => {
      return (
        <View
          style={{
            flex: 1,
          }}>
          <ImageBackground source={item.image} style={{ height: '100%' }} />
          <Text style={styles.introTitleStyle}>
            {item.title}
          </Text>
          {/* <Image
            style={{}}
            source={item.image} /> */}
          {/* <Text style={{textAlign:'center'}}>
            {item.text}
          </Text> */}
        </View>
      );
    };
  
    return (
      <>
          <AppIntroSlider
            data={slides}
            renderItem={RenderItem}
            onDone={onDone}
            showSkipButton={true}
            onSkip={onSkip}
          />
        
      </>
    );
}

export default OnBoarding;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      padding: 10,
      justifyContent: 'center',
    },
    titleStyle: {
      padding: 10,
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
    },
    paragraphStyle: {
      padding: 20,
      textAlign: 'center',
      fontSize: 16,
    },
    introImageStyle: {
      width: 70,
      height: 70,
    },
    introTextStyle: {
      fontSize: 18,
      color: 'green',
      textAlign: 'center',
      paddingVertical: 30,
    },
    introTitleStyle: {
      fontSize: 25,
      color: 'green',
      textAlign: 'center',
      marginBottom: 16,
      fontWeight: 'bold',
    },
  });