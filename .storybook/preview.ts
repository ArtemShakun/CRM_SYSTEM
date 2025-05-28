import { withMuiTheme } from '../src/styles/storybook/storybookMuiDecorator';

import type { Preview } from '@storybook/react';
const preview: Preview = {
  decorators: [withMuiTheme],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
