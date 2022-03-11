import { cloneElement, ReactElement } from 'react';
import { flexText, text, textColorCss } from './styles';
import useThemeContext from '../../foundations/theme/useThemeContext';
import { DanaColor } from '../../foundations/colors/types';

export type IFontSize =
    | 'xxsm'
    | 'xsm'
    | 'sm'
    | 'md'
    | 'lg'
    | 'h3'
    | 'h4'
    | 'h5';
export type ITextAlign = 'inherit' | 'left' | 'center' | 'right';
export interface TextProps {
    mt?: number;
    // in titles only soon
    mb?: number;
    size?: IFontSize;
    color?: DanaColor;
    align?: ITextAlign;
    icon?: ReactElement;
    cssOverrides?: any;
    children: ReactElement | string;
}

export const Text = ({
    mt = 0,
    mb = 0,
    size = 'lg',
    color,
    align = 'inherit',
    icon,
    children,
    cssOverrides,
    ...props
}: TextProps) => {
    const { theme } = useThemeContext();
    const textColor = color || (theme ? theme.text : 'dark');

    return (
        <div
            css={[
                text(mt, mb, size, align),
                textColorCss({ theme, color: textColor }),
                icon ? flexText : null,
                cssOverrides,
            ]}
        >
            {icon ? cloneElement(icon, { color: 'inherit' }) : null}
            {children}
        </div>
    );
};
