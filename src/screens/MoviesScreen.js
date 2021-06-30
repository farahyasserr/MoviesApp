import React, { useState, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, Keyboard, TouchableWithoutFeedback, FlatList, ActivityIndicator, Text, TextInput } from 'react-native';
import { getMovies, loadMoreMovies } from '../services/movies';
import { useDispatch, useSelector } from 'react-redux';
import MoviesList from '../components/moviesList';
import Button from '../components/button';
import Icon from 'react-native-vector-icons/FontAwesome';

const MoviesScreen = props => {

    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch()
    const [searchText, setSearchText] = useState('');
    const [pageNumber, setPageNumber] = useState(2)
    const movies = useSelector(state => state.movies.movies);
    const hasMoreMovies = useSelector(state => state.movies.hasMore);
    const loadingMore = useSelector(state => state.movies.loadingMore);


    useEffect(() => {
        if (movies) {
            setIsLoading(false)
        }

    }, [movies])

    const searchHandler = async () => {
        setPageNumber(2)
        setIsLoading(true);
        getMovies(dispatch, searchText)
        // setIsLoading(false);
        Keyboard.dismiss();
    }
    const loadMoreHandler = () => {
        if (hasMoreMovies) {
            loadMoreMovies(dispatch, searchText, pageNumber)
            setPageNumber(pageNumber + 1)
        }
    }

    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Icon name="search" size={20} color="#A8A8A8" style={styles.icon} />
                    <TextInput
                        placeholder="Search..."
                        style={styles.searchBar}
                        underlineColorAndroid="transparent"
                        value={searchText}
                        onChangeText={(text) => { setSearchText(text) }}
                    />
                </View>
                <Button
                    title="Search"
                    style={styles.button}
                    onPress={() => { searchHandler() }}
                />

                {(isLoading) ?
                    <View style={styles.acContainer}>
                        <ActivityIndicator size="large" color='black' />
                    </View>
                    :
                    (movies) &&
                    <MoviesList
                        data={movies}
                        getMoreMovies={loadMoreHandler}
                        loadingMore={loadingMore}
                    />}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    container: {
        flex: 1,
        marginHorizontal: 20,
    },
    item: {
        backgroundColor: '#eee',
        marginVertical: 5,
        flex: 1,
        borderRadius: 10,
    },
    searchBar: {
        height: 45,
        textAlignVertical: 'bottom',
        flex: 1,
        borderBottomColor: 'transparent',
    },
    acContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    button: {
        backgroundColor: '#000099'
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#ddd',
        borderRadius: 20,
        marginVertical: 5,
        // paddingHorizontal: 15,
        width: '100%'
    },
    icon: {
        marginLeft: 10,
        marginRight: 5
    }
})

export default MoviesScreen;
