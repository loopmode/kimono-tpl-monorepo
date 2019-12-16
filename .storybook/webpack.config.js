const path = require('path');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

const babelLoader = {
  loader: require.resolve('babel-loader'),
  options: {
    presets: [['react-app', { flow: false, typescript: true }]],
  },
};
const docgenLoader = {
  loader: 'react-docgen-typescript-loader',
  options: {
    tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
  },
};
const mdxLoader = {
  loader: '@mdx-js/loader',
  options: {
    compilers: [createCompiler({})],
  },
};

module.exports = ({ config, mode }) => {
  config.resolve.extensions.push('.ts', '.tsx', '.js');
  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      use: [babelLoader, docgenLoader],
    },
    {
      test: /\.(stories|story)\.mdx$/,
      use: [babelLoader, mdxLoader, docgenLoader],
    },
  );
  return config;
};
