import React from 'react'
import { Path } from 'react-native-svg';
import { iconFromPath } from './iconFromPath'
import { PathPropsWithFill } from './types'

const FilterIcon = iconFromPath<PathPropsWithFill>(({color, type}) => {
    return (
        type === 'filled'
            ?
        <Path
            d="M2 2.5C2 2.22386 2.22386 2 2.5 2H13.5C13.7761 2 14 2.22386 14 2.5V3.63795C14 3.87189 13.918 4.09842 13.7682 4.27813L9.11589 9.86093C9.04101 9.95079 9 10.0641 9 10.181V12.691C9 12.8804 8.893 13.0535 8.72361 13.1382L7.3618 13.8191C7.19558 13.9022 7 13.7813 7 13.5955V10.181C7 10.0641 6.95899 9.95079 6.88411 9.86093L2.23178 4.27813C2.08202 4.09842 2 3.87189 2 3.63795V2.5Z" 
            fill={color}
        />
            :
        <Path
            d="M2 2.5C2 2.22386 2.22386 2 2.5 2H13.5C13.7761 2 14 2.22386 14 2.5V3.63795C14 3.87189 13.918 4.09842 13.7682 4.27813L9.11589 9.86093C9.04101 9.95079 9 10.0641 9 10.181V12.691C9 12.8804 8.893 13.0535 8.72361 13.1382L7.3618 13.8191C7.19558 13.9022 7 13.7813 7 13.5955V10.181C7 10.0641 6.95899 9.95079 6.88411 9.86093L2.23178 4.27813C2.08202 4.09842 2 3.87189 2 3.63795V2.5Z" 
            stroke={color} stroke-width="1.25"
        />
    )
});

export default FilterIcon;
