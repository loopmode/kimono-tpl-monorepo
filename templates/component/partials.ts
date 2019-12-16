import styled from 'styled-components';
import { getThemeProp, theme } from '@volkswagen-onehub/components-core';

export const Styled<%= packageNamePC %> = styled.div`
  background: hotpink;
  padding: ${props => getThemeProp(props, theme.size.dynamic0100)};
`;
