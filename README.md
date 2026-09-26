# Kata Node.js Starter Project

Minimal Node.js starter for coding katas, using native ES modules.

## Tools

- [Vitest](https://vitest.dev/) for testing
- [pnpm](https://pnpm.io/) for dependency management

## Getting Started

### Prerequisites

Use Node.js 24 LTS. The supported Node.js versions are declared in `package.json`.

Install the pinned pnpm version:

```shell
npm install --global pnpm@12.6.0
```

### Install dependencies

```shell
pnpm install
```

Dependencies must be at least 24 hours old. pnpm enforces this release-age
policy in strict mode, with no package exceptions.

### Run tests

Run all tests once:

```shell
pnpm test
```

Watch for changes and rerun affected tests:

```shell
pnpm test:watch
```

Write tests in `tests/*.test.js`, import test helpers from `vitest`, and include
the `.js` extension in relative imports. See `tests/index.test.js` for an example.

For a reproducible install in CI:

```shell
pnpm install --frozen-lockfile
pnpm test
```
