import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MyColor } from '../assets/colors'
import Dotdot from '../assets/dotdot.svg'


const Message = () => {
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
                <Text style={styles.text}>Messages</Text>
                <View ><Dotdot style={styles.imag1} /></View>

            </View>
            <FlatList
                data={products}
                renderItem={({ item, index }) => {
                    return <View style={styles.itemView}>
                        <Image source={{ uri: item.image }} style={styles.productImage} />
                        <View style={{ paddingLeft: 10,flex:3 }}>
                            <Text style={styles.title}>{item.title.length > 10 ? item.title.substring(0, 10) + '.' : item.title}</Text>
                            <Text style={{fontSize:13}}>{item.description.length > 30 ? item.description.substring(0, 30) + '...' : item.description}</Text>
                        
                        </View>
                        <Text style={styles.timeText}>4.59 am</Text>
                    </View>
                }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default Message

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
        height: 90,
        marginHorizontal: 16,
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
        marginLeft: 16,
        alignSelf: "center"
    },
    title: {
        fontSize: 16,
        color: MyColor.black_light,
        fontWeight: 500,

    },
    image: {
        width: 25.86,
        height: 23.04,
        marginLeft:15,
        alignSelf: "center"

    },
    imag1: {
        width: 25,
        height: 25,
        marginRight:16,
        alignSelf: "center"

    },
    text: {
        fontSize: 20,
        flex:1,
        fontWeight: 700,
        color: MyColor.red,
        textAlign: 'center',
    
    },
    timeText:{
        alignSelf: 'flex-end',
         marginBottom: 10,
         flex:1,
         fontSize:12,
        color:MyColor.grey_light,
        fontWeight:500
    }
})