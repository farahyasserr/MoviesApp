import React from 'react';
import { View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchInput = ({
    onChangeText,
    onFocus,
    onBlur,
    onPressRemoveIcon,
    searchText
}) => {
    return (
        <View style={styles.inputContainer}>
            <Icon name="search" size={20} color="#A8A8A8" style={styles.searchIcon} />
            <TextInput
                placeholder="Search..."
                style={styles.searchBar}
                underlineColorAndroid="transparent"
                value={searchText}
                onChangeText={onChangeText}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <Icon name="remove" size={20} color="#A8A8A8" onPress={onPressRemoveIcon} style={styles.removeIcon} />
        </View>
    )}

    const styles = StyleSheet.create({
        inputContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: '#ddd',
            borderRadius: 20,
            marginVertical: 5,
            width: '100%'
        },
        searchBar: {
            height: 45,
            textAlignVertical: 'bottom',
            flex: 1,
            borderBottomColor: 'transparent',
        },
        removeIcon: {
            marginRight: 12
        },
        searchIcon: {
            marginLeft: 10,
            marginRight: 5
        },
    })


    export default SearchInput;
