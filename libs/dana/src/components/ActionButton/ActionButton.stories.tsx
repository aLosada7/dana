import { action } from '@storybook/addon-actions';
import { CloseIcon } from '../../foundations/icons/CloseIcon';

import { asChromaticStory } from '../../lib/story-intents';
import type { Story } from '../../lib/storybook-emotion-10-fixes';

import { ActionButton, ActionButtonProps } from './ActionButton';

export default {
    title: 'Components/Navigation/ActionButtons',
    component: ActionButton,
};

const CloseButton: Story<ActionButtonProps> = () => (
    <ActionButton style={{ margin: '2rem' }} onClick={action('onClick')}>
        <CloseIcon />
    </ActionButton>
);

export const Default = CloseButton.bind({});
asChromaticStory(Default);
