# aireadi.org

## Project setup

Make sure to install the dependencies.

```bash
yarn install
```

### Compiles and hot-reloads for development

Start the development server on http://localhost:3000

```bash
yarn dev
```

### Compiles and minifies for production

Use this step to build a local production version of the site. Use `start` to preview the local build.

```bash
yarn build
yarn start
```

## Documentation

We recommend to look at the [documentation](https://nextjs.org/docs/getting-started).

### Requirements

- Node.js >= 12.22.0
- Yarn 1 (Classic)

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

# Deployment

This repository is automatically deployed to [Azure](https://azure.microsoft.com/en-us/) on every push to the repository. If you need to reference a specific branch or pull request, you can do so by using the following URL pattern:

- https://yellow-mud-0c2b16f10-<BRANCH_NAME>.centralus.2.azurestaticapps.net/
- https://yellow-mud-0c2b16f10-<GITHUB_PR_NUMBER>.centralus.2.azurestaticapps.net/

The `production` branch is automatically deployed to the following URL: https://aireadi.org

## Contributing

<a href="https://github.com/AI-READI/aireadi.org/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=AI-READI/aireadi.org" />
</a>

Contributions are always welcome!

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for more information.
