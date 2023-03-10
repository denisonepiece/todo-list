import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from 'antd';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

console.log(typeof Button);

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>{args.children}</Button>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type: 'primary',
  children: 'Button',
};

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};
