<div align="center">

<img src="https://github.com/AI-READI/AI-READI-logo/blob/main/logo/png/option2.png?raw=true" alt="logo" width="200" height="auto" />

<br />

<h1>aireadi.org</h1>

<p>
Website of the AI-READI project
</p>

<p>
  <a href="https://github.com/AI-READI/aireadi.org/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/AI-READI/aireadi.org.svg?style=flat-square" alt="contributors" />
  </a>
  <a href="https://github.com/AI-READI/aireadi.org/stargazers">
    <img src="https://img.shields.io/github/stars/AI-READI/aireadi.org.svg?style=flat-square" alt="stars" />
  </a>
  <a href="https://github.com/AI-READI/aireadi.org/issues/">
    <img src="https://img.shields.io/github/issues/AI-READI/aireadi.org.svg?style=flat-square" alt="open issues" />
  </a>
  <a href="https://github.com/AI-READI/aireadi.org/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/AI-READI/aireadi.org.svg?style=flat-square" alt="license" />
  </a>
  <!-- <a href="https://doi.org/10.5281/zenodo.6407300">
    <img src="https://zenodo.org/badge/DOI/10.5281/zenodo.6407300.svg" alt="doi" />
  </a> -->
  <a href="https://fairdataihub.org/fairshare">
    <img src="https://raw.githubusercontent.com/fairdataihub/FAIRshare/main/badge.svg" alt="Curated with FAIRshare" />
  </a>
</p>
   
<h4>
    <a href="https://dev.aireadi.org">Documentation</a>
  <span> · </span>
    <a href="https://github.com/AI-READI/aireadi.org/blob/main/CHANGELOG.md">Changelog</a>
  <span> · </span>
    <a href="https://github.com/AI-READI/aireadi.org/issues/">Report Bug</a>
  <span> · </span>
    <a href="https://dev.aireadi.org/contact">Request Feature</a>
  </h4>
</div>

<br />

---

## Description

This repository contains the source code of the AI-READI website. The website is built with [Next.js](https://nextjs.org/), a React framework for static and server-rendered applications.

## Getting started

### ⚠️ Prerequisites

This project uses [`Yarn`](https://yarnpkg.com/) as package manager.

#### Requirements

- Node.js >= 12.22.0
- Yarn 1 (Classic)

```sh
npm install --global yarn
```

If you already have a `Anaconda` environment on your machine, you can install the dependencies with:

```sh
conda install -c conda-forge yarn nodejs
```

### Run locally

Clone the project

```sh
https://github.com/AI-READI/dev.fairhub.io.git
```

Go to the project directory

```sh
cd dev.fairhub.io
```

Install dependencies

```sh
yarn install
```

Start the server

```sh
yarn dev
```

### Build locally

Use this step to build a local production version of the site. Use `start` to preview the local build.

```bash
yarn build
yarn start
```

# Deployment

This repository is automatically deployed to [Azure](https://azure.microsoft.com/en-us/) on every push to the repository. If you need to reference a specific branch or pull request, you can do so by using the following URL pattern:

- https://yellow-mud-0c2b16f10-<BRANCH_NAME>.centralus.2.azurestaticapps.net/
- https://yellow-mud-0c2b16f10-<GITHUB_PR_NUMBER>.centralus.2.azurestaticapps.net/

**Note:** All punctuation in the branch name will be removed when creating the URL.

The `production` branch is automatically deployed to the following URL: https://aireadi.org

## Contributing

<a href="https://github.com/AI-READI/aireadi.org/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=AI-READI/aireadi.org" />
</a>

Contributions are always welcome!

If you are interested in reporting/fixing issues and contributing directly to the code base, please see [CONTRIBUTING.md](CONTRIBUTING.md) for more information on what we're looking for and how to get started.

For any developmental standards to follow, add them directly to the [CONTRIBUTING.md](CONTRIBUTING.md) file.

We recommend to look at the [documentation](https://nextjs.org/docs/getting-started).

### Directory Structure

- [`.github`](.github) — GitHub configuration including the CI workflow.<br>
- [`.husky`](.husky) — Husky configuration and hooks.<br>
- [`public`](./public) — Static assets such as robots.txt, images, and favicon.<br>
- [`src`](./src) — Application source code, including pages, components, styles.
- [`cypress`](./cypress) — End-to-end tests.

### Scripts

- `yarn dev` — Starts the application in development mode at `http://localhost:3000`.
- `yarn build` — Creates an optimized production build of your application.
- `yarn start` — Starts the application in production mode.
- `yarn type-check` — Validate code using TypeScript compiler.
- `yarn lint` — Runs ESLint for all files in the `src` directory.
- `yarn format` — Runs Prettier for all files in the `src` directory.
- `yarn cypress:run` — Runs Cypress tests in headless mode.
- `yarn cypress:open` — Opens Cypress in interactive mode.

### Path Mapping

TypeScript are pre-configured with custom path mappings. To import components or files, use the `@` prefix.

```tsx
import { Button } from '@/components/Button';

// To import images or other files from the public folder
import avatar from '@/public/avatar.png';
```

## Issues and Feedback

To report any issues with the software, suggest improvements, or request a new feature, please open a new issue via the [Issues](https://github.com/AI-READI/aireadi.org/issues) tab. Provide adequate information (operating system, steps leading to error, screenshots) so we can help you efficiently.

## License

This work is licensed under
[MIT](https://opensource.org/licenses/mit). See [LICENSE](https://github.com/AI-READI/aireadi.org/blob/main/LICENSE) for more information.

<a href="https://aireadi.org" >
  <img src="https://www.channelfutures.com/files/2017/04/3_0.png" height="30" />
</a>

## Acknowledgements

This project is funded by the NIH under award number 1OT2OD032644. The content is solely the responsibility of the authors and does not necessarily represent the official views of the NIH.

Add any other acknowledgements here.

<br />

---

<br />

<div align="center">

<a href="https://aireadi.org">
  <img src="https://github.com/AI-READI/AI-READI-logo/raw/main/logo/png/option2.png" height="200" />
</a>

</div>
