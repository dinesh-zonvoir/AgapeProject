import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MyColor } from '../assets/colors'

const Notifications = () => {
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
                <Text style={styles.text}>Notifications</Text>
                <Image source={require('../assets/doth.png')} style={[styles.imag1]} />

            </View>
            <FlatList
                data={products}
                renderItem={({ item, index }) => {
                    return <View style={styles.itemView}>
                        <Image source={{ uri: item.image }} style={styles.productImage} />
                        <View style={{ paddingLeft: 10,flex:1 }}>
                            <Text style={styles.title}>{item.title.length > 30 ? item.title.substring(0, 30) + '.' : item.title}</Text>
                            <Text style={{fontSize:12,marginTop:5,fontWeight:400}}>11 hours ago</Text>
                        
                        </View>
                    
                    </View>
                }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default Notifications

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
        fontWeight: 400,

    },
    image: {
        width: 25,
        height: 25,
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
    
})