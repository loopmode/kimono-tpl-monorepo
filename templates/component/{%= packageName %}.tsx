import React, { PropsWithChildren } from 'react';
import * as SC from './partials';

interface I<%= packageNamePC %> {}

export function <%= packageNamePC %>(
  props: PropsWithChildren<I<%= packageNamePC %>>,
): JSX.Element {
  return <SC.Styled<%= packageNamePC %> {...props}>hello world!</SC.Styled<%= packageNamePC %>>;
}

