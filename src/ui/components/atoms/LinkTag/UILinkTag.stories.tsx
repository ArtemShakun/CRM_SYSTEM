import { UILinkTag } from './UILinkTag';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof UILinkTag> = {
  title: 'Atoms/TagLink',
  component: UILinkTag,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof UILinkTag>;

export const TagLink: Story = {
  args: {
    title: 'Link',
    link: '/',
  },
};
