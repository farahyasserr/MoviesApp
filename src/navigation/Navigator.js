import { MovieDetails, MoviesScreen } from "../screens";
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Colors from '../constants/Colors';


const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
    },
    headerTitleStyle: {
        fontFamily: 'Arial',
    },
    headerBackTitleStyle: {
        // fontFamily: 'Arial'  //this changes el styling bt3 el text el byzhar f ios only ma3 el back button
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
};

const MoviesNavigator = createStackNavigator(
    {
        Movies: {
            screen: MoviesScreen,
            navigationOptions:{
                headerTitleAlign: 'center'
            }
        },
        MovieDetails: {
            screen: MovieDetails,
        }
    }, {
    defaultNavigationOptions: defaultStackNavOptions

});

export default createAppContainer(MoviesNavigator);
