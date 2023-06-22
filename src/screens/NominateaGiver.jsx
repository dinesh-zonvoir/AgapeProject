import {
    View, Text, StyleSheet, Image, ScrollView, ImageBackground, TextInput,
    TouchableOpacity
} from 'react-native'
import React from 'react'
import { MyColor } from '../assets/colors'
import Dotdot from '../assets/dotdot.svg'
import LetteEnvalopimg from '../assets/envelope.svg'
import Searchimg from '../assets/searchgrey.svg'
import Noteimg from '../assets/note.svg'
import Persion from '../assets/pesiongrey.svg'


const NominateaGiver = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.toolbar}>
                <Image source={require('../assets/logo.png')} style={styles.image} />
                <Text style={styles.text}>Nominate a Giver</Text>
                <View ><Dotdot style={styles.imag1}/></View>
            </View>
                <View style={{ backgroundColor: MyColor.white, alignItems: 'center', justifyContent: 'center' }}>

                    <View style={{ width: "100%" }}>
                        <Text style={styles.text4}>Search for a member</Text>
                    </View>

                    <View style={styles.sectionStyle}>
                        <Searchimg width={20} height={20} />
                        <TextInput
                            style={styles.inputText}
                            placeholder="Search for a member..."
                            placeholderTextColor="#D3D3D3"
                        />
                    </View>
                    <View style={{ height:8,width: "100%",backgroundColor:MyColor.grey_lighter }}></View>
                    <View style={{ width: "100%" }}>
                        <Text style={styles.text4}>Invite a new member</Text>
                    </View>
                    <View style={styles.sectionStyle}>
                        <LetteEnvalopimg width={20} height={20} />
                        <TextInput
                            style={styles.inputText}
                            placeholder="Email Address"
                            placeholderTextColor="#D3D3D3"
                        />
                    </View>
                    <View style={styles.sectionStyle}>
                        <Persion width={20} height={20} />
                        <TextInput
                            style={styles.inputText}
                            placeholder="Full Name"
                            placeholderTextColor="#D3D3D3"
                        />
                    </View>
                    <View style={{ height:8,width: "100%",backgroundColor:MyColor.grey_lighter }}></View>
                  
                    <View style={styles.sectionStyle1}>
                        <Noteimg style={styles.svg} />
                        <TextInput
                            style={styles.inputText}
                            placeholder="Describe the act of kindness and it’s impact..."
                            placeholderTextColor="#D3D3D3"
                        />
                    </View>
                    <View style={styles.sectionStyle2}>
                        {/* <Noteimg style={styles.svg} /> */}
                        <TextInput
                            style={styles.inputText}
                            placeholder="Describe the act of kindness and it’s impact..."
                            placeholderTextColor="#D3D3D3"
                        />
                    </View>
                    <TouchableOpacity style={styles.loginBtn}>
                        <Text style={{ fontSize: 18, color: MyColor.white }}>Submit Nomination</Text>
                    </TouchableOpacity>


                </View>

            </ScrollView>
        </View>
    )
}

export default NominateaGiver

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: MyColor.white,
        paddingBottom:116,
    },
    toolbar: {
        height: 55,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    inputText: {
        flex: 1,
        height: 50,
        fontSize:12,
        marginLeft: 10,
        color: MyColor.black_light
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
    text: {
        fontSize: 20,
        flex: 1,
        fontWeight: 700,
        color: MyColor.red,
        textAlign: 'center',
    },

    text4: {
        alignSelf: 'flex-start', fontSize: 18, fontWeight: 500, color: MyColor.black_light, marginLeft: 16,
        marginBottom: 15,
        marginTop:10
    },
    sectionStyle: {
        height: 50,
        width: "92%",
        flexDirection: 'row',
        backgroundColor: MyColor.white,
        borderRadius: 25,
        borderColor: MyColor.grey_lighter,
        borderWidth: 1,
        paddingHorizontal: 20,
        alignItems: 'center',
        marginBottom: 20,

    },
    sectionStyle1: {
        height: 140,
        width: "92%",
        flexDirection: 'row',
        backgroundColor: MyColor.white,
        borderRadius: 25,
        borderColor: MyColor.grey_lighter,
        borderWidth: 1,
        paddingHorizontal: 20,
        alignItems: 'flex-start',
        marginBottom: 20,
        marginTop:15

    },
    sectionStyle2: {
        height: 140,
        width: "92%",
        flexDirection: 'row',
        backgroundColor: MyColor.pink_lighter,
        borderRadius: 25,
  borderStyle: 'dashed',
        borderColor: MyColor.red,
        borderWidth: 2,
        paddingHorizontal: 20,
        alignItems: 'flex-start',
        marginBottom: 20,

    },
    svg: {
        width: 20,
        height: 20,
        marginTop: 15
    },
    loginBtn: {
        width: "90%",
        backgroundColor: MyColor.red,
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10
    },

})