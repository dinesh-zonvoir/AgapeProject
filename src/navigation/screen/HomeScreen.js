import React from 'react';
import { StatusBar,Button,View, Text,ScrollView, StyleSheet } from 'react-native';
import CustomToolbar from '../../components/CustomToolbar';
import CustomFlatList from '../../components/CustomFlatList';

const HomeScreen = ({navigation }) => {
  const data = [
    { id: 1, image: require('../../assets/images/Layer_1.png'), label: 'Lavel 1' },
    { id: 2, image: require('../../assets/images/Layer_2.png'), label: 'Lavel 2' },
    { id: 3, image: require('../../assets/images/Layer_3.png'), label: 'Lavel 3' },
    { id: 3, image: require('../../assets/images/Layer_4.png'), label: 'Lavel 4' },
    { id: 3, image: require('../../assets/images/Layer_5.png'), label: 'Lavel 5' },
    // Add more items as needed
  ];
  const data1 = [
    { id: 1, image: require('../../assets/images/Job_1.png'), label: 'Lavel 1' },
    { id: 2, image: require('../../assets/images/Job_2.png'), label: 'Lavel 2' },
    { id: 3, image: require('../../assets/images/Job_3.png'), label: 'Lavel 3' },
    // Add more items as needed
  ];
  const handleItemClick = (item) => {
    // Handle item click here
    navigation.navigate('Details');
    console.log('Item clicked:', item);
  };
  const handleItemClickData1 = (item) => {
    // Handle item click here
    console.log('Item clicked:', item);
  };


  return (
    <View style={styles.container}>

       <CustomToolbar />
       <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.flatcontainer1}>
      <Text style={styles.title}>Latest Achievements</Text>
      <CustomFlatList data={data} onItemClick={handleItemClick}/>
    </View>
    <View style={styles.flatcontainer2}>
      <Text style={styles.title}>Recent Acts of Kindness</Text>
      <CustomFlatList data={data1} onItemClick={handleItemClickData1}/>
    </View>
    <View style={styles.flatcontainer3}>
      <Text style={styles.title}>Recent Tokens Awarded</Text>
      <CustomFlatList data={data1} onItemClick={handleItemClickData1}/>
    </View>

    <View style={styles.flatcontaine4}>
      <Text style={styles.title}>Recent Badges Awarded</Text>
      <CustomFlatList data={data1} onItemClick={handleItemClickData1}/>
    </View>
    </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flatcontainer1: {
    marginLeft:12,
    backgroundColor: '#fff',
  },
  flatcontainer2: {
    marginLeft:12,
    backgroundColor: '#fff',
  },
  flatcontainer3: {
    marginLeft:12,
    backgroundColor: '#fff',
  },
  flatcontainer4: {
    marginLeft:12,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    marginTop:12,
    marginLeft:12
  },
  subtitle: {
    fontSize: 18,
    color: '#888',
  },
});
export default HomeScreen;
