import React from 'react'
import { Path } from 'react-native-svg';
import { iconFromPath } from './iconFromPath'

const EditIcon = iconFromPath(({color}) => {
    return (
        <>
            <Path 
                d="M7.66153 1.85931H5.16886C3.11886 1.85931 1.83353 3.31065 1.83353 5.36531V10.908C1.83353 12.9626 3.11286 14.414 5.16886 14.414H11.0515C13.1082 14.414 14.3875 12.9626 14.3875 10.908V8.22265" 
                stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"
            />
            <Path 
                fill-rule="evenodd" clip-rule="evenodd" 
                d="M5.8852 7.28059L10.8672 2.29859C11.4879 1.67859 12.4939 1.67859 13.1145 2.29859L13.9259 3.10992C14.5465 3.73059 14.5465 4.73725 13.9259 5.35725L8.91987 10.3633C8.64853 10.6346 8.28053 10.7873 7.89653 10.7873H5.3992L5.46187 8.26725C5.4712 7.89659 5.62253 7.54325 5.8852 7.28059Z"
                stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"
            />
            <Path d="M10.1101 3.06833L13.1541 6.11233" stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
        </>
    )
});

export default EditIcon;
