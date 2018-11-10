import { createStackNavigator } from 'react-navigation';
import { HomeContainers, LoginContainers, MapContainers, ListContainers} from './containers';

const AppNavigator = createStackNavigator({
  Login: { screen: LoginContainers },
  List: { screen: ListContainers },
  Home: { screen: HomeContainers},
  Map: { screen: MapContainers },
});

export default AppNavigator;