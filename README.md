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

```link
  https://nextjs.org/docs/api-reference/next.config.js/custom-page-extensions#including-non-page-files-in-the-pages-directory
```

## SIDE NOTE: Why add to the existing test? Why not create a new test?

Why add to the existing test? Why not create a new test?
I came from a back-end unit testing background, where the standard was short, isolated tests with only one assertion per test. I had trouble shifting my mindset to longer tests with multiple assertions – so I would have wondered about the above questions.

### Front-end tests often build as the test progresses

As I’ve become more familiar with front-end testing, I have gotten used to longer tests with multiple assertions. Front-end tests often involve long setup (clicking buttons and entering text), and usually the setup builds on previous parts of the test. Kent C. Dodds (the creator of Testing Library) has a blog post discussing this.

Note: the simple test in this section does not follow that pattern; the only setup is rendering the component, and the assertions could fairly easily be broken into multiple shorter tests. However, I am so used to longer tests at this point that I tend to use them even when they aren’t strictly necessary.

### You could still break the tests down though, right?

Yes, tests that go through a sequence of steps – and assert after each step – can be broken into separate tests. In order to make the tests shorter, however, we would need to mimic initial state for each piece of the tests using mocks or other "behind the scenes" state manipulation that is not generally endorsed by Kent C. Dodds.

### What about beforeEach?

Another alternative would be to put repetitive code in beforeEach statements. This definitely makes the code cleaner and less repetitive. However, the goals of test code aren't exactly the same as the goals of production code. It's common to optimize test code for “readability and ease of diagnosis” over “fewer lines of code and less repetition.” When a test fails, you want to spend as little time as possible analyzing the test function (so you can diagnose what caused it to fail). If the code is spread among many functions (such as in both beforeEach and the test function), that introduces some more complexity and works against this goal. Kent C. Dodds has a thing or two to say about this too.

### The bottom line

For the reasons discussed above, I no longer follow a strict “one assertion per test” policy. However, this is ultimately your choice – I encourage you to experiment and decide which works best for you.


## SIDE NOTE: About Fake Data for "Popular Convert Venue"
### About Fake Data for "Popular Concert Venue"
Normally, I would write fake data as JavaScript objects so that it could be imported and used synchronously (see mock data for the Ten-Cent Teacakes site as an example). However, the Popular Concert Venue site uses a JSON database (in order to let students follow along with the course without having to sign up for a cloud service or install a database on their computer).

In the Test Database section, I need a command to reset the database from the command-line (because the database needs to be reset before building the app, for SSG and ISR). I didn't want to create a full JavaScript script with babel, etc -- which would be needed if I used JavaScript mock data objects and the writeJSONtoFile method. So, the simplest way to write this command was to overwrite the JSON files in the test database with JSON files that contain clean data.

If I made a mock data file that had JavaScript objects, I would have to duplicate the data from those JSON files. It is not convenient to maintain data in multiple places, and also prone to error if the data gets update in one place and not another!

My solution for this app was to create an async readFakeData method that reads data from the JSON files and returns objects containing the fake data.