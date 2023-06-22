import {
    View, Text, StyleSheet, Image, ScrollView, ImageBackground, TextInput,
    TouchableOpacity
} from 'react-native'
import React from 'react'
import { MyColor } from '../assets/colors'
import Dotdot from '../assets/dotdot.svg'
import LetteEnvalopimg from '../assets/envelope.svg'
import Locationimg from '../assets/location.svg'
import Noteimg from '../assets/note.svg'
import Persion from '../assets/pesiongrey.svg'


const Account = () => {
    return (
        <View style={styles.container}>
            <View style={styles.toolbar}>
                <Image source={require('../assets/logo.png')} style={styles.image} />
                <Text style={styles.text}>Account</Text>
                <View ><Dotdot style={styles.imag1} /></View>
            </View>
            <ScrollView>
                <View style={{ backgroundColor: MyColor.white, alignItems: 'center', justifyContent: 'center' }}>

                    <View style={{
                        marginTop: 10,
                        height: 115, width: 115, borderRadius: 80,
                        borderWidth: 1, borderColor: 'red', borderStyle: 'dashed',
                        alignItems: 'center', justifyContent: 'center'
                    }}>
                        <Image source={require('../assets/tree.jpg')} style={styles.productImage} />
                    </View>
                    <Text style={styles.text1}>Change Profile Picture</Text>
                    <View style={{ width: "100%" }}>
                        <Text style={styles.text4}>Edit Profile</Text>
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
                            placeholder="Name"
                            placeholderTextColor="#D3D3D3"
                        />
                    </View>
                    <View style={styles.sectionStyle}>
                        <Locationimg width={20} height={20} />
                        <TextInput
                            style={styles.inputText}
                            placeholder="Zip Code"
                            placeholderTextColor="#D3D3D3"
                        />
                    </View>
                    <View style={styles.sectionStyle1}>
                        <Noteimg style={styles.svg} />
                        <TextInput
                            style={styles.inputText}
                            placeholder="Bio"
                            placeholderTextColor="#D3D3D3"
                        />
                    </View>
                    <TouchableOpacity style={styles.loginBtn}>
                        <Text style={{ fontSize: 18, color: MyColor.white }}>Save Changes</Text>
                    </TouchableOpacity>


                </View>

            </ScrollView>
        </View>
    )
}

export default Account

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: MyColor.white
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
    productImage: {
        width: 110,
        height: 110,
        borderRadius: 80,

    },
    text1: {
        fontSize: 14,
        fontWeight: 400,
        marginTop: 10,
        marginBottom: 20,
        color: MyColor.red,
    },
    text4: {
        alignSelf: 'flex-start', fontSize: 22, fontWeight: 500, color: MyColor.black_light, marginLeft: 16,
        marginBottom: 20
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
        borderRadius: 35,
        borderColor: MyColor.grey_lighter,
        borderWidth: 1,
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