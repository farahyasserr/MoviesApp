import React , {useEffect , useCallback} from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Colors from '../constants/Colors';

const MovieDetails = props => {
    const item = props.navigation.getParam('Movie');
    console.log("hena",item);

    useEffect(() => {
        props.navigation.setParams({movieTitle: item.title});
    }, [item])

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: `https://image.tmdb.org/t/p/original/${item.poster_path}` }} style={styles.image} />

            <View style={styles.details}>
                        <Text style={styles.movieName}>{item.original_title}</Text>
                        <Text style={styles.title}><Text style={styles.details}>{item.overview}</Text></Text>
                        <Text style={styles.title}>Popularity: <Text style={styles.details}>{item.popularity}</Text></Text>
                        <Text style={styles.title}>Rating: <Text style={styles.details}>{item.vote_average}</Text></Text>
                        <Text style={styles.title}>Release Date: <Text style={styles.details}>{item.release_date}</Text></Text>

            </View>
        </ScrollView>
    )
}

MovieDetails.navigationOptions = navData => {
    const movieName = navData.navigation.getParam('movieTitle');
    console.log("name",movieName);

    return {
        headerTitle: movieName  
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'yellow',
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    details: {
        flex: 1,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'space-evenly'
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
        fontSize: 20
    },
    listItem:{
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
})

export default MovieDetails;