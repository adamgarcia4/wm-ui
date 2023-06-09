
Barak's leaving the original repo link here:
<a href="https://github.com/thenriquedb/storybook-sass-typescript-boilerplate" target="_blank"></a>

### What is insided?
*  [Sass](https://sass-lang.com/)
*  [classnames](https://www.npmjs.com/package/classnames)
*  [Storybook](https://storybook.js.org/)
*  [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
*  [Eslint](https://eslint.org/)
*  [Storybook Deployer](https://github.com/storybookjs/storybook-deployer)

### How to use
```npm install && npm run storybook  
```

### Scripts
* ``test``: run all jest tests
* ``storybook``: run storybook on ``6006`` port
* ``lint``: run the linter on all components
* ``build-storybook``: create the build version of storybook
* ``deploy-storybook:ghpages``: Deploy Sorybook on Github Pages
  
#### Absolute paths 
**TypeScript** 
```ts
// anyComponent.tsx
import { Component } from 'packages/Component';
import sass from 'sass/*';
```
**SCSS** 
```scss
// component.module.scss
@import "sass/*";
@import "sass/config/colors";
```

#### Read more

- [Distribute UI across an organization](https://www.learnstorybook.com/design-systems-for-developers/react/en/distribute/)

- [Introduction to design systems](https://www.learnstorybook.com/design-systems-for-developers/react/en/introduction/)

