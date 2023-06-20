import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { MyColor } from '../assets/colors';
const CustomCardLong = ({ title,subTitle, bgColor, imageSource }) => {
    
  return (
    <View style={{
        width: 300,
        height: 150,
        marginRight:8,
        backgroundColor:bgColor,
        borderRadius: 16,
        padding: 10
        }}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
      <View style={styles.card}>
        <View>

        </View>
        <View style={styles.subCard}>

        </View>

        <View style={styles.subCard}>

        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius:20
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 75,
  },
  title: {
    marginTop: 4,
    marginLeft:12,
    fontSize: 16,
    color:MyColor.white,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  subTitle: {
    marginTop: 4,
    marginLeft:12,
    fontSize: 14,
    color:MyColor.white,
    color:MyColor.white,
    textAlign: 'left',
  },
  card:{
    marginTop:10,
    flexDirection:'row'
  },
  subCard:{
    marginRight:10,
    flex:1,
    width:100,
    height:48,
    borderRadius:20,
    backgroundColor:MyColor.grey_light
  }
});

export default CustomCardLong;
