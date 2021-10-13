interface IRouteStruc {
    title: string;
    component: any;
    options?: any;
}

type TRoutePlist = IRouteStruc[];

//Headers
//No show
const NotHeader = {
    headerShown: false
}


//Import Screens
import MainScreen from '../screens/MainScreen';
import TODOScreen from '../screens/TODOScreen';


export const RouteList: TRoutePlist = [
    {
        title: "MainScreen",
        component: MainScreen,
        options: NotHeader
    },
    {
        title: "TODOScreen",
        component: TODOScreen
    },
    // sync: {
    //     title: "SyncScreen",
    //     component: MainScreen
    // },
];