# include-npm-dependencies

![include-npm-dependencies-example](https://user-images.githubusercontent.com/5553591/184923750-a72c8e3d-4b42-4848-a355-7d528a4c466b.png)

## How to use

This project can be used as-is in a HubSpot account by:

1. Cloning this repository
2. `cd include-npm-dependencies`
3. `hs project upload`

## How it works

To add an npm dependency to a project, there must be a `package.json` file in the `src/app/app.functions/` folder with an npm package specified in the `dependencies` object.

1. `cd include-npm-dependencies/src/app/app.functions/`
2. Run `npm init`. This `npm init` command will walk through the creation of the `package.json` file.
3. Next, an npm dependency can be included using `npm install`. Example: `npm install dayjs` installs the [`dayjs` npm package](https://www.npmjs.com/package/dayjs) as a dependency, and adds it to the `dependencies` object in the `package.json`.

Now the `dayjs` library can be imported into files like `crm-card.js`. In this example project, we do this through:

```js
const dayjs = require('dayjs');
```
