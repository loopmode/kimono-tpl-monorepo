import 'jest-styled-components';
import React from 'react';
import { render } from '@testing-library/react';
import { <%= packageNamePC %> } from './<%= packageName %>';
import { ThemeProvider } from '@volkswagen-onehub/components-core';

describe('<%= packageName %>', () => {
  test('should render', () => {
    const component = render(
      <ThemeProvider>
        <<%= packageNamePC %> />
      </ThemeProvider>,
    );
    expect(component).toMatchSnapshot();
  });
});
