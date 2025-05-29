import { UITag } from './UITag';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof UITag> = {
  title: 'Atoms/Tag',
  component: UITag,
  tags: ['autodocs'],
  argTypes: {
    ref: { table: { disable: true } },
    withIcon: {
      control: 'boolean',
      defaultValue: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof UITag>;

export const Primary: Story = {
  args: {
    children: 'Tag',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Tag',
    variant: 'secondary',
  },
};

export const Success: Story = {
  args: {
    children: 'Tag',
    variant: 'success',
  },
};

export const Info: Story = {
  args: {
    children: 'Tag',
    variant: 'info',
  },
};

export const Warning: Story = {
  args: {
    children: 'Tag',
    variant: 'warning',
  },
};

export const Error: Story = {
  args: {
    children: 'Tag',
    variant: 'error',
  },
};
