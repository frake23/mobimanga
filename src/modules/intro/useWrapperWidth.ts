import { useWindowDimensions } from "react-native";
import spacings from "../../theme/spacings";

export function useWrapperWidth() {
    const {width} = useWindowDimensions();
    
    return width - 2 * spacings.xs;
}