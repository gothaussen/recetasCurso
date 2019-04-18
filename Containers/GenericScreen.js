/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from './Styles/GenericScreenStyles';
import NavBar from '../Components/NavBar';
import TabBar from "../Components/TabBar";

type Props = {};
export default class GenericScreen extends Component<Props> {

    static navigationOptions = {
        title: "Home"
    };
    constructor(props){
        super(props);
        this.state = {
            favorite: false
        };
    }

    pressFavorite = () => {
        const {favorite} = this.state;
        this.setState({
            favorite: !favorite
        });
    }

  render() {
        const {favorite} = this.state;
    return(
        <View styles={[styles.screen.mainScreen]}>
          <NavBar
              title="Titulo"
              style={styles.navBar}
              leftButton={true}
              rightButton={true}
              favorite={favorite}
              onPressFavorite={this.pressFavorite}
          />
          <View style={styles.container}>{this.renderList()}</View>
          <TabBar selected="explore"/>
        </View>
    );
  }
}

