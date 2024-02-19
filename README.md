# Master components for [Upzaar](https://www.upzaar.com) store builder

## [Storybook Documentation](https://buttercloud.github.io/master-components/)

## Development
```
yarn storybook
```

## Deploy docs
```sh
yarn build-storybook
yarn deploy-storybook
```

## Build a new component
- type is one of ['atoms', 'molecules', 'organisms']
- name is in PascalCase, and don't add a .jsx
```sh
yarn build-component type:{componentType} name:{ComponentName}
```

## Publish to npm
### Beta version
  - Add `-beta.0` to `version` in `package.json`
    - e.g: if current version is `0.2.8`, beta versions would be `0.2.8-beta.0`, where `.0` is the beta version
  - Build `dist` files
  ```sh
  yarn build
  ```
  - Run publish command with `beta` tag
  ```sh
  npm publish --tag beta
  ```
### Production version
  - Remove `-beta.{number}` if it exists in `package.json` `version`
  - Build
  ```sh
  yarn build
  ```
  - Publish
  ```sh
  npm publish
  ```
