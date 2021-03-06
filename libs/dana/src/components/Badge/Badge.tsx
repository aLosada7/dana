import { SerializedStyles } from '@emotion/react';

import { useThemeContext } from '@dana-theme';

import { DanaColor } from '../../foundations/colors';
import { badge } from './styles';

export type IBadgeVariant = 'filled' | 'outlined';

export interface BadgeProps {
    text: string;
    color?: DanaColor;
    cssOverrides?: SerializedStyles | SerializedStyles[];
}

export const Badge = (props: BadgeProps) => {
    const { text, color, cssOverrides, ...rest } = {
        ...props,
    };

    const { theme } = useThemeContext();

    return (
        <span css={[badge(theme, color), cssOverrides]} {...rest}>
            {text}
        </span>
    );
};
