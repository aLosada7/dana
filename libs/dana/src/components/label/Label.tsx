import { LabelHTMLAttributes } from 'react';
import useThemeContext from '../../foundations/theme/useThemeContext';
import { Props } from '../../helpers';
import { label, labelText } from './styles';
import { SupportingText } from './SupportingText';

export interface LabelProps
    extends LabelHTMLAttributes<HTMLLabelElement>,
        Props {
    /**
     * The label text
     */
    text: string;
    /**
     * Additional text or component that appears below the label
     */
    supporting?: string;
    /**
     * Adds the word "Optional" after the label
     */
    optional?: boolean;
    /**
     * Visually hides the label
     */
    hideLabel?: boolean;
}

export const Label = ({
    text,
    supporting,
    optional = false,
    hideLabel = false,
    cssOverrides,
    children,
    ...props
}: LabelProps) => {
    const theme = useThemeContext();
    return (
        <label css={() => [label, labelText(theme), cssOverrides]} {...props}>
            {/*<Text hideLabel={hideLabel} optional={optional} />*/}
            {supporting ? (
                <SupportingText hideLabel={hideLabel}>
                    {supporting}
                </SupportingText>
            ) : (
                ''
            )}
            {children}
            {text}
        </label>
    );
};
