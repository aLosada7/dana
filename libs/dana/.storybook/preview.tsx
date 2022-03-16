import { addDecorator } from '@storybook/react';

import { viewport } from './preview/viewport';
import { backgrounds } from './preview/backgrounds';
import themeProvider from '../src/foundations/theme/themeDecorator';

export const parameters = {
    viewport,
    backgrounds,
};

addDecorator(themeProvider);
