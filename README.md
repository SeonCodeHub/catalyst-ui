# Catalyst UI

This is a UI for a [Catalyst](https://github.com/SeonCodeHub/catalyst) application aimed at boosting productivity and efficiency in project management tasks. This project provides a robust foundation for building powerful and scalable applications.


## Generated with Mantine Next.js template

Source code of the UI was generated from a [Next.js](https://nextjs.org/) app router + [Mantine](https://mantine.dev/) template.

### Template Features

This template comes with the following features:

- [PostCSS](https://postcss.org/) with [mantine-postcss-preset](https://mantine.dev/styles/postcss-preset)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)
- [Jest](https://jestjs.io/) setup with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- ESLint setup with [eslint-config-mantine](https://github.com/mantinedev/eslint-config-mantine)



## Catalyst Features

- **Project Management**: Easily organize and manage tasks for your projects.
- **User Authentication**: Secure user authentication and authorization.
- **RESTful API**: Expose endpoints for seamless integration with other services.
- **Database Integration**: Utilize databases to store and retrieve project data.
- **Dependency Injection**: Leverage Spring Boot's dependency injection for modular and maintainable code.
- **Maven Build**: Manage project dependencies and build process efficiently with Maven.


## NPM scripts

### Build and dev scripts

- `dev` – start dev server
- `build` – bundle application for production
- `analyze` – analyzes application bundle with [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettier:check` – checks files with Prettier
- `jest` – runs jest tests
- `jest:watch` – starts jest watch
- `test` – runs `jest`, `prettier:check`, `lint` and `typecheck` scripts

### Other scripts

- `storybook` – starts storybook dev server
- `storybook:build` – build production storybook bundle to `storybook-static`
- `prettier:write` – formats all files with Prettier


## Branching Strategy

We follow a branching strategy that helps maintain a clean and organized codebase. The main branches in our repository are `main` and `development`.

- The `main` branch is used for production purposes. It contains stable and tested code ready for deployment. Only merge requests from the `development` branch are accepted into `main`. This ensures that only code that has been thoroughly reviewed and tested is deployed to production.
- The `development` branch serves as the integration branch for ongoing development work. All feature branches are merged into `development` after thorough testing and code review. This branch is periodically merged into `main` when a significant milestone is reached.


Both the `main` and `development` branches are protected to ensure code quality and prevent accidental changes. Only pull requests can be used to merge changes into these branches.

- **Protection Rules**: Developers are not allowed to push directly to `main` or `development`. Instead, they must create feature branches for their work. Pull requests are then submitted to merge feature branches into `development`.
- **Feature Branches**: Every developer should create a separate feature branch for their work (e.g., `feature/new-feature`). Once the feature is complete, a pull request should be opened to merge it into the `development` branch.


## Contributing

Contributions are welcome! Please follow our branching strategy and protection rules when contributing to the project.

1. Create a new feature branch: `git checkout -b feature/new-feature`.
2. Make your changes and commit them: `git commit -m 'Add new feature'`.
3. Push your branch to your fork: `git push origin feature/new-feature`.
4. Submit a pull request to merge your changes into the `development` branch.

Thank you for contributing to Catalyst!