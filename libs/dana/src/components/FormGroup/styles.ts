import { css } from '@emotion/react';

export const inputGroup = css`
    display: inline-flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;

    :not(:first-of-type) {
        margin-top: 20px;
    }
`;