import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import styles from './Styles/RecipeRowStyles'
import CustomIcon from '../Components/CustomIcon';

class RecipeRow extends Component {
    renderImage = () => {
        const {data} = this.props;
        let imageUrl = "https://via.placeholder.com/640x360"

        if(data && data.photo){
            imageUrl = data.photo;
        }
        return <Image source={{uri: imageUrl}} style={styles.recipeImage} />
    };
    render(){
        const {data} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    {this.renderImage()}
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.category}>{data.categoryName}</Text>
                    <Text style={styles.title}>{data.name}</Text>
                    <View style={styles.properties}>
                        <View style={styles.cell}>
                            <CustomIcon name="ic_duration" style={styles.cellIcon} />
                            <Text style={styles.cellText}>{data.duration} Minutos</Text>
                        </View>
                        <View style={styles.cell}>
                            <CustomIcon name="ic_difficulty" style={styles.cellIcon} />
                            <Text style={styles.cellText}>{data.complexity}</Text>
                        </View>
                        <View style={styles.cell}>
                            <CustomIcon name="ic_recipes_grey" style={styles.cellIcon} />
                            <Text style={styles.cellText}>{data.people} Personas</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default RecipeRow;