import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const MoviesList = ({
    data,
}) => {

    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <View style={styles.touchop}>
                    <Image source={{ uri: `https://image.tmdb.org/t/p/original/${item.poster_path}` }} style={styles.image} />
                    <Text style={styles.movieName}>{item.original_title}</Text>
                    <Text style={styles.title}>Release Date: <Text style={styles.body}>{item.release_date}</Text></Text> 
                    <Text style={styles.title}>Overview: <Text style={styles.body}>{item.overview}</Text></Text>
                </View>
            )} />

    )
}

const styles = StyleSheet.create({
    touchop: {
        backgroundColor: 'white',
        marginBottom: 20,
        flex: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingBottom: 10,
        elevation: 7,
        shadowOffset: { width: 1, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    text: {
        textAlign: 'center',
        marginVertical: 50,
        marginHorizontal: 10
    },
    body:{
        fontWeight: '100',
    },
    title:{
        fontWeight: 'bold',
        marginHorizontal: 10
    },
    image: {
        width: '100%',
        height: 200,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    movieName:{
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 10
    }
})

export default MoviesList;
