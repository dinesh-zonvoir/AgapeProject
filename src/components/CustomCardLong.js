import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { MyColor } from '../assets/colors';
const CustomCardLong = ({ title,subTitle, bgColor, imageSource,address,distance }) => {
    
  return (
    <View style={{
        width: 300,
        marginRight:8,
        backgroundColor:bgColor,
        borderRadius: 16,
        padding: 10
        }}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
      <View style={styles.card}>
    
        <View style={styles.subCard}>
        <Text style={styles.textStyle}>{address}</Text>
        </View>

        <View style={styles.subCard}>
        <Text style={styles.textStyle}>{distance}</Text>
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
    padding:8,
    marginRight:8,
    marginLeft:8,
    marginBottom:8,
    flex:1,
    borderRadius:20,
    backgroundColor:MyColor.grey_light,
    justifyContent:'center',
    left:0,
    right:0,
    top:0,
    bottom:0
  },
  textStyle:{
    color:MyColor.white,
    textAlign:'center',
    fontSize:10,
    width:'100%'
  }
});

export default CustomCardLong;
