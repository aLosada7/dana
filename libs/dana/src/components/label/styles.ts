import { css } from '@emotion/react';
import { defaultTheme } from '../../foundations/theme/defaultTheme';

import { textSans } from '../../foundations/typography/api';

export const label = css`
    display: inline-block;
    margin-bottom: 0.5rem;
`;

export const labelText = ({ theme = defaultTheme }) => css`
    ${textSans.small({ fontWeight: 'regular', lineHeight: 'loose' })};
    color: ${theme.label.text};
`;

export const optionalText = ({ theme = defaultTheme }) => css`
    ${textSans.small({ lineHeight: 'regular' })};
    color: ${theme.label.optionalText};
    font-style: italic;
`;

export const supportingText = ({ theme = defaultTheme }) => css`
    ${textSans.small({ lineHeight: 'regular' })};
    color: ${theme.label.supportingText};
    margin: 2px 0 0;
`;
