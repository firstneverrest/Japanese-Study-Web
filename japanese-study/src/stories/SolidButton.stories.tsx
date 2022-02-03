import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SolidButton from '../components/SolidButton';

export default {
  title: 'SolidButton',
  component: SolidButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SolidButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SolidButton> = (args) => (
  <SolidButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  label: 'Get Started',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'primary',
  label: 'Back',
};
