import React, { useState, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, Keyboard, Button, TouchableWithoutFeedback, FlatList, ActivityIndicator, Text, TextInput } from 'react-native';
import { getMovies } from '../services/movies';
import { useDispatch, useSelector } from 'react-redux';
import MoviesList from '../components/moviesList';


const MoviesScreen = props => {

    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch()
    const [searchText, setSearchText] = useState('');

    const movies = useSelector(state => state.movies.movies);

    const searchHandler = async () => {
        setIsLoading(true);
        getMovies(dispatch, searchText, 1).finally(()=>{setIsLoading(false)})
        // setIsLoading(false);
    }

    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <TextInput
                    placeholder="Search..."
                    style={styles.searchBar}
                    value={searchText}
                    onChangeText={(text) => { setSearchText(text) }}
                />
                <Button
                    title="search"
                    onPress={() => { searchHandler() }}
                />

                {(isLoading) ?
                    <View style={styles.acContainer}>
                        <ActivityIndicator size="large" color='black' />
                    </View>
                    :
                    (movies) &&
                    <MoviesList
                        data={movies} />}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        // backgroundColor: '#ddd',
    },
    container: {
        flex: 1,
        marginHorizontal: 20,
        // backgroundColor: '#ddd',
        // padding: 10
    },
    item: {
        backgroundColor: '#eee',
        marginVertical: 5,
        flex: 1,
        borderRadius: 10,
        // padding: 10
    },
    searchBar: {

    },
    acContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
})

export default MoviesScreen;
