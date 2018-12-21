- [Setup](#setup)
  - [Dev Mode](#dev-mode)
  - [Production](#production)
  - [Build individual components](#build-individual-components)
  - [Svgs & Icons](#svgs--icons)
  - [Learn More](#learn-more)
  - [Optional Plugins to install for your code editor:](#optional-plugins-to-install-for-your-code-editor)
    - [Prettier (formatter primarily for JS files)](#prettier-formatter-primarily-for-js-files)
    - [ESlint (linter)](#eslint-linter)

> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup

-   From root of this project run:

```
npm install
```

### Dev Mode

```
npm start
```

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Production

When you are ready to move this over to production run:

```
npm run build
```

-   grab your markup from the /dist folder

### Build individual components

-   Go to the `dist/bundler/build.js` file
-   If you do not need javascript add your component name to the `pages` array
-   Add a page in `src/pages` dir and use the `Quote` component example for guidance
-   Run `npm run build` once you have completed these steps and it should output your markup to `dist`

### Svgs & Icons

-   Add your svg/icon to the `triblio/assets/svgs` folder
-   Run `npm run svgs` (you can run this while your dev server is running if you want)
-   Then use the Svg component like so with the name of the file as the `name` prop

```js
import Svg from '../../atoms/Svg/Svg';

<Svg name="teamMember" />;
```

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Optional Plugins to install for your code editor:

#### Prettier (formatter primarily for JS files)

> Prettier is an opinionated code formatter. https://prettier.io/playground/

-   User Guide: https://github.com/prettier/prettier
-   VS Code Editor Plugin: https://github.com/prettier/prettier-vscode
-   Vim Plugin: https://github.com/prettier/vim-prettier
-   Sublime: https://packagecontrol.io/packages/JsPrettier

#### ESlint (linter)

> ESlint is a pluggable linting utility for JavaScript

-   User Guide: https://eslint.org/docs/user-guide/getting-started#configuration
-   VS Code Editor Plugin: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
-   Vim Plugin: https://github.com/vim-syntastic/syntastic/tree/master/syntax_checkers/javascript
-   Sublime: https://github.com/roadhump/SublimeLinter-eslint
