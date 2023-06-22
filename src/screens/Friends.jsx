import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
    TextInput
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { MyColor } from '../assets/colors'
import Search from '../assets/search.svg'
import Dotdot from '../assets/dotdot.svg'


const Friends = () => {
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
                <Text style={styles.text}>Friends</Text>
                <View ><Dotdot style={styles.imag1} /></View>

            </View>
            <View style={{ backgroundColor: MyColor.white }}>
                <View style={styles.sectionStyle}>
                    <View >
                        <Search
                            width={20}
                            height={20}
                           
                            />
                          
                    </View>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Search for a member"
                        placeholderTextColor="grey"

                    />
                </View>
            </View>

            <FlatList
                data={products}
                renderItem={({ item, index }) => {
                    return <View style={styles.itemView}>
                        <Image source={{ uri: item.image }} style={styles.productImage} />
                        <View style={{ paddingLeft: 10, flex: 2 }}>
                            <Text style={styles.title}>{item.title.length > 10 ? item.title.substring(0, 10) + '.' : item.title}</Text>
                        </View>
                        <TouchableOpacity onPress={onPressLogin} style={styles.viewProfile}>
                            <Text style={{ fontSize: 12, color: MyColor.white }}>View Profile</Text>
                        </TouchableOpacity>
                    </View>
                }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default Friends

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
    sectionStyle: {
        height: 45,
        width: "95%",
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: MyColor.grey_lighter,
        borderRadius: 25,
        borderColor: MyColor.grey_lighter,
        borderWidth: 1,
        alignItems: 'center',
        alignSelf: 'center',
        padding: 20,
        marginBottom: 10
    },
    inputText: {
        flex: 1,
        height: 50,
        color: MyColor.black_light,
        marginLeft:10,
        fontSize: 14
    },
    itemView: {
        width: "100%",
        height: 90,
        backgroundColor: "#fff",
        alignSelf: "center",
        marginBottom: 10,
        alignItems: 'center',
        flexDirection: 'row'
    },
    productImage: {
        width: 50,
        height: 50,
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
        height:  23.04,
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
        alignSelf: 'flex-end',
        marginBottom: 10,
        flex: 1,
        fontSize: 12,
        color: MyColor.grey_light,
        fontWeight: 500
    }
})