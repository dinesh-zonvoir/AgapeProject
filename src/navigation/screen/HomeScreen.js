import React from 'react';
import { StatusBar, Button, View, Text, ScrollView, StyleSheet, FlatList,TouchableOpacity } from 'react-native';
import CustomToolbar from '../../components/CustomToolbar';
import CustomFlatList from '../../components/CustomFlatList';
import { MyColor } from '../../assets/colors';
import CustomCard from '../../components/CustomCard';
import CustomCardLong from '../../components/CustomCardLong';

const HomeScreen = ({ navigation }) => {
  const data = [
    { id: 1, image: require('../../assets/images/Layer_1.png'), label: 'Lavel 1' },
    { id: 2, image: require('../../assets/images/Layer_2.png'), label: 'Lavel 2' },
    { id: 3, image: require('../../assets/images/Layer_3.png'), label: 'Lavel 3' },
    { id: 4, image: require('../../assets/images/Layer_4.png'), label: 'Lavel 4' },
    { id: 4, image: require('../../assets/images/Layer_4.png'), label: 'Lavel 4' },
    // Add more items as needed
  ];
  const data1 = [
    { id: 1, image: require('../../assets/images/Job_1.png'), title: 'Dinesh kumar', subTitle: 'Android developer' },
    { id: 1, image: require('../../assets/images/Job_1.png'), title: 'Dinesh kumar', subTitle: 'Android developer' },
    { id: 1, image: require('../../assets/images/Job_1.png'), title: 'Dinesh kumar', subTitle: 'Android developer' },
    { id: 1, image: require('../../assets/images/Job_1.png'), title: 'Dinesh kumar', subTitle: 'Android developer' },
    { id: 1, image: require('../../assets/images/Job_1.png'), title: 'Dinesh kumar', subTitle: 'Android developer' },
    // Add more items as needed

  ];
  const data_acts_kindness = [
    { id: 1, image: require('../../assets/images/whtopd.png'), title: 'Dinesh kumar', subTitle: 'Android developer' ,color:MyColor.redYello},
    { id: 2, image: require('../../assets/images/whtopd.png'), title: 'Dinesh kumar', subTitle: 'Android developer' ,color:MyColor.purple},
    { id: 3, image: require('../../assets/images/whtopd.png'), title: 'Dinesh kumar', subTitle: 'Android developer' ,color:MyColor.skyBlue},
    { id: 4, image: require('../../assets/images/whtopd.png'), title: 'Dinesh kumar', subTitle: 'Android developer',color:MyColor.greenYello },
    { id: 5, image: require('../../assets/images/whtopd.png'), title: 'Dinesh kumar', subTitle: 'Android developer' ,color:MyColor.red},
    // Add more items as needed
  ];

  const data_token_awarded = [
    { id: 1, image: require('../../assets/images/whtopd.png'), title: 'Dinesh kumar', subTitle: 'Android developer' ,color:MyColor.skyBlue},
    { id: 2, image: require('../../assets/images/whtopd.png'), title: 'Dinesh kumar', subTitle: 'Android developer' ,color:MyColor.purple},
    { id: 3, image: require('../../assets/images/whtopd.png'), title: 'Dinesh kumar', subTitle: 'Android developer' ,color:MyColor.redYello},
    { id: 4, image: require('../../assets/images/whtopd.png'), title: 'Dinesh kumar', subTitle: 'Android developer',color:MyColor.greenYello },
    { id: 5, image: require('../../assets/images/whtopd.png'), title: 'Dinesh kumar', subTitle: 'Android developer' ,color:MyColor.red},
    // Add more items as needed
  ];
  const data_badges_awarded = [
    { id: 1, image: require('../../assets/images/whtopd.png'), title: 'Dinesh kumar', subTitle: 'Android developer' ,color:MyColor.red},
    { id: 2, image: require('../../assets/images/whtopd.png'), title: 'Dinesh kumar', subTitle: 'Android developer' ,color:MyColor.purple},
    { id: 3, image: require('../../assets/images/whtopd.png'), title: 'Dinesh kumar', subTitle: 'Android developer' ,color:MyColor.skyBlue},
    { id: 4, image: require('../../assets/images/whtopd.png'), title: 'Dinesh kumar', subTitle: 'Android developer',color:MyColor.greenYello },
    { id: 5, image: require('../../assets/images/whtopd.png'), title: 'Dinesh kumar', subTitle: 'Android developer' ,color:MyColor.redYello},
    // Add more items as needed
  ];

  const data_given_opportunities= [
    { id: 1, image: require('../../assets/images/whtopd.png'), title: 'Dinesh kumar', subTitle: 'Android developer' ,color:MyColor.black_light},
    { id: 2, image: require('../../assets/images/whtopd.png'), title: 'Dinesh kumar', subTitle: 'Android developer' ,color:MyColor.black_light},
    { id: 3, image: require('../../assets/images/whtopd.png'), title: 'Dinesh kumar', subTitle: 'Android developer' ,color:MyColor.black_light},
    { id: 4, image: require('../../assets/images/whtopd.png'), title: 'Dinesh kumar', subTitle: 'Android developer',color:MyColor.black_light },
    { id: 5, image: require('../../assets/images/whtopd.png'), title: 'Dinesh kumar', subTitle: 'Android developer' ,color:MyColor.black_light},
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
      {/* <CustomToolbar /> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.flatcontainer}>
          <View style={styles.subContainer}>
            <Text style={styles.title}>Latest Achievements</Text>
            <Text style={styles.subtitle}>View All</Text>
          </View>
          <CustomFlatList data={data} onItemClick={handleItemClick} />
        </View>
        <View style={styles.flatcontainer}>
          <View style={styles.subContainer}>
            <Text style={styles.title}>Recent Acts of Kindness</Text>
            <Text style={styles.subtitle}>View All</Text>
          </View>

          <View style={styles.flatcontainer}>
            <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false} 
            data={data_acts_kindness} renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  onPress={() => {

                  }}
                >
                  <CustomCard title={item.title} subTitle={item.subTitle} bgColor={item.color}imageSource={item.image} />
                </TouchableOpacity>

              );
            }} />
          </View>
        </View>
        <View style={styles.flatcontainer}>
          <View style={styles.subContainer}>
            <Text style={styles.title}>Recent Tokens Awarded</Text>
            <Text style={styles.subtitle}>View All</Text>
          </View>
          <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false} 
            data={data_token_awarded} renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  onPress={() => {

                  }}
                >
                  <CustomCard title={item.title} subTitle={item.subTitle} bgColor={item.color}imageSource={item.image} />
                </TouchableOpacity>

              );
            }} />
        </View>

        <View style={styles.flatcontainer}>
          <View style={styles.subContainer}>
            <Text style={styles.title}>Recent Badges Awarded</Text>
            <Text style={styles.subtitle}>View All</Text>
          </View>
          <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false} 
            data={data_badges_awarded} renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  onPress={() => {

                  }}
                >
                  <CustomCard title={item.title} subTitle={item.subTitle} bgColor={item.color}imageSource={item.image} />
                </TouchableOpacity>

              );
            }} />
      
        </View>

        <View style={styles.flatcontainer}>
          <View style={styles.subContainer}>
            <Text style={styles.title}>Latest Giving Opportunities</Text>
            <Text style={styles.subtitle}>View All</Text>
          </View>
          <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false} 
            data={data_given_opportunities} renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  onPress={() => {

                  }}
                >
                  <CustomCardLong title={item.title} subTitle={item.subTitle} bgColor={item.color}imageSource={item.image} />
                </TouchableOpacity>
              );
            }} />
    
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom:116,
    backgroundColor: '#fff',
  },
  flatcontainer: {
    marginTop: 16,
    marginLeft: 12,
    marginRight: 12,
    backgroundColor: '#fff',
  },
  subContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    flex: 1,
    flexDirection: 'row',
    marginLeft: 12
  },
  subtitle: {
    fontSize: 14,
    color: MyColor.red,
    marginRight: 16
  },
});
export default HomeScreen;
