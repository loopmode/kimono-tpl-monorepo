import { configure } from '@storybook/react';
import { addParameters } from '@storybook/react';
import { create } from '@storybook/theming';

const newViewports = {
  mobileXs: {
    name: 'MobileXS',
    styles: {
      width: '320px',
      height: '568px',
    },
  },
  mobile: {
    name: 'Mobile',
    styles: {
      width: '375px',
      height: '667px',
    },
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '1024px',
      height: '768px',
    },
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1280px',
      height: '1024px',
    },
  },
};

export const theme = create({
  base: 'light',
  brandTitle: 'VW - Storybook',
});

addParameters({
  viewport: {
    viewports: newViewports,
  },
  options: {
    theme: theme,
  },
});

configure(
  require.context('../packages', true, /\.stories\.(tsx|mdx)$/),
  module,
);
