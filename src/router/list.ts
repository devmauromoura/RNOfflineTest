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


export const RouteList: TRoutePlist = [
    {
        title: "MainScreen",
        component: MainScreen,
        options: NotHeader
    },
    // item: {
    //     title: "ItemsScreen",
    //     component: MainScreen
    // },
    // sync: {
    //     title: "SyncScreen",
    //     component: MainScreen
    // },
];