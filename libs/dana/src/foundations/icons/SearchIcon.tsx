import { Icon } from './Icon';
import type { IconProps } from './types';

export const SearchIcon = ({ size, color }: IconProps) => (
    <Icon size={size} color={color}>
        <svg
            width="inherit"
            fill="inherit"
            focusable="false"
            viewBox="0 0 32 32"
            aria-labelledby="cesta"
            role="img"
            aria-hidden="false"
        >
            <path d="M29,27.5859l-7.5521-7.5521a11.0177,11.0177,0,1,0-1.4141,1.4141L27.5859,29ZM4,13a9,9,0,1,1,9,9A9.01,9.01,0,0,1,4,13Z"></path>
        </svg>
    </Icon>
);
