import React from 'react';
import {
  IntegratorRoot,
  ThemeProvider
} from '@volkswagen-onehub/components-core';

export default function StoryWrapper(props: {
  children: React.ReactChild | React.ReactChildren;
}) {
  return (
    <IntegratorRoot>
      <ThemeProvider theme="main">{props.children}</ThemeProvider>
    </IntegratorRoot>
  );
}
