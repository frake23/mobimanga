import { View } from "react-native-animatable";
import FavouriteIcon from "../icons/FavouriteIcon";
import HistoryIcon from "../icons/HistoryIcon";
import HomeIcon from "../icons/HomeIcon";
import ProfileIcon from "../icons/ProfileIcon";
import SearchIcon from "../icons/SearchIcon";
import { HomeScreen } from "../modules/home/HomeController";

const sectionInfo = {
    Home: {
        Icon: HomeIcon,
        title: 'Главная',
        Component: HomeScreen
    },
    Search: {
        Icon: SearchIcon,
        title: 'Поиск',
        Component: View,
    },
    Favourite: {
        Icon: FavouriteIcon,
        title: 'Избранное',
        Component: View
    },
    History: {
        Icon: HistoryIcon,
        title: 'История',
        Component: View
    },
    Profile: {
        Icon: ProfileIcon,
        title: 'Профиль',
        Component: View
    }
}

export default sectionInfo;
