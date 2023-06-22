import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { MyColor } from '../assets/colors'
import Dotdot from '../assets/dotdot.svg'
import Clockimg from '../assets/clock.svg'
import Placeholder from '../assets/placeholder.svg'
import Googledocs from '../assets/googledocs.svg'
import Group from '../assets/group.svg'


const Opportunity = () => {
    return (
        <View style={styles.container}>
            <View style={styles.toolbar}>
                <Image source={require('../assets/logo.png')} style={styles.image} />
                <Text style={styles.text}>Applied Opportunities</Text>
                <View ><Dotdot style={styles.imag1} /></View>
            </View>
            <ScrollView>
                <View style={{ backgroundColor: MyColor.white, paddingHorizontal: 16 }}>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Image source={require('../assets/tree.jpg')} style={styles.productImage} />
                        <View style={{ alignSelf: 'center', marginLeft: 15 }}>
                            <Text style={styles.text1}>Feed Seniors</Text>
                            <Text style={styles.text2}>Glen Dale Fire Association, Inc.</Text>

                        </View>
                    </View>

                    <Text style={styles.text3}>Help distribute boxes of fruit and vegetables or canned{"\n"}goods to low income senior citizens at AHC's Charter{"\n"}House. an affordable housing apartment building located{"\n"}in Silver Spring. Boxes will be placed outside apartment{"\n"}doors to minimize contact with residents. Boxes weigh{"\n"}between 20-40 pounds so volunteers must be able to lift{"\n"}that amount. AHC follows best practices for volunteers{"\n"}during COVID 19 including wearing masks and practicing{"\n"}social distancing.</Text>
                </View>

                <View style={{ backgroundColor: MyColor.white, paddingHorizontal: 16, marginTop: 5, paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', paddingLeft: 10, marginBottom: 5 }}>
                        <View style={styles.circuleRound}>
                            <Clockimg style={styles.imag2} />
                        </View>
                        <Text style={styles.text4}>Duration</Text>
                    </View>
                    <Text style={styles.text5}>Thursday, December 17 from 1:30 pm - 2:30 pm</Text>
                    <Text style={styles.text5}>Monday, December 21 from 12:30 - 1:30 pm</Text>
                    <Text style={styles.text5}>Monday, January 11 from 12:30 - 1:30 pm</Text>
                </View>

                <View style={{ backgroundColor: MyColor.white, paddingHorizontal: 16, marginTop: 5, paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', paddingLeft: 10, marginBottom: 5 }}>
                        <View style={styles.circuleRound}>
                            <Placeholder style={styles.imag2} />
                        </View>
                        <Text style={styles.text4}>Location</Text>
                    </View>
                    <Text style={styles.text5}>AHC’s Charter House{"\n"}
                        15896 Charter House Lane{"\n"}
                        Silver Spring, Maryland, 20756</Text>

                </View>

                <View style={{ backgroundColor: MyColor.white, paddingHorizontal: 16, marginTop: 5, paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', paddingLeft: 10, marginBottom: 5 }}>
                        <View style={styles.circuleRound}>
                            <Googledocs style={styles.imag2} />
                        </View>
                        <Text style={styles.text4}>Requirements</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 50 }}>
                        <View style={styles.dot}></View>
                        <Text style={styles.text6}>Personal Vehicle</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 50, }}>
                        <View style={styles.dot}></View>
                        <Text style={styles.text6}>Able to lift 40+ pounds</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 50, }}>
                        <View style={styles.dot}></View>
                        <Text style={styles.text6}>Orientation or Training</Text>
                    </View>
                </View>

                <View style={{ backgroundColor: MyColor.white, paddingHorizontal: 16, marginTop: 5, paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', paddingLeft: 10, marginBottom: 5 }}>
                        <View style={styles.circuleRound}>
                            <Group style={styles.imag2} />
                        </View>
                        <Text style={styles.text4}>Good For</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 50 }}>
                        <View style={styles.dot}></View>
                        <Text style={styles.text6}>Teenager and Parent</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 50, }}>
                        <View style={styles.dot}></View>
                        <Text style={styles.text6}>Small Team (2 to 4 People)</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 50, }}>
                        <View style={styles.dot}></View>
                        <Text style={styles.text6}>Couple</Text>
                    </View>
                    <TouchableOpacity style={styles.loginBtn}>
                        <Text style={{ fontSize: 18, color: MyColor.white }}>I Want to Help</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>


        </View>



    )
}

export default Opportunity

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
    productImage: {
        width: 60,
        height: 60,
        borderRadius: 40,
        alignSelf: "center"
    },
    text1: {
        fontSize: 18,
        fontWeight: 500,
        color: MyColor.black_light,
    },
    text2: {
        fontSize: 13,
        fontWeight: 500,
        color: MyColor.black_lighter,
    },
    text: {
        fontSize: 20,
        flex: 1,
        fontWeight: 700,
        color: MyColor.red,
        textAlign: 'center',
    },
    text3: {
        fontSize: 13,
        fontWeight: 500,
        marginTop: 10,
        marginBottom: 25,
        color: MyColor.grey_light
    },
    circuleRound: {
        width: 30,
        height: 30,
        backgroundColor: MyColor.pink_lighter,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text4: {
        fontSize: 15,
        fontWeight: 500,
        color: MyColor.black_light,
        marginLeft: 10,
        alignSelf: 'center'
    },
    text5: {
        fontSize: 13,
        color: MyColor.grey_light,
        marginLeft: 50,
        lineHeight: 20,
    },
    text6: {
        fontSize: 13,
        color: MyColor.grey_light,
        marginLeft: 5, lineHeight: 20,

    },
    dot: {
        width: 7,
        height: 7,
        backgroundColor: MyColor.grey,
        borderRadius: 10,
        alignSelf: 'center'
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