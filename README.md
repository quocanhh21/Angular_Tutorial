# MyApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


## Project Rules and Guidelines

### Code Style
- Follow the [Angular Style Guide](https://angular.io/guide/styleguide)
- Use consistent indentation (2 spaces)
- Write meaningful comments and documentation
- Keep components small and focused
- Use TypeScript's strict mode

### Git Workflow
- Create feature branches from `develop`
- Use meaningful commit messages following conventional commits
- Keep commits atomic and focused
- Create pull requests for code review
- Squash commits before merging

### Testing Requirements
- Write unit tests for new features
- Maintain minimum 80% code coverage
- Test edge cases and error scenarios
- Update tests when modifying existing features

### Performance Guidelines
- Lazy load modules when possible
- Optimize images and assets
- Follow Angular best practices for change detection
- Minimize bundle size

### Code Review Process
- All code must be reviewed before merging
- Address reviewer comments promptly
- Test changes locally before requesting review
- Ensure CI/CD pipeline passes

### Documentation
- Update README.md for significant changes
- Document complex logic and business rules
- Keep API documentation current
- Include setup instructions for new features

### Dependencies
- Keep dependencies updated
- Review security vulnerabilities regularly
- Document third-party library usage
- Avoid unnecessary dependencies
