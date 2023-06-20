import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomFlatList = ({ data, onItemClick }) => {
  const renderItem = ({ item }) =>{
    return (
      <TouchableOpacity style={styles.itemContainer} onPress={() => onItemClick(item)}>
        <Image source={item.image} style={styles.itemImage} />
        <Text style={styles.itemLabel}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()} 
        showsHorizontalScrollIndicator={false} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 0,
  },
  itemContainer: {
    alignItems: 'center',
    marginRight: 4,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 40,
  },
  itemLabel: {
    marginTop: 0,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomFlatList;  
