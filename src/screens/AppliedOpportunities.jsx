import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MyColor } from '../assets/colors'
import Dotdot from '../assets/dotdot.svg'


const AppliedOpportunities = () => {
    const [products, setProducts] = useState([])
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
                <Text style={styles.text}>Applied Opportunities</Text>
                <View ><Dotdot style={styles.imag1} /></View>

            </View>
            <FlatList
                data={products}
                renderItem={({ item, index }) => {
                    return <View style={styles.itemView}>
                        <View style={{ flexDirection: 'row', marginBottom:5, }}>
                            <Image source={{ uri: item.image }} style={styles.productImage} />
                            <Text style={styles.textMomnetum}>High Momnetum</Text>
                        </View>

                        <View>
                            <Text style={styles.title}>{item.title.length > 10 ? item.title.substring(0, 10) + '.' : item.title}</Text>
                            <View style={{flexDirection: 'row' }}>
                                <Text style={{ fontSize: 12,fontWeight:400,color:MyColor.black_light }}>Date of Submission :</Text>
                                <Text style={{ fontSize: 12 ,fontWeight:400,marginLeft:5}}>May 28, 2021</Text>
                            </View>
                        </View>
                    </View>
                }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default AppliedOpportunities

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: MyColor.grey_bg
    },
    toolbar: {
        height: 55,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    itemView: {
        width: "100%",
        paddingHorizontal: 16,
        paddingVertical:15,
        backgroundColor: MyColor.white,
        alignSelf: "center",
        marginBottom: 10,
        alignItems: 'flex-start',

    },
    productImage: {
        width: 30,
        height: 30,
        borderRadius: 40,
        alignSelf: "center"
    },
    textMomnetum: {
        fontFamily: 'Roboto-Regular',
        fontWeight: 400,
        fontSize: 13,
        marginLeft:10,
        alignSelf: 'center',
        color: MyColor.grey_light
    },
    title: {
        fontSize: 17,
        color: MyColor.black_light,
        fontWeight: 500,

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