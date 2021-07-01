import React from 'react';
import { Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const SearchHistoryList = ({
    data,
    onSearchHistoryItemPress
}) => {

    return (
        <FlatList
            data={data}
            keyExtractor={(_, index) => index.toString()}
            style={styles.list}
            keyboardShouldPersistTaps={"always"}
            ListHeaderComponent={<Text style={styles.header}>Recent searches</Text>}
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.container} onPress={() => onSearchHistoryItemPress(item)}>
                    <Text style={styles.textStyle}>{item}</Text>
                </TouchableOpacity>
            )} />

    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
        paddingBottom: 5
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
    list: {
        backgroundColor: 'white',
        maxHeight: 200
    },
    header:{
        alignSelf: 'center',
        color: '#A8A8A8'
    }
})

export default SearchHistoryList;
