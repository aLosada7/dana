import { Icon } from './Icon';
import type { IconProps } from './types';

export const BellIcon = ({ size, color }: IconProps) => (
    <Icon size={size} color={color}>
        <svg
            width="inherit"
            fill="inherit"
            focusable="false"
            viewBox="0 0 32 32"
            aria-labelledby="bell"
            role="img"
            aria-hidden="false"
        >
            <path d="M28.7071,19.293,26,16.5859V13a10.0136,10.0136,0,0,0-9-9.9492V1H15V3.0508A10.0136,10.0136,0,0,0,6,13v3.5859L3.2929,19.293A1,1,0,0,0,3,20v3a1,1,0,0,0,1,1h7v.7768a5.152,5.152,0,0,0,4.5,5.1987A5.0057,5.0057,0,0,0,21,25V24h7a1,1,0,0,0,1-1V20A1,1,0,0,0,28.7071,19.293ZM19,25a3,3,0,0,1-6,0V24h6Zm8-3H5V20.4141L7.707,17.707A1,1,0,0,0,8,17V13a8,8,0,0,1,16,0v4a1,1,0,0,0,.293.707L27,20.4141Z"></path>
        </svg>
    </Icon>
);
