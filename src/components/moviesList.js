import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ActivityIndicator, Platform } from 'react-native';
import NavigationService from '../services/navigationServices';

const MoviesList = ({
    data,
    getMoreMovies,
    hasMore
}) => {


    const moviePressHandler = (item) => {
        console.log("pressed!");
        NavigationService.navigate('MovieDetails',{
                Movie: item
            })
    }
    return (
        <FlatList
            data={data}
            keyExtractor={(_, index) => index.toString()}
            numColumns={2}
            ListEmptyComponent={<Text style={styles.text}>This movie does not exist</Text>}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            style={styles.list}
            onEndReached={() => {
                if (hasMore)
                    getMoreMovies()
            }}
            onEndReachedThreshold={Platform.OS === 'android' ? 0.5 : 0}
            ListFooterComponent={hasMore && <ActivityIndicator color="black" size={30} />}
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.touchop} onPress={() => { moviePressHandler(item) }}>
                    <View >
                        <Image source={{ uri: `https://image.tmdb.org/t/p/original/${item.poster_path}` }} style={styles.image} />
                        <Text style={styles.movieName}>{item.original_title}</Text>
                        <Text style={styles.title}>Release Date: <Text style={styles.body}>{item.release_date}</Text></Text>
                        <Text ellipsizeMode='tail' numberOfLines={2} style={styles.title}>Overview: <Text style={styles.body}>{item.overview}</Text></Text>
                    </View>
                </TouchableOpacity>
            )} />

    )
}

const styles = StyleSheet.create({
    touchop: {
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingBottom: 10,
        width: '48%',
        marginVertical: 5
    },
    text: {
        textAlign: 'center',
        marginVertical: 50,
        marginHorizontal: 10
    },
    body: {
        fontWeight: '100',
    },
    title: {
        fontWeight: 'bold',
        marginHorizontal: 10
    },
    image: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    movieName: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 10
    },
    list: {
        // backgroundColor: 'red',
        // padding:5
    },
})

export default MoviesList;
