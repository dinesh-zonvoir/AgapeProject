import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const CustomToolbar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image source={require('../assets/images/Group.png')} style={styles.logo} />
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={require('../assets/images/Notification.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={require('../assets/images/chat.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 65,
    backgroundColor: '#f2f2f2',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  leftContainer: {
    paddingLeft: 16,
  },
  logo: {
    width: 124,
    height: 32,
    resizeMode: 'contain',
  },
  rightContainer: {
    flexDirection: 'row',
    paddingRight: 16,
  },
  iconButton: {
    marginLeft: 16,
  },
  icon: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
});

export default CustomToolbar;
