import React from 'react';
import { <%= packageNamePC %> } from './<%= packageName %>';
import StoryWrapper from '../../../../.storybook/StoryWrapper';

export default { title: '<%= packageName %>' };

export const withText = () => (
  <StoryWrapper>
    <<%= packageNamePC %> />
  </StoryWrapper>
);
