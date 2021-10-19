interface IRouteStruc {
  title: string;
  component: any;
  options?: any;
}

type TRoutePlist = IRouteStruc[];

//Headers
//No show
const NotHeader = {
  headerShown: false,
};

//Import Screens
import MainScreen from '../screens/MainScreen';
import TODOScreen from '../screens/TODOScreen';
import SyncScreen from '../screens/SyncScreen';

export const RouteList: TRoutePlist = [
  {
    title: 'MainScreen',
    component: MainScreen,
    options: NotHeader,
  },
  {
    title: 'TODOScreen',
    component: TODOScreen,
  },
  {
    title: 'SyncScreen',
    component: SyncScreen,
  },
  // sync: {
  //     title: "SyncScreen",
  //     component: MainScreen
  // },
];
