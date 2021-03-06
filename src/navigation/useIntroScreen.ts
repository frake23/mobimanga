import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const introKey = 'first_launch';

function useIntroScreen() {
    const [isIntro, setIntro] = useState(false);
    useEffect(() => {
        const getKey = async () => {
            const firstLaunch = await AsyncStorage.getItem(introKey);
            if (firstLaunch !== 'false')
                setIntro(true)
        };
        
        getKey();
    }, []);
    
    const exitIntro = async () => {
        setIntro(false);
        await AsyncStorage.setItem(introKey, 'false');
    };

    return {isIntro, exitIntro}
}

export default useIntroScreen;
