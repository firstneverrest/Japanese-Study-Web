import React from 'react';
import '../styles/global.css';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SolidButton from '../components/SolidButton';

export default {
  title: 'SolidButton',
  component: SolidButton,
} as ComponentMeta<typeof SolidButton>;

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

Primary.storyName = 'Pink Button';
