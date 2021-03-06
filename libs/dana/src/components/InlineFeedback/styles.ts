import { textSans } from '@dana-foundations';
import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { InlineFeedbackThemeDefault } from './theme';

const inlineMessage = css`
    display: block;
    margin-top: 0.25rem;
    ${textSans.xsmall({ lineHeight: 'regular' })};
`;

export const inlineError = (
    InlineFeedback = InlineFeedbackThemeDefault.InlineFeedback
): SerializedStyles => css`
    ${inlineMessage};
    color: ${InlineFeedback.textError};
`;

export const inlineSuccess = (
    InlineFeedback = InlineFeedbackThemeDefault.InlineFeedback
): SerializedStyles => css`
    ${inlineMessage};
    color: ${InlineFeedback.textSuccess};
`;
