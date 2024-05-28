import { Meta, StoryFn } from '@storybook/angular';
import { ButtonComponent } from '../button/button.component';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
} as Meta<ButtonComponent>;

const Template: StoryFn<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',

};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',

};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Large Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Small Button',
};
