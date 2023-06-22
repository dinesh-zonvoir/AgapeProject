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
import Arrowdown from '../assets/arrowdown.svg'


const Oppertunities = () => {
    const [products, setProducts] = useState([])
    const onPressLogin = () => {
        // navigation.navigate("LoginScreen")
    };
    useEffect(() => { getData() }, [])
    const getData = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                // console.log(json)
                setProducts(json)
            })

    }
    return (
        <View style={styles.container}>

            <View style={styles.toolbar}>
                <Image source={require('../assets/logo.png')} style={styles.image} />
                <Text style={styles.text}>Oppertunities</Text>
                <Image source={require('../assets/doth.png')} style={styles.imag1} />

            </View>
            <View style={{ backgroundColor: MyColor.white, flexDirection: 'row' }}>
                <View style={styles.sectionStyle}>

                    <TextInput
                        style={styles.inputText}
                        placeholder="Enter zip code"
                        placeholderTextColor="grey"
                    />
                </View>
                <View style={styles.sectionStyle1}>
                    <Text style={styles.inputText2}> 10 miles</Text>
                    <View >
                        <Arrowdown width={10} height={10} />
                    </View>
                </View>

            </View>


            <FlatList
                data={products}
                renderItem={({ item, index }) => {
                    return <View style={styles.itemView}>

                        <View style={{ paddingLeft: 20, flex: 4 }}>
                            <Text style={styles.title}>{item.title.length > 15 ? item.title.substring(0, 15) + '.' : item.title}</Text>
                            <Text style={{ fontSize: 13 }}>{item.description.length > 30 ? item.description.substring(0, 30) + '...' : item.description}</Text>
                        </View>
                        <Text style={styles.timeText}>4.5 Miles</Text>
                    </View>
                }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default Oppertunities

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
        flex: 1,
        height: 45,
        width: "35%",
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: MyColor.grey_lighter,
        borderRadius: 25,
        borderColor: MyColor.grey_lighter,
        borderWidth: 1,
        alignItems: 'center',
        alignSelf: 'center',
        padding: 20,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 5
    },
    sectionStyle1: {
        flex: 1,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: MyColor.grey_lighter,
        borderRadius: 25,
        borderColor: MyColor.grey_lighter,
        borderWidth: 1,
        alignItems: 'center',
        alignSelf: 'center',
        paddingHorizontal: 15,
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 20
    },
    inputText: {
        flex: 1,
        height: 50,
        color: MyColor.black_light,
        marginLeft: 10,

        fontSize: 14
    },
    inputText2: {
        flex: 1,
        height: 50,
        color: MyColor.grey_light,
        marginTop: 25,
        alignSelf: 'center',
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

    title: {
        fontSize: 16,
        color: MyColor.black_light,
        fontWeight: 500,

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
        alignSelf: 'flex-end',
        marginBottom: 20,
        flex: 1,
        fontSize: 12,
        color: MyColor.grey,
        fontWeight: 600
    }
})