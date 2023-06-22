import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
    TextInput,
    backgroundColor
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { MyColor } from '../assets/colors'
import Search from '../assets/search.svg'


const FriendRequests = () => {
    const [products, setProducts] = useState([])
    const onPressLogin = () => {
        // navigation.navigate("LoginScreen")
    };
    useEffect(() => { getData() }, [])
    const getData = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setProducts(json)
            })

    }
    return (
        <View style={styles.container}>

            <View style={styles.toolbar}>
                <Image source={require('../assets/logo.png')} style={styles.image} />
                <Text style={styles.text}>Friend Requests</Text>
                <Image source={require('../assets/doth.png')} style={styles.imag1} />
            </View>
            <View style={styles.viewBackBg}>
                <Text style={styles.text1}>546</Text>
                <Text style={styles.text2}>Friend Requests</Text>
            </View>
            <FlatList
                data={products}
                renderItem={({ item, index }) => {
                    return <View style={styles.itemView}>
                        <Image source={{ uri: item.image }} style={styles.productImage} />

                        <View style={{ flex: 1 }}>

                            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                <View style={{
                                    paddingLeft: 10, flex: 1,
                                    alignSelf: 'flex-start'
                                }}>
                                    <Text style={styles.title}>{item.title.length > 10 ? item.title.substring(0, 10) + '.' : item.title}</Text>
                                    <Text style={{fontSize:12,fontWeight:500,   color: MyColor.grey_light,}}>20 Mutual Friends</Text>
                                </View>
                                <Text style={styles.timeText}>8h ago</Text>
                            </View>

                            <View style={{ backgroundColor: MyColor.white, flexDirection: 'row', marginTop:8, }}>

                            <TouchableOpacity onPress={onPressLogin} style={styles.sectionStyle}>
                                    <Text style={{ fontSize: 14, color: MyColor.white,fontWeight:500 }}>Accept</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={onPressLogin} style={styles.sectionStyle1}>
                                    <Text style={{ fontSize: 14, color: MyColor.grey,fontWeight:500 }}>Dicline</Text>
                                </TouchableOpacity>

                            </View>
                        </View>



                    </View>
                }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default FriendRequests

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: MyColor.grey_bg
    },
    toolbar: {
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    viewBackBg: {
        backgroundColor: MyColor.white,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    text1: {
        fontSize: 20,

        fontWeight: 700,
        color: MyColor.red,
        textAlign: 'center',

    },
    text2: {
        fontSize: 20,
        fontWeight: 700,
        color: MyColor.black_light,
        textAlign: 'center',
        marginRight: 16,
        marginLeft: 10

    },

    itemView: {
        width: "100%",
        height: 100,
        backgroundColor: "#fff",
        alignSelf: "center",
        marginBottom: 10,
        alignItems: 'center',
        flexDirection: 'row'
    },
    productImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginLeft: 20,
        alignSelf: "center"
    },
    title: {
        fontSize: 16,
        color: MyColor.black_light,
        fontWeight: 500,

    },
    viewProfile: {
        flex: 1,
        backgroundColor: MyColor.red,
        borderRadius: 25,
        height: 30,
        marginRight: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        width: 25.86,
        height: 23.04,
        marginLeft: 15,
        alignSelf: "center",
        // backgroundColor: "green"


    },
    imag1: {
        width: 25,
        height: 25,
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
    timeText: {
        alignSelf: 'flex-start',
        marginRight:16,
        marginTop:2,
        fontSize: 12,
        color: MyColor.grey_light,
        fontWeight: 500
    }, sectionStyle: {
        flex: 1,
        height: 30,
        justifyContent: 'center',
        backgroundColor: MyColor.red,
        borderRadius: 25,
        alignItems: 'center',
        alignSelf: 'center',
        paddingHorizontal: 15,
        marginRight: 10,
        marginLeft:10
    },
    sectionStyle1: {
        flex: 1,
        height: 30,
        justifyContent: 'center',
        backgroundColor: MyColor.grey_lighter,
        borderRadius: 25,
        alignItems: 'center',
        alignSelf: 'center',
        paddingHorizontal: 15,
        marginLeft:10,
        marginRight: 16
    },
})