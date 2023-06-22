import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { MyColor } from '../assets/colors'
import Dotdot from '../assets/dotdot.svg'
import Helpimg from '../assets/help.svg'
import Reportimg from '../assets/report.svg'
import Chatimg from '../assets/chatbubble.svg'
import Letterimg from '../assets/letter.svg'
import Adduserimg from '../assets/adduser.svg'



const Help = () => {
    return (
        <View style={styles.container}>
            <View style={styles.toolbar}>
                <Image source={require('../assets/logo.png')} style={styles.image} />
                <Text style={styles.text}>Help</Text>
                <View ><Dotdot style={styles.imag1} /></View>
            </View>

            <View style={styles.imageView}>
                <Image style={styles.image2} source={require('../assets/logo.png')} />
                <Image source={require('../assets/name_img.png')} />
            </View>

            <View style={styles.layBg}>
                <View style={{ flexDirection: 'row', marginTop: 40 }}>

                    <View style={styles.card}>
                        <View ><Helpimg style={styles.imag2} /></View>
                        <Text style={styles.texthelp}>Help Center</Text>
                        <Text style={styles.texthelp1}>How can we help you?</Text>
                    </View>

                    <View style={styles.card1}>
                        <View ><Reportimg style={styles.imag2} /></View>
                        <Text style={styles.texthelp}>Report A Problem</Text>
                        <Text style={styles.texthelp1}>Did you encounter a problem?</Text>
                    </View>
                </View>

                <Text style={styles.inviteText}>Invite Friends</Text>

                <View style={styles.sectionStyle}>
                    <Chatimg width={20} height={20} />
                    <Text style={styles.text3}>Invite friends by SMS</Text>
                </View>
                <View style={styles.sectionStyle}>
                    <Letterimg width={20} height={20} />
                    <Text style={styles.text3}>Invite friends by SMS</Text>
                </View>
                <View style={styles.sectionStyle}>
                    <Adduserimg width={20} height={20} />
                    <Text style={styles.text3}>Invite friends by SMS</Text>
                </View>


            </View>
        </View>
    )
}

export default Help

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: MyColor.white
    },
    imageView: {
        height: 140,
        width: "100%",
        backgroundColor: MyColor.white,
        justifyContent: "center",
        alignItems: "center"
    },
    image2: {
        height: 80,
        width: 90,
        marginBottom: 10
    },
    toolbar: {
        height: 55,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    image: {
        width: 25.86,
        height: 23.04,
        marginLeft: 15,
        alignSelf: "center"
    },
    imag1: {
        width: 25,
        height: 25,
        marginRight: 16,
        alignSelf: "center"

    },
    imag2: {
        width: 25,
        height: 25,
    },
    text: {
        fontSize: 20,
        flex: 1,
        fontWeight: 700,
        color: MyColor.red,
        textAlign: 'center',

    },
    layBg: {
        flex: 1, alignItems: 'center',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15
    },
    card: {
        flex: 1,
        height: 120,
        width: "100%",
        padding: 15,
        marginLeft: 16,
        marginRight: 8,
        borderRadius: 25,
        borderColor: MyColor.grey_lighter,
        borderWidth: 1,
        backgroundColor: MyColor.white
    },
    card1: {
        flex: 1,
        height: 120,
        width: "100%",
        marginRight: 16,
        marginLeft: 8,
        padding: 15,
        borderRadius: 25,
        borderColor: MyColor.grey_lighter,
        borderWidth: 1,
        backgroundColor: MyColor.white
    },
    texthelp: {
        fontWeight: 500,
        fontSize: 14,
        marginTop: 10,
        color: MyColor.black_light,
    },
    texthelp1: {
        fontWeight: 400,
        fontSize: 12,
        marginTop: 8,
        color: MyColor.grey_light,
    },
    inviteText: {
        fontWeight: 500,
        fontSize: 20,
        marginBottom:15,
        color: MyColor.black_light,
        alignSelf: "flex-start",
        marginLeft: 16, marginTop: 20,

    },
    sectionStyle: {
        height: 40,
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
    text3: {
        fontWeight: 500,
        color: MyColor.grey,
        fontSize: 13,
        marginLeft: 10
    }
})