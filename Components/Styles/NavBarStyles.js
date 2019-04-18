import {StyleSheet} from 'react-native';
import {Metrics, Colors, Fonts} from '../../Theme'

export default StyleSheet.create({
    navBar: {
        marginTop: Metrics.statusBarHeight,
        height: Metrics.navBarHeight,
        backgroundColor: Colors.whiteFull,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    title: {
        ...Fonts.style.recipeNameCard,
        fontWeight: "bold",
    },
    favIco: {

    },
    leftContainer: {
        width: Metrics.buttonSize,
        alignItems: 'center',
        justifyContent: 'center'
    },
    rightContainer: {
        width: Metrics.buttonSize,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleWrapper:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    favorite: {
        color: Colors.darkOrange
    }
});