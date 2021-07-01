import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Keyboard, ActivityIndicator } from 'react-native';
import { getMovies, loadMoreMovies } from '../services/movies';
import { useDispatch, useSelector } from 'react-redux';
import { Button, SearchInput } from '../components';
import { MoviesList, SearchHistoryList } from '../blocks';
import Colors from '../constants/Colors';

const MoviesScreen = props => {
    const [searchText, setSearchText] = useState('');
    const [pageNumber, setPageNumber] = useState(2)
    const [showHistory, setShowHistory] = useState(false)
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch()

    const movies = useSelector(state => state.movies.movies);
    const hasMoreMovies = useSelector(state => state.movies.hasMore);
    const searchHistory = useSelector(state => state.movies.searchHistory);

    useEffect(() => {
        if (movies) {
            setIsLoading(false)
        }
    }, [movies])

    const searchHandler = async (text) => {
        setPageNumber(2)
        setIsLoading(true);
        getMovies(dispatch, text ?? searchText)
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

                <SearchInput
                    onChangeText={(text) => {
                        setSearchText(text)
                        setShowHistory(text === '')
                    }}
                    onFocus={() => setShowHistory(searchText === '')}
                    onBlur={() => setShowHistory(false)}
                    onPressRemoveIcon={() => { setSearchText(''); setShowHistory(true) }}
                    searchText={searchText}
                />

                {showHistory && searchHistory.length > 0 &&
                    <SearchHistoryList
                        data={searchHistory}
                        style={StyleSheet.searchHistory}
                        onSearchHistoryItemPress={(item) => {
                            setSearchText(item)
                            setShowHistory(false)
                            searchHandler(item)
                        }}
                    />
                }

                {(isLoading) ?
                    <View style={styles.acContainer}>
                        <ActivityIndicator size="large" color='white' />
                    </View>
                    :
                    (movies) &&
                    <MoviesList
                        data={movies}
                        getMoreMovies={loadMoreHandler}
                        hasMore={hasMoreMovies}
                    />
                }
                {searchText.length > 0 &&
                    <Button
                        title="Search"
                        style={styles.button}
                        onPress={() => { searchHandler() }}
                        disabled={searchText === ''}
                    />}

            </View>
        </View>

    )
}



const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#404040'
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

    acContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    button: {
        backgroundColor: Colors.primaryColor,
    },
})

export default MoviesScreen;
