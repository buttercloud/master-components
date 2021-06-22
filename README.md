# Master components for [Upzaar](https://www.upzaar.com) theme builder

## [Storybook Documentation](https://buttercloud.github.io/master-components/)

## Development
```
yarn storybook
```

## Deploy docs
```
yarn build-storybook
yarn deploy-storybook
```

## Build a new component
- type is one of ['atoms', 'molecules', 'organisms']
- name is in PascalCase, and don't add a .jsx
```
yarn build-component type:{componentType} name:{ComponentName}
```
