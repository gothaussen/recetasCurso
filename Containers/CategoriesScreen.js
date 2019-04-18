/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import styles from './Styles/GenericScreenStyles';
import NavBar from '../Components/NavBar';
import CategoryRow from '../Components/CategoriesRow';
import TabBar from "../Components/TabBar";

const categoriesData = [
    {
        id: "1",
        name: "Fish"
    },
    {
        id: "2",
        name: "Meat"
    },
    {
        id: "3",
        name: "BreakFast"
    },
    {
        id: "4",
        name: "Fruit"
    },
    {
        id: "5",
        name: "Soup"
    },
    {
        id: "6",
        name: "Dessert"
    },
    {
        id: "7",
        name: "Deverages"
    },
    {
        id: "8",
        name: "Pasta"
    },
    {
        id: "9",
        name: "Main dish"
    },
    {
        id: "10",
        name: "Salad"
    },
    {
        id: "11",
        name: "Salad"
    }
];

export default class ExploreScreen extends Component<Props> {

    constructor(props){
        super(props);
    }

    renderRow = ({item}) => {
        return <CategoryRow data={item} />
    };

    keyExtractor = (item, index) => item.id;
    renderList = () => {
        return (
            <FlatList
                data={categoriesData}
                renderItem={this.renderRow}
                keyExtractor={this.keyExtractor}
            />
        )
    };

  render() {
    return(
        <View>
          <NavBar
              title="Categories"
              style={styles.navBar}
              leftButton={false}
          />
            <View style={styles.container}>{this.renderList()}</View>
            <TabBar selected="categories" />
        </View>
    );
  }
}

