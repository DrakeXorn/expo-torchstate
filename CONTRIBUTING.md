# Contributing

Contributions are always welcome, no matter how large or small!

We want this community to be friendly and respectful to each other. Please follow it in all your interactions with the
project. Before contributing, please read the [code of conduct](./CODE_OF_CONDUCT.md).

## Development workflow

This project is a monorepo containing the following packages:

- The library package in the root directory.
- An example app in the `example/` directory.

To get started with the project, run `npm install` in the root directory to install the required dependencies for each
package:

```sh
npm install
```

The [example app](/example) demonstrates usage of the library. You need to run it to test any changes you make.

It is configured to use the local version of the library, so any changes you make to the library's source code will be
reflected in the example app. Changes to the library's JavaScript code will be reflected in the example app without a
rebuild, but native code changes will require a rebuild of the example app.

If you want to use Android Studio or XCode to edit the native code, you can open the `example/android` or `example/ios`
directories respectively in those editors. To edit the Objective-C or Swift files,
open `example/ios/expotorchstate.xcworkspace` in XCode and find the source files
at `Pods > Development Pods > Torchstate`.

You can also run the following command to open the iOS project in XCode:

```sh
npm run open:ios
```

To edit the Java or Kotlin files, open `example/android` in Android studio and find the source files
at `drakexorn-expo-torchstate`under `Android`.

The same can be done by running the following command:

```sh
npm run open:android
```

You can use various commands from the root directory to work with the project.

To start the packager:

```sh
cd example
npm run start
```

To run the example app on Android:

```sh
cd example
npm run android
```

To run the example app on iOS:

```sh
cd example
npm run ios
```

Make sure your code passes ESLint. Run the following to verify:

```sh
npm run lint
```

### Commit message convention

We follow the [conventional commits specification](https://www.conventionalcommits.org/en) for our commit messages:

- `fix`: bug fixes, e.g. fix crash due to deprecated method.
- `feat`: new features, e.g. add new method to the module.
- `refactor`: code refactor, e.g. migrate from class components to hooks.
- `docs`: changes into documentation, e.g. add usage example for the module..
- `test`: adding or updating tests, e.g. add integration tests using detox.
- `chore`: tooling changes, e.g. change CI config.

### Linting and tests

[ESLint](https://eslint.org/), [Prettier](https://prettier.io/), [TypeScript](https://www.typescriptlang.org/)

We use [TypeScript](https://www.typescriptlang.org/) for type checking, [ESLint](https://eslint.org/)
with [Prettier](https://prettier.io/) for linting and formatting the code, and [Jest](https://jestjs.io/) for testing.

Our pre-commit hooks verify that the linter and tests pass when committing.

### Scripts

The `package.json` file contains various scripts for common tasks:

- `npm install`: setup project by installing dependencies.
- `npm run typecheck`: type-check files with TypeScript.
- `npm run lint`: lint files with ESLint.
- `npm run test`: run unit tests with expo-module.

### Sending a pull request

> **Working on your first pull request?** You can learn how from this _free_ series:
> [How to Contribute to an Open Source Project on GitHub](https://app.egghead.io/playlists/how-to-contribute-to-an-open-source-project-on-github).

When you're sending a pull request:

- Prefer small pull requests focused on one change.
- Verify that linters and tests are passing.
- Review the documentation to make sure it looks good.
- For pull requests that change the API or implementation, discuss with maintainers first by opening an issue.
