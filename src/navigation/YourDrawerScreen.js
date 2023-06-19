import { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Image, Animated, FlatList } from 'react-native';
import { transformer } from '../../metro.config';
const menus = [
    { icon: require('../assets/images/chat.png'), title: 'Home' },
    { icon: require('../assets/images/chat.png'), title: 'Profile' },
    { icon: require('../assets/images/chat.png'), title: 'Nominate' },
    { icon: require('../assets/images/chat.png'), title: 'Acts of Kindness' },
    { icon: require('../assets/images/chat.png'), title: 'Friends' },
    { icon: require('../assets/images/chat.png'), title: 'Achievements' },
    { icon: require('../assets/images/chat.png'), title: 'Messages' },
    { icon: require('../assets/images/chat.png'), title: 'Notifications' },
    { icon: require('../assets/images/chat.png'), title: 'Opportunities' },
]
const YourDrawerScreen = () => {
    const [showMenu, setShowMenu] = useState(false);
    const moveToRight = useRef(new Animated.Value(0)).current;
    const scale = useRef(new Animated.Value(1)).current;
    const [selectedMenuItem, setSelectedMenuItem] = useState(0)
    return (
        <View style={{ flex: 1 }}>
            {/* drawer -navigation-start */}
            <View style={{ flex: 1, backgroundColor: '#2e3441' }}>
                <View style={{ borderColor:'#fff',borderWidth:1,marginLeft: 20, width: 200, flexDirection: 'row', alignItems: 'center', marginTop: 10 ,backgroundColor:'#41404f',borderRadius:15}}>
                    <Image
                        source={require('../assets/images/chat.png')}
                        style={{
                            width: 32, height: 32,
                            borderRadius: 35, marginLeft: 20
                        }}
                    />
                    <View style={{ margin: 16 }}>
                        <Text style={{ fontSize: 14, fontWeight: '800', color: '#fff' }}>
                            Harper .E</Text>
                            <View style={{ flexDirection:'row'}}>
                                <Image source={require('../assets/images/chat.png')}  style={{ tintColor:'#fff',width:16,height:16,marginTop:4}}/>
                            <Text style={{ fontSize: 12, color: '#fff',marginLeft:8 ,marginTop:4}}>
                            Georgia</Text></View>
                       
                    </View>
                    
                </View>
                <View style={{ marginLeft: 20, width: 200, flexDirection: 'row', alignItems: 'center', marginTop: 16 }}>
                    <Image source={require('../assets/images/chat.png')}  style={{width:48,height:16,tintColor:'#fff'}}/>
                       
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
                  bottom:4,
                  left:20
                   }}>
                    <TouchableOpacity
                     style={{width:'50%',height:'100%',
                     justifyContent:'center',
                     alignItems:'center',
                     flexDirection:'row'}}>
                        <Image source={require('../assets/images/chat.png')} 
                        style={{width:16,height:16, tintColor:'#ffffff'}}/>
                        <Text style={{marginLeft:8,color:'#ffffff'}}>Settings</Text>
                    </TouchableOpacity>
                    <Text style={{color:'#fff', fontSize:14,fontWeight:'400'}}>|</Text>
                   
                    <TouchableOpacity
                     style={{width:'50%',height:'100%',
                     justifyContent:'center',
                     alignItems:'center'}}>
                        <Text style={{color:'#fff', fontSize:14,fontWeight:'400'}}>Log out</Text>
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
                        <Image
                            source={require('../assets/images/chat.png')}
                            style={{ width: 24, height: 24 }}
                        />
                    </TouchableOpacity>
                    <Text style={{ marginLeft: 20, fontSize: 20, fontWeight: '800' }}>{menus[selectedMenuItem].title}</Text>
                
                    {/* Home screen code */}
                
                
                </View>
                {/* bottom-navigation start */}
                <View style={{ 
                    width: '100%',
                     height: 70, 
                flexDirection: 'row',
                 justifyContent: 'space-evenly',
                  alignItems: 'center', 
                  position: 'absolute',
                  bottom:0,
                  backgroundColor:'#ffffff',
                 borderTopLeftRadius:20,
                 borderTopRightRadius:20,
                 elevation:8
                   }}>
                    <TouchableOpacity
                     style={{width:'20%',height:'100%',
                     justifyContent:'center',
                     alignItems:'center'}}>
                        <Image source={require('../assets/images/chat.png')} 
                        style={{width:30,height:30}}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                     style={{width:'20%',height:'100%',
                     justifyContent:'center',
                     alignItems:'center'}}>
                        <Image source={require('../assets/images/chat.png')} 
                        style={{width:30,height:30}}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                     style={{width:'20%',height:'100%',
                     justifyContent:'center',
                     alignItems:'center'}}>
                        <Image source={require('../assets/images/chat.png')} 
                        style={{width:30,height:30}}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                     style={{width:'20%',height:'100%',
                     justifyContent:'center',
                     alignItems:'center'}}>
                        <Image source={require('../assets/images/chat.png')} 
                        style={{width:30,height:30}}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                     style={{width:'20%',height:'100%',
                     justifyContent:'center',
                     alignItems:'center'}}>
                        <Image source={require('../assets/images/chat.png')} 
                        style={{width:30,height:30}}/>
                    </TouchableOpacity>
                    
                </View>
                <View style={{ 
                    width: '100%',
                     height: 10, 
                flexDirection: 'row',
                 justifyContent: 'space-evenly',
                  alignItems: 'center', 
                  position: 'absolute',
                  bottom:0,
                  backgroundColor:'#fff'
                   }}>
                    <View style={{backgroundColor:'#c60000',width:'20%',height:3}} ></View>
                    <View style={{backgroundColor:'#c60001',width:'20%',height:3}} ></View>
                    <View style={{backgroundColor:'#c60002',width:'20%',height:3}} ></View>
                    <View style={{backgroundColor:'#c60003',width:'20%',height:3}} ></View>
                    <View style={{backgroundColor:'#c60004',width:'20%',height:3}} ></View>
                 
                </View>
                {/* end bottom-navigatio */}
            </Animated.View>
        {/* Home design -end */}
        </View>
    );
};

export default YourDrawerScreen;
