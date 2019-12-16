# <%= projectName %>

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

## Scripts

### `yarn setup`

Adds the registry for the package scope to npm config and logs in.  
Be prepared to provide username and password for the private registry.

Use this command once after cloning the git repo.

### `yarn start`

Starts storybook.

### `yarn lint`

Runs ESLint across all packages.  
Use `yarn eslint --fix` to apply default formatting and code style.

### `yarn test`

Runs unit tests

### `yarn build`

Builds all packages

### `yarn lerna run publish`

Publishes all updated packages

# Creating from templates

### `yarn create:package`

Creates a new package in a target workspace based on `templates/package`

#### Example

```
yarn create:package my-new-package
```

#### Usage

```
yarn create:package <NEW_PACKAGE_NAME> [TARGET_WORKSPACE_NAME=packages]
```

| Argument                | Description                                                                                 |
| ----------------------- | ------------------------------------------------------------------------------------------- |
| `NEW_PACKAGE_NAME`      | Name for the new package (without scope)                                                    |
| `TARGET_WORKSPACE_NAME` | (Optional) name of the workspace in which to create the new package. Defaults to `packages` |

### `yarn create:component`

Creates a new react component in a target package based on `templates/component`

#### Example:

```
yarn create:component components-core my-new-component
```

#### Usage

```
yarn create:component <TARGET_PACKAGE_NAME> <NEW_COMPONENT_NAME> [TARGET_WORKSPACE_NAME=packages]
```

| Argument                | Description                                                                                      |
| ----------------------- | ------------------------------------------------------------------------------------------------ |
| `TARGET_PACKAGE_NAME`   | Folder name of the package in which to create a new component (without scope)                    |
| `NEW_COMPONENT_NAME`    | Name for the new component (without scope)                                                       |
| `TARGET_WORKSPACE_NAME` | (Optional) name of the workspace that contains the `TARGET_PACKAGE_NAME`. Defaults to `packages` |
