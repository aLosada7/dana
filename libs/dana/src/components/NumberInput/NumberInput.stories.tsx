import { NumberInput, NumberInputProps } from './NumberInput';
import { asPlayground, asChromaticStory } from '../../lib/story-intents';
import type { Story } from '../../lib/storybook-emotion-10-fixes';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Components/Forms/Number Input',
    component: NumberInput,
    args: {
        label: 'Quantity',
    },
};

const Template: Story<NumberInputProps> = (args: NumberInputProps) => (
    <NumberInput {...args} onChange={action('onChange')} />
);

// *****************************************************************************

export const Playground = Template.bind({});
asPlayground(Playground);

// *****************************************************************************

export const DefaultNumberInput = Template.bind({});
asChromaticStory(DefaultNumberInput);

// *****************************************************************************

export const MaxAndMinNumberInput = Template.bind({});
MaxAndMinNumberInput.args = {
    min: 50,
    max: 100,
};
asChromaticStory(MaxAndMinNumberInput);
