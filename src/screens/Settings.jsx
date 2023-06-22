import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, } from 'react-native'
import React from 'react'
import { MyColor } from '../assets/colors'
import Dotdot from '../assets/dotdot.svg'
import Persionimg from '../assets/persion.svg'
import Shieldimg from '../assets/shield.svg'
import Textdocimg from '../assets/textdocument.svg'
import Helpimg from '../assets/helpleftcorner.svg'
import Locationimg from '../assets/location.svg'


const Settings = () => {
    return (
        <View style={styles.container}>
            <View style={styles.toolbar}>
                <Image source={require('../assets/logo.png')} style={styles.image} />
                <Text style={styles.text}>Settings</Text>
                <View ><Dotdot style={styles.imag1} /></View>
            </View>
            <ScrollView>
                <View style={{ backgroundColor: MyColor.white, paddingHorizontal: 16 }}>
                    <View style={{ marginTop: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ height:115, width:115,borderRadius:80,
                             borderWidth: 1, borderColor: 'red', borderStyle: 'dashed',
                             alignItems:'center',justifyContent:'center'
                              }}>   
                            <Image source={require('../assets/tree.jpg')} style={styles.productImage} />
                            </View>
                     
                        <Text style={styles.text1}>Jorge Wattson</Text>
                        <View style={{flexDirection:'row',marginBottom:20}}>
                        <Locationimg style={styles.imag3} />
                        <Text style={styles.text2}>Georgia</Text>
                        </View>
                        
                    </View>
                </View>

                <View style={styles.cardbg}>
                    <View style={{ flexDirection: 'row', paddingLeft: 10, marginBottom: 5, }}>
                        <View style={styles.circuleRound}>
                            <Persionimg style={styles.imag2} />
                        </View>
                        <View style={{ marginLeft: 10, alignSelf: 'center' }}>
                            <Text style={styles.text4}>Account</Text>
                            <Text style={styles.text6}>Edit Profile</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.cardbg}>
                    <View style={{ flexDirection: 'row', paddingLeft: 10, marginBottom: 5 }}>
                        <View style={styles.circuleRound}>
                            <Shieldimg style={styles.imag2} />
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.text4}>Security</Text>
                            <Text style={styles.text6}>Edit Password - Notifications</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.cardbg}>
                    <View style={{ flexDirection: 'row', paddingLeft: 10, marginBottom: 5 }}>
                        <View style={styles.circuleRound}>
                            <Textdocimg style={styles.imag2} />
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.text4}>Activity</Text>
                            <Text style={styles.text6}>Members Activity on the Agape App</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.cardbg}>
                    <View style={{ flexDirection: 'row', paddingLeft: 10, marginBottom: 5 }}>
                        <View style={styles.circuleRound}>
                            <Helpimg style={styles.imag2} />
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.text4}>Help</Text>
                            <Text style={styles.text6}>Members Activity on the Agape App</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>



    )
}

export default Settings

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    toolbar: {
        height: 55,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    cardbg: {
        backgroundColor: MyColor.white, paddingHorizontal: 16, marginTop: 5, paddingVertical: 25
    },
    image: {
        width: 25.86,
        height: 23.04,
        marginLeft: 15,
        alignSelf: "center"
    },
    imag1: {
        width: 30,
        height: 30,
        marginRight: 16,
        alignSelf: "center"
    },
    imag2: {
        width: 30,
        height: 30,
        alignSelf: "center"
    },
    imag3: {
        width: 30,
        height: 30,
        tintColor:MyColor.grey_light,
        alignSelf: "center"
    },
    productImage: {
        width: 110,
        height: 110,
        borderRadius: 80,
      
    },
    text1: {
        fontSize: 19,
        fontWeight: 700,
        marginTop: 10,
        color: MyColor.black_light,
    },
    text2: {
        fontSize: 15,
        fontWeight: 400,
        marginTop: 5,
        marginLeft:5,
        marginBottom:3,
        alignSelf:'center',
        color: MyColor.grey_light,
    },
    text: {
        fontSize: 20,
        flex: 1,
        fontWeight: 700,
        color: MyColor.red,
        textAlign: 'center',
    },

    circuleRound: {
        width: 30,
        height: 30,
        backgroundColor: MyColor.pink_lighter,
        borderRadius: 40,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    text4: {
        fontSize: 18,
        fontWeight: 400,
        color: MyColor.black_light,
        alignSelf: 'flex-start'
    },

    text6: {
        fontSize: 12,
        fontWeight: 400,
        color: MyColor.grey_light,
    },

    loginBtn: {
        width: "90%",
        backgroundColor: MyColor.red,
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        marginBottom: 10
    },

})