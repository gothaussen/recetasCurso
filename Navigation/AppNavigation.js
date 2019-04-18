import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator
} from "react-navigation";
import GenericScreen from '../Containers/GenericScreen';
import ExploreScreen from "../Containers/ExploreScreen";
import CategoriesScreen from "../Containers/CategoriesScreen";

const tabNav = createBottomTabNavigator({
    Explore: {screen: ExploreScreen},
    Categories: {screen: CategoriesScreen},
    Favorites: {screen: GenericScreen}
}, {
    headerMode: "none",
    initialRouteName: "Explore",
    defaultNavigationOptions: {
        tabBarVisible: false
    }
});
const AppNavigator = createStackNavigator(
    {
        Home: {screen: tabNav}
    },
    {
        headerMode: 'none',

    }
);

const App = createAppContainer(AppNavigator);

export default App;