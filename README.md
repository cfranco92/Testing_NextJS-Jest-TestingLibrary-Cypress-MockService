# Testing_NextJS-Jest-TestingLibrary-Cypress-MockService

- Testing Next.js Apps with Jest, Testing Library and Mock Service Worker

- By Cristian Franco B.

# 1. Introduction

## Create Next.js APP

```link
  https://nextjs.org/docs/testing#quickstart-2
```

```terminal
  $ npx create-next-app@latest --example with-jest with-jest-app
```

## Add to an existing project

```link
  https://nextjs.org/docs/testing#setting-up-jest-with-the-rust-compiler
```

```terminal
  $ npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom

```

---

# 2. Testing Definitions and Philosophy

## Snapshots testing

```link
  https://kentcdodds.com/blog/effective-snapshot-testing
```

```link
  https://twitter.com/searls/status/919594505938112512
```

# 3 Next .js Data Fetching

## Data Fetching & Strategies

```link
  https://nextjs.org/docs/basic-features/data-fetching/overview
```

## WINDOWS USERS: important note about name of course repository

### The symptom

Errors like this when you try to run your project after cloning from the course repository:

error - ./node_modules/next/dist/client/dev/amp-dev.js

Module not found: Can't resolve 'C:\path-to-your-cloneudemy-NEXTJS-TESTING\base-concert-venue\node_modules\next\dist\compiled\regenerator-runtime\runtime.js' in 'C:\path-to-your-clone\udemy-NEXTJS-TESTING\base-concert-venue\node_modules\next\dist\client\dev'

Note this part of the path in the "Module not found" detail:

path-to-your-cloneudemy-NEXTJS-TESTING

It's missing the \ in between path-to-your-clone and udemy-NEXTJS-TESTING.

### The cause

This error is caused by a bug in Next.js since version 12.0.4 on Windows, which omits the \ before any directory in the project path that starts with the characters ud. 🤦‍♀️

### The fix

Rename the cloned directory from your course repository so it doesn't start with ud -- perhaps rename it to "nextjs-testing-udemy" instead of "udemy-NEXTJS-TESTING".

### Small print

Note: I could have changed the name of the repository not to start with ud. I chose not to do that because it would have required me to change all of the resource links in the course as well as video showing the repository -- and then change all of that back after the bug is fixed (so that I can keep my repository naming convention consistent with other courses).

I am watching this bug and will remove this note when it has been fixed.

## Udemy Project - Next JS Testing By Bonnie

```link
  https://github.com/cfranco92/udemy-NEXTJS-TESTING
```

### ESLint, Prettier and VSCode Troubleshooting

```link
  https://bonniedotdev.medium.com/eslint-prettier-and-vscode-troubleshooting-e75fc2de27b6
```

```link
  https://kentcdodds.com/blog/eliminate-an-entire-category-of-bugs-with-a-few-simple-tools
```

### Chakra UI

```link
  https://chakra-ui.com/
```

```link
  https://chakra-ui.com/getting-started/nextjs-guide
```

### Next Auth

```link
  https://www.npmjs.com/package/next-auth
```

```link
  https://next-auth.js.org/configuration/callbacks#jwt-callback
```

```link
  https://next-auth.js.org/configuration/options#session
```

# 3 UI Testing

## Technologies

### Jest

```link
  https://jestjs.io/
```

### React Testing Library

```link
  https://testing-library.com/docs/react-testing-library/intro
```

### Mock Service Worker

```link
  https://mswjs.io/
```

### Special Setup required to avoid errors
