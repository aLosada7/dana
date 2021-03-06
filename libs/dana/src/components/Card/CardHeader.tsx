import { SerializedStyles } from '@emotion/react';
import { ReactElement } from 'react';
import { Text } from '../text';
import { cardHeader } from './styles';

export interface CardHeaderProps {
    children: ReactElement | string;
    cssOverrides?: SerializedStyles | SerializedStyles[];
}

export const CardHeader = ({ children, ...props }: CardHeaderProps) => {
    return (
        <div css={cardHeader}>
            <Text size="xsm" {...props}>
                {children}
            </Text>
        </div>
    );
};
