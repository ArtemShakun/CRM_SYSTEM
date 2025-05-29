import { UIStatusTag } from './UIStatusTag';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof UIStatusTag> = {
  title: 'Atoms/StatusTag',
  component: UIStatusTag,
  tags: ['autodocs'],
  argTypes: {
    online: {
      control: 'boolean',
      defaultValue: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof UIStatusTag>;

export const Online: Story = {
  args: {
    online: true,
  },
};

export const Offline: Story = {
  args: {
    online: false,
  },
};
