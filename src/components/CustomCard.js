import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { MyColor } from '../assets/colors';
const CustomCard = ({ title,subTitle, bgColor, imageSource }) => {
    
  return (
    <View style={{
        width: 150,
        height: 150,
        marginRight:8,
        backgroundColor:bgColor,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
        }}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 75,
  },
  title: {
    marginTop: 4,
    fontSize: 16,
    color:MyColor.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitle: {
    marginTop: 4,
    fontSize: 14,
    color:MyColor.white,
    color:MyColor.white,
    textAlign: 'center',
  },
});

export default CustomCard;
