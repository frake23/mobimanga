import React from 'react'
import { Path } from 'react-native-svg';
import { iconFromPath } from './iconFromPath'
import { PathPropsWithSwitch } from './PathProps'

const EyeIcon = iconFromPath<PathPropsWithSwitch>(({color, type}) => {
    return (
        type === 'on'
            ?
        <>
            <Path 
                fill-rule="evenodd" clip-rule="evenodd" 
                d="M10.1077 8.0354C10.1077 9.1994 9.16367 10.1427 7.99967 10.1427C6.83567 10.1427 5.89233 9.1994 5.89233 8.0354C5.89233 6.87073 6.83567 5.9274 7.99967 5.9274C9.16367 5.9274 10.1077 6.87073 10.1077 8.0354Z"
                stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"
            />
            <Path 
                fill-rule="evenodd" clip-rule="evenodd" 
                d="M7.99868 12.9033C10.5373 12.9033 12.8593 11.0779 14.1667 8.03527C12.8593 4.9926 10.5373 3.16727 7.99868 3.16727H8.00134C5.46268 3.16727 3.14068 4.9926 1.83334 8.03527C3.14068 11.0779 5.46268 12.9033 8.00134 12.9033H7.99868Z"
                stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"
            />
        </>
            :
        <>
            <Path 
                d="M6.50708 9.57787C6.12374 9.1952 5.89041 8.6752 5.89041 8.09187C5.89041 6.9232 6.83174 5.9812 7.99974 5.9812C8.57774 5.9812 9.10974 6.2152 9.48641 6.59787"
                stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"
            />
            <Path 
                d="M10.0699 8.46594C9.91521 9.32594 9.23787 10.0046 8.37854 10.1606" 
                stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"
            />
            <Path 
                d="M4.4364 11.6482C3.3784 10.8175 2.4824 9.6042 1.83307 8.09154C2.48907 6.5722 3.39107 5.3522 4.45574 4.51487C5.51374 3.67754 6.7344 3.22287 7.99974 3.22287C9.2724 3.22287 10.4924 3.6842 11.5571 4.52754"
                stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"
            />
            <Path 
                d="M12.9651 5.99387C13.4237 6.6032 13.8271 7.30653 14.1664 8.0912C12.8551 11.1292 10.5377 12.9592 7.99974 12.9592C7.4244 12.9592 6.85707 12.8659 6.31174 12.6839"
                stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"
            />
            <Path d="M13.258 2.83307L2.742 13.3491" stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
        </>
    )
});

export default EyeIcon;
