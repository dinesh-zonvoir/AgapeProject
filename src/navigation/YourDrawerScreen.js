import { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Image, Animated, FlatList, StyleSheet } from 'react-native';
import { transformer } from '../../metro.config';

import HomeScreen from './screen/HomeScreen';
import ActsScreen from './screen/ActsScreen';
import NomineteScreen from './screen/NomineteScreen';
import OpportunitiesScreen from './screen/OpportunitiesScreen';
import ProfileScreen from './screen/ProfileScreen';
const menus = [
    { icon: require('../assets/images/home1.png'), title: 'Home' },
    { icon: require('../assets/images/profile1.png'), title: 'Profile' },
    { icon: require('../assets/images/Add1.png'), title: 'Nominate' },
    { icon: require('../assets/images/friends1.png'), title: 'Acts of Kindness' },
    { icon: require('../assets/images/friendsgroup.png'), title: 'Friends' },
    { icon: require('../assets/images/achivements.png'), title: 'Achievements' },
    { icon: require('../assets/images/chat1.png'), title: 'Messages' },
    { icon: require('../assets/images/notification1.png'), title: 'Notifications' },
    { icon: require('../assets/images/light1.png'), title: 'Opportunities' },
]
const YourDrawerScreen = () => {
    const [showMenu, setShowMenu] = useState(false);
    const moveToRight = useRef(new Animated.Value(0)).current;
    const scale = useRef(new Animated.Value(1)).current;
    const [selectedMenuItem, setSelectedMenuItem] = useState(0)
    const [selectTabItem, setSelctedTabItem] = useState(0)

    let screenComponent;
    if (selectTabItem === 0) {
      screenComponent = <HomeScreen />;
    } else if (selectTabItem === 1) {
      screenComponent = <ActsScreen />;
    } else if (selectTabItem === 2) {
      screenComponent = <NomineteScreen />;
    } else if (selectTabItem === 3) {
      screenComponent = <OpportunitiesScreen />;
    } else if (selectTabItem === 4) {
      screenComponent = <ProfileScreen />;
    } else {
      screenComponent = <HomeScreen />;
    }

    return (
        <View style={{ flex: 1 }}>
            {/* drawer -navigation-start */}
            <View style={{ flex: 1, backgroundColor: '#2e3441' }}>
                <View style={{ borderColor: '#fff', borderWidth: 1, marginLeft: 20, width: 200, flexDirection: 'row', alignItems: 'center', marginTop: 10, backgroundColor: '#41404f', borderRadius: 15 }}>
                    <Image
                        source={require('../assets/images/whtopd.png')}
                        style={{
                            width: 32, height: 32,
                            borderRadius: 35, marginLeft: 20
                        }}
                    />
                    <View style={{ margin: 16 }}>
                        <Text style={{ fontSize: 14, fontWeight: '800', color: '#fff' }}>
                            Harper .E</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../assets/images/location1.png')} style={{ tintColor: '#fff', width: 12, height: 16, marginTop: 4 }} />
                            <Text style={{ fontSize: 12, color: '#fff', marginLeft: 8, marginTop: 4 }}>
                                Georgia</Text></View>

                    </View>

                </View>
                <View style={{ marginLeft: 20, width: 200, flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                    <TouchableOpacity onPress={() => {
                        Animated.timing(scale, {
                            toValue: showMenu ? 1 : 0.6,
                            duration: 300,
                            useNativeDriver: true
                        }).start();

                        Animated.timing(moveToRight, {
                            toValue: showMenu ? 0 : 250,
                            duration: 300,
                            useNativeDriver: true
                        }).start();
                        setShowMenu(!showMenu)

                    }}>
                        <Image source={require('../assets/images/backimg.png')} style={{ width: 24, height: 16, tintColor: '#fff' }} />

                    </TouchableOpacity>


                </View>
                {/* drawer-menu start */}
                <View style={{ marginTop: 32 }}>
                    <FlatList data={menus} renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity
                                style={{
                                    width: 200,
                                    height: 50,
                                    marginLeft: 20,
                                    marginTop: 0,
                                    backgroundColor: selectedMenuItem === index ? '#c60000' : '#2e3441',
                                    borderRadius: 10,
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}
                                onPress={() => {
                                    if(item.title=='Home'){
                                        setSelctedTabItem(0)
                                    }
                                    else if(item.title=='Acts of Kindness'){
                                        setSelctedTabItem(1)
                                    }
                                    else if(item.title=='Nominate'){
                                        setSelctedTabItem(2)
                                    }
                                    else if(item.title=='Opportunities'){
                                        setSelctedTabItem(3)
                                    }
                                    else if(item.title=='Profile'){
                                        setSelctedTabItem(4)
                                    }
                            
                                    else if(item.title=='Friends'){
                                        setSelctedTabItem(5)
                                    }
                                    else if(item.title=='Achivements'){
                                        setSelctedTabItem(6)
                                    }
                                    else if(item.title=='Messages'){
                                        setSelctedTabItem(7)
                                    }
                                    else if(item.title=='Notifications'){
                                        setSelctedTabItem(7)
                                    }
                                    else{
                                        setSelctedTabItem(0)
                                    }
                                    
                                    setSelectedMenuItem(index);
                                }}
                            >
                                <Image source={item.icon} style={{ tintColor: '#fff', marginLeft: 15, width: 24, height: 24 }} />
                                <Text style={{ fontSize: 14, marginLeft: 20, color: '#fff' }}>{item.title}</Text>
                            </TouchableOpacity>

                        );
                    }} />

                </View>
                <View style={{
                    width: 200,
                    height: 70,
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    position: 'absolute',
                    bottom: 4,
                    left: 20
                }}>
                    <TouchableOpacity
                        style={{
                            width: '50%', height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row'
                        }}>
                        <Image source={require('../assets/images/settings1.png')}
                            style={{ width: 16, height: 16, tintColor: '#ffffff' }} />
                        <Text style={{ marginLeft: 8, color: '#ffffff' }}>Settings</Text>
                    </TouchableOpacity>
                    <Text style={{ color: '#fff', fontSize: 14, fontWeight: '400' }}>|</Text>

                    <TouchableOpacity
                        style={{
                            width: '50%', height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Text style={{ color: '#fff', fontSize: 14, fontWeight: '400' }}>Log out</Text>
                    </TouchableOpacity>




                </View>
                {/* drawer-menu-end */}
            </View>
            {/* Home Dessign  start*/}
            <Animated.View style={{
                flex: 1, backgroundColor: 'white', position: 'absolute', left: 0, right: 0, top: 0, bottom: 0,
                transform: [{ scale: scale }, { translateX: moveToRight }],
                borderRadius: showMenu ? 20 : 0
            }}>
                <View style={{ flexDirection: 'row', marginTop: 16 }}>
                    <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => {
                        Animated.timing(scale, {
                            toValue: showMenu ? 1 : 0.6,
                            duration: 300,
                            useNativeDriver: true
                        }).start();

                        Animated.timing(moveToRight, {
                            toValue: showMenu ? 0 : 250,
                            duration: 300,
                            useNativeDriver: true
                        }).start();
                        setShowMenu(!showMenu)

                    }}>
                        <Image source={require('../assets/images/Group.png')}
                        />
                    </TouchableOpacity>
                    <Text style={{ marginLeft: 20, fontSize: 20, fontWeight: '800', flex: 1 }}>{menus[selectedMenuItem].title == 'Home' ? '' : ''}</Text>
                    <TouchableOpacity style={{ marginLeft: 20 }}>
                        <Image source={require('../assets/images/Notification.png')} style={styles.myIcons}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ marginLeft: 20, marginRight: 16 }}>
                        <Image source={require('../assets/images/chat.png')} style={styles.myIcons}
                        />
                    </TouchableOpacity>

                </View>
                {/* start home page  */}

                <View style={{ height: '100%', width: '100%' }}>
                    {screenComponent}
                </View>
                {/* end-home page */}



                {/* bottom-navigation start */}
                <View style={{
                    width: '100%',
                    height: 70,
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    position: 'absolute',
                    bottom: 0,
                    backgroundColor: '#ffffff',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    elevation: 8
                }}>
                    <TouchableOpacity
                        style={{
                            width: '20%', height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }} onPress={() => {
                            setSelctedTabItem(0)
                        }}
                    >
                        <Image source={require('../assets/images/home1.png')}
                            style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            width: '20%', height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }} onPress={() => {
                            setSelctedTabItem(1)
                        }}>
                        <Image source={require('../assets/images/friends1.png')}
                            style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            width: '20%', height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }} onPress={() => {
                            setSelctedTabItem(2)
                        }}>
                        <Image source={require('../assets/images/Add1.png')}
                            style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            width: '20%', height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }} onPress={() => {
                            setSelctedTabItem(3)
                        }}>
                        <Image source={require('../assets/images/light1.png')}
                            style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            width: '20%', height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }} onPress={() => {
                            setSelctedTabItem(4)
                        }}>
                        <Image source={require('../assets/images/profile1.png')}
                            style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>

                </View>
                <View style={{
                    width: '100%',
                    height: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    position: 'absolute',
                    bottom: 0,
                    backgroundColor: '#fff'
                }}>
                    <View style={{ backgroundColor: selectTabItem==0?'#c60000':'#fff', width: '20%', height: 3 }} ></View>
                    <View style={{ backgroundColor: selectTabItem==1?'#c60000':'#fff', width: '20%', height: 3 }} ></View>
                    <View style={{ backgroundColor: selectTabItem==2?'#c60000':'#fff', width: '20%', height: 3 }} ></View>
                    <View style={{ backgroundColor: selectTabItem==3?'#c60000':'#fff', width: '20%', height: 3 }} ></View>
                    <View style={{ backgroundColor:selectTabItem==4?'#c60000':'#fff', width: '20%', height: 3 }} ></View>

                </View>
                {/* end bottom-navigatio */}
            </Animated.View>
            {/* Home design -end */}
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 12,
        marginTop: 12,
        marginLeft: 12
    },
    subtitle: {
        fontSize: 14,
        color: '#888',
    },
    myIcons: {
        width: 24,
        height: 24
    }
});

export default YourDrawerScreen;
