import React, { useState, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, Keyboard, Button, TouchableWithoutFeedback, FlatList, ActivityIndicator, Text } from 'react-native';
import { getMovies } from '../services/movies';
import { useDispatch, useSelector } from 'react-redux';
import MoviesList from '../components/moviesList';


const MoviesScreen = props => {

    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch()

    useEffect(async () => {
        setIsLoading(true);
        await getMovies(dispatch);
        setIsLoading(false);
    }, [])

    const movies = useSelector(state => state.movies.movies);
    // console.log("movies", movies);

    return (
        (isLoading) ?
            <View style={styles.screen}>
                <ActivityIndicator size="large" color='#eee' />
            </View> :
            <View style={styles.screen}>
                <View style={styles.container}>
                    <MoviesList
                        data={movies} />
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#ddd'
    },
    container: {
        flex: 1,
        marginLeft: 20, marginRight: 20, marginTop: 20,
        backgroundColor: '#ddd',
        padding: 10
    },
    item: {
        backgroundColor: '#eee',
        marginVertical: 5,
        flex: 1,
        borderRadius: 10,
        padding: 10
    }
})

export default MoviesScreen;
