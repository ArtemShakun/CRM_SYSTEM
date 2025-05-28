import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../src/ui/components/atoms/**/*.stories.@(ts|tsx)',
    '../src/ui/components/molecules/**/*.stories.@(ts|tsx)',
    '../src/ui/components/organisms/**/*.stories.@(ts|tsx)',
    '../src/ui/components/templates/**/*.stories.@(ts|tsx)',
    '../src/ui/components/pages/**/*.stories.@(ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@chromatic-com/storybook',
    '@storybook/experimental-addon-test',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
};
export default config;
