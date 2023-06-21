import React from 'react';
import { StatusBar, Image, Button, View, Text, ScrollView, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import CustomToolbar from '../../components/CustomToolbar';
import CustomFlatList from '../../components/CustomFlatList';
import { MyColor } from '../../assets/colors';
import CustomCard from '../../components/CustomCard';
import CustomCardLong from '../../components/CustomCardLong';

const ProfileScreen = ({ navigation }) => {
  const data_latest_achivement = [
    { id: 1, image: require('../../assets/images/Layer_1.png'), label: 'Lavel 1' },
    { id: 2, image: require('../../assets/images/Layer_2.png'), label: 'Lavel 2' },
    { id: 3, image: require('../../assets/images/Layer_3.png'), label: 'Lavel 3' },
    { id: 4, image: require('../../assets/images/Layer_4.png'), label: 'Lavel 4' },
    { id: 4, image: require('../../assets/images/Layer_4.png'), label: 'Lavel 4' },
    // Add more items as needed
  ];

  const data_acts_kindness = [
    { id: 1, image: require('../../assets/images/whtopd.png'), title: 'Dinesh kumar', subTitle: 'Android developer', color: MyColor.redYello },
    { id: 2, image: require('../../assets/images/whtopd.png'), title: 'Dinesh kumar', subTitle: 'Android developer', color: MyColor.purple },
    { id: 3, image: require('../../assets/images/whtopd.png'), title: 'Dinesh kumar', subTitle: 'Android developer', color: MyColor.skyBlue },
    { id: 4, image: require('../../assets/images/whtopd.png'), title: 'Dinesh kumar', subTitle: 'Android developer', color: MyColor.greenYello },
    { id: 5, image: require('../../assets/images/whtopd.png'), title: 'Dinesh kumar', subTitle: 'Android developer', color: MyColor.red },
    // Add more items as needed
  ];




  const data_given_opportunities = [
    { id: 1, image: require('../../assets/images/whtopd.png'), title: 'Feed Seniors', subTitle: 'With Doorways for woman and families', address: 'Rohade Island , 02880', color: MyColor.black_light, distance: '4.7 miles' },
    { id: 2, image: require('../../assets/images/whtopd.png'), title: 'Feed Seniors', subTitle: 'With Doorways for woman and families', address: 'Rohade Island , 02880', color: MyColor.black_light, distance: '4.7 miles' },
    { id: 3, image: require('../../assets/images/whtopd.png'), title: 'Feed Seniors', subTitle: 'With Doorways for woman and families', address: 'Rohade Island , 02880', color: MyColor.black_light, distance: '4.7 miles' },
    { id: 4, image: require('../../assets/images/whtopd.png'), title: 'Feed Seniors', subTitle: 'With Doorways for woman and families', address: 'Rohade Island , 02880', color: MyColor.black_light, distance: '4.7 miles' },
    { id: 5, image: require('../../assets/images/whtopd.png'), title: 'Feed Seniors', subTitle: 'With Doorways for woman and families', address: 'Rohade Island , 02880', color: MyColor.black_light, distance: '4.7 miles' },
    // Add more items as needed
  ];

  const handleItemClick = (item) => {
    // Handle item click here
    // navigation.navigate('Details');
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

        <View style={styles.profileContainer}>
          <Image source={require('../../assets/images/whtopd.png')} style={styles.itemImage} />
          <Text style={styles.titleStyle}>Anisha W.</Text>
          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../../assets/images/location1.png')} style={{ tintColor: '#000', width: 12, height: 16, marginTop: 4 }} />
            <Text style={{ fontSize: 12, color: MyColor.black_light, marginLeft: 8, marginTop: 4 }}>
              Anisha W.</Text>
              </View>


          <Text ></Text>
          <Text style={styles.textStyle}>So you're going abroad,you've chosen your destination and now you have to choose a hotel . We will make some arrguments.We will make some arrguments.</Text>
        </View>
        <View style={styles.followersContainer}>
          <Text style={styles.flText}> <Text style={styles.title}>18</Text> Friends</Text>
          <Text style={styles.flText}><Text style={styles.title}>314 </Text>Agape Tokens</Text>
          <Text style={styles.flText}><Text style={styles.title}>1.3k </Text>Applauds</Text>
        </View>

        <View style={{backgroundColor:MyColor.grey_lighter,height:5,width:'100%',marginTop:16}}>

        </View>


        <View style={styles.flatcontainer}>
          <View style={styles.subContainer}>
            <Text style={styles.title}>Latest Achievements</Text>
            <Text style={styles.subtitle}>View All</Text>
          </View>
          <CustomFlatList data={data_latest_achivement} onItemClick={handleItemClick} />
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
                    <CustomCard title={item.title} subTitle={item.subTitle} bgColor={item.color} imageSource={item.image} />
                  </TouchableOpacity>

                );
              }} />
          </View>
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
                  <CustomCardLong title={item.title} subTitle={item.subTitle} bgColor={item.color} imageSource={item.image} address={item.address} distance={item.distance} />
                </TouchableOpacity>
              );
            }} />

        </View>
      </ScrollView >
    </View >
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 116,
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
  profileContainer: {
    padding: 16,
    marginLeft: 16,
    marginRight: 16,
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 40,
  },
  titleStyle: {
    textAlign: 'center',
    fontSize: 16,
    width: '100%',
    color: MyColor.black,
    fontWeight: 'bold',
    marginTop: 8,

  },
  textStyle: {
    textAlign: 'center',
    fontSize: 14,
    justifyContent:'center',
    alignSelf:'center',
    flex:1,
    marginRight:16,
    marginLeft:16

  },
  followersContainer: {
    marginTop:8,
    flex: 1,
    flexDirection: 'row',
  },
  flText:{
    flex:1,
    textAlign:'center'
  }

});
export default ProfileScreen;
