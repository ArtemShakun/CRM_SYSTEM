import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { UIButton } from './UIButton';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof UIButton> = {
  title: 'Atoms/Button',
  component: UIButton,
  tags: ['autodocs'],
  argTypes: {
    ref: { table: { disable: true } },
    icon: {
      control: 'boolean',
      mapping: {
        true: <MoreHorizIcon />,
        false: undefined,
      },
      defaultValue: false,
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof UIButton>;

export const Primary: Story = {
  args: {
    children: 'Label',
    variant: 'primary',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
};

export const WithIcon: Story = {
  args: {
    children: 'More',
    variant: 'outline',
    iconPosition: 'start',
    icon: <MoreHorizIcon />,
  },
};

export const IconOnly: Story = {
  args: {
    icon: <MoreHorizIcon />,
    'aria-label': 'Settings',
  },
};
