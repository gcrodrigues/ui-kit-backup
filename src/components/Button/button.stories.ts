import type { Meta, StoryObj } from '@storybook/react';

import Button from '../Button';
import { ButtonVariants } from './types';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: ButtonVariants.Default
  }
};

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: ButtonVariants.Primary
  }
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: ButtonVariants.Secondary
  }
};

export const Success: Story = {
  args: {
    children: 'Button',
    variant: ButtonVariants.Success
  }
};

export const Warning: Story = {
  args: {
    children: 'Button',
    variant: ButtonVariants.Warning
  }
};

export const Info: Story = {
  args: {
    children: 'Button',
    variant: ButtonVariants.Info
  }
};

export const Ghost: Story = {
  args: {
    children: 'Button',
    variant: ButtonVariants.Ghost
  }
};
