import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps207201Navigator from '../features/Maps207201/navigator';
import Additem207200Navigator from '../features/Additem207200/navigator';
import Maps207196Navigator from '../features/Maps207196/navigator';
import UserProfile207192Navigator from '../features/UserProfile207192/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps207201: { screen: Maps207201Navigator },
Additem207200: { screen: Additem207200Navigator },
Maps207196: { screen: Maps207196Navigator },
UserProfile207192: { screen: UserProfile207192Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
