import React, { useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import { Button } from '../components';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const MovieDetails = props => {
    const item = props.navigation.getParam('Movie');
    console.log("hena", item);

    useEffect(() => {
        props.navigation.setParams({ movieTitle: item.title });
    }, [item])

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: `https://image.tmdb.org/t/p/original/${item.poster_path}` }} style={styles.image} />

            <View style={styles.details}>
                <Text style={styles.movieName}>{item.original_title}</Text>
               
                <Text style={styles.title}><Text style={styles.details}>{item.overview}</Text></Text>

               
                <View style={styles.detailsContainer}>
                    <View style={styles.innerContainer}>
                        <Icon name="line-chart" size={20} color="#A8A8A8" style={styles.icon} />
                        <Text style={styles.title}>Popularity: <Text style={styles.details}>{item.popularity}</Text></Text>
                    </View>
                    <View style={styles.innerContainer}>
                    <Icon name="heart-o" size={20} color="#A8A8A8" style={styles.icon} />
                    <Text style={styles.title}>Rating: <Text style={styles.details}>{item.vote_average}</Text></Text>
                    </View>
                </View>
                {/* <View style={styles.innerContainer}>
                        <Icon name="calendar" size={16} color="#A8A8A8" style={styles.icon} />
                <Text style={styles.title}><Text style={styles.details}>{item.release_date}</Text></Text>
                </View>
                 */}

                <Button title="Watch now" style={{ backgroundColor: Colors.primaryColor }} onPress={() => { alert("Coming soon!") }} />
            </View>
        </ScrollView>
    )
}

MovieDetails.navigationOptions = navData => {
    const movieName = navData.navigation.getParam('movieTitle');

    return {
        headerTitle: movieName
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    title: {
        fontWeight: 'bold',
        color: 'black'
    },
    details: {
        flex: 1,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        fontWeight: 'normal'
    },
    image: {
        width: '100%',
        height: 200,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    subcontainer: {
        flex: 1,
        // backgroundColor: 'blue'
    },
    movieName: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    },
    detailsContainer: {
        marginVertical: 10,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly'
    },
    innerContainer: {
        flexDirection: 'row',

    },
    icon: {
        marginRight: 5
    }
})

export default MovieDetails;