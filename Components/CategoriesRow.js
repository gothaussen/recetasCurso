import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './Styles/CategoriesStyles'

class CategoriesRow extends Component {
    render(){
        const {data} = this.props;
        return (
            <View style={styles.categoryRow}>
                <Text style={styles.categoryText}>{data.name}</Text>
            </View>
        );
    }
}

export default CategoriesRow;