import { Icon } from './Icon';
import type { IconProps } from './types';

export const SuccessIcon = ({ size, color }: IconProps) => (
    <Icon size={size} color={color}>
        <svg
            width="inherit"
            fill="inherit"
            focusable="false"
            viewBox="0 0 24 24"
            aria-labelledby="cesta"
            role="img"
            aria-hidden="false"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15 26C21.0751 26 26 21.0751 26 15C26 8.92487 21.0751 4 15 4C8.92487 4 4 8.92487 4 15C4 21.0751 8.92487 26 15 26ZM13.05 17.3615L10.5523 14.9754L9.67347 15.8541L12.6526 20.025H13.1516L21.3527 11.5371L20.45 10.657L13.05 17.3615Z"
            ></path>{' '}
        </svg>
    </Icon>
);
