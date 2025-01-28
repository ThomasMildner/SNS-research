# Dark Patterns Task

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Initialise Firebase
We use firebase to track participants' choices and responses to included questionnaire. All data is collected in a JSON file.
First install Firebase using the package installer of your choice. Make sure you have an account. If you have a Google Account, you can use that. Create a new project and app if necessary.

### Install Firebase via npm
```sh
npm install -g firebase-tools
```

```
  /* Visit https://firebase.google.com/docs/database/security to learn more about security rules. */
  "rules": {
    ".read": true,
    ".write": true
  }
}
```


Login:

```sh
firebase login
```

Once installed, and you're logged in, initialise Firebase
```sh
firebase init
```

Here, enable `Hosting` and `Realtime Database`

For hosting, set the `dist` to deploy this folder instead of the `public` folder.

### Add your Firebase access token:

File `firebase.json` -> automatically generated when Firebase is first initialised
File `firebase.json` ->

### Change Firebase API key to your personal key in the file `firebaseInnit.ts` in the `views` folder.

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run and connect to Firebase

```sh
firebase deploy
```