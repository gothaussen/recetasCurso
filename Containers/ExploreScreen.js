/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import styles from './Styles/GenericScreenStyles';
import NavBar from '../Components/NavBar';
import RecipeRow from '../Components/RecipeRow';
import TabBar from "../Components/TabBar";

const recipeDate = [
    {
        "id": "11111",
        "name": "Escovitch Fish",
        "categoryId": "1",
        "categoryName": "Fish",
        "duration": 11,
        "complexity": "Hard",
        "people": 3,
        "recommended": true,
        "favorite": true,
        "ingredients": "2 eggs\r\n4 tomatoes\r\nsalt\r\npepper",
        "description":
            "Rinse fish; rub with lemmon or lime, seasoned with salt and pepper or use your favorite" +
            "making sure the garlic does not burn \r\nThen add onion, bell peppers, thyme, scotch bonner",
        "photo": "https://www.themealdb.com/images/media/meals/1520084413.jpg"
    },
    {
        "id": "22222",
        "name": "Escovitch Fish",
        "categoryId": "1",
        "categoryName": "Fish",
        "duration": 11,
        "complexity": "Hard",
        "people": 3,
        "recommended": true,
        "favorite": true,
        "ingredients": "2 eggs\r\n4 tomatoes\r\nsalt\r\npepper",
        "description":
            "Rinse fish; rub with lemmon or lime, seasoned with salt and pepper or use your favorite" +
            "making sure the garlic does not burn \r\nThen add onion, bell peppers, thyme, scotch bonner",
        "photo": "https://www.themealdb.com/images/media/meals/1520084413.jpg"
    },
    {
        "id": "33333",
        "name": "Escovitch Fish",
        "categoryId": "1",
        "categoryName": "Fish",
        "duration": 11,
        "complexity": "Hard",
        "people": 3,
        "recommended": true,
        "favorite": true,
        "ingredients": "2 eggs\r\n4 tomatoes\r\nsalt\r\npepper",
        "description":
            "Rinse fish; rub with lemmon or lime, seasoned with salt and pepper or use your favorite" +
            "making sure the garlic does not burn \r\nThen add onion, bell peppers, thyme, scotch bonner",
        "photo": "https://www.themealdb.com/images/media/meals/1520084413.jpg"
    },
    {
        "id": "444444",
        "name": "Escovitch Fish",
        "categoryId": "1",
        "categoryName": "Fish",
        "duration": 11,
        "complexity": "Hard",
        "people": 3,
        "recommended": true,
        "favorite": true,
        "ingredients": "2 eggs\r\n4 tomatoes\r\nsalt\r\npepper",
        "description":
            "Rinse fish; rub with lemmon or lime, seasoned with salt and pepper or use your favorite" +
            "making sure the garlic does not burn \r\nThen add onion, bell peppers, thyme, scotch bonner",
        "photo": "https://www.themealdb.com/images/media/meals/1520084413.jpg"
    }
];

export default class ExploreScreen extends Component<Props> {

    constructor(props){
        super(props);
    }

    keyExtractor = (item, index) => item.id;
    renderList = () => {
        return (
            <FlatList
                keyExtractor={this.keyExtractor}
                data={recipeDate}
                renderItem={({item}) => <RecipeRow data={item} />}
            />
        )
    };

  render() {
    return(
        <View style={[styles.mainScreen]}>
            <NavBar
                title={`Explore`}
                style={styles.navBar}
                leftButton={false}
                rightButton={false}
            />
            <View style={styles.container}>{this.renderList()}</View>
            <TabBar selected="explore"/>
        </View>
    );
  }
}

