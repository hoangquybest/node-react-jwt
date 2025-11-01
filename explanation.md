# nodejs is environment

# Use npm (npm package manager) to install packages

# artifact:

- In software development, an artifact is any tangible byproduct created during the process, ranging from source code and design documents to compiled binaries, executables, and deployable packages.

# Registry (or Artifact Registry)

- A registry is a centralized server or repository used to store, manage, version, and distribute software artifacts (such as npm packages, Maven packages, or Docker container images) for use in development and deployment pipelines.

- Public repositories like the npm Registry (npmjs.com) and Maven Central Repository (Maven Central) provide global open-source packages, while organizations typically use a centralized internal Artifact Repository (such as JFrog Artifactory) to store their own developed Artifacts and act as a cache for public sources, thereby ensuring security and performance.

# babel

- Babel is a vital JavaScript transpiler that compiles modern JavaScript (ES6+) code into backward-compatible versions, allowing developers to use the latest language features while ensuring compatibility across older browsers and environments. Its main purpose is to bridge the gap between rapidly evolving JavaScript standards and slow environment adoption. Alternatives include the TypeScript Compiler (TSC) and faster transpilers like SWC and esbuild. We must use Babel to future-proof our code, enhance developer productivity, and guarantee broad compatibility for applications.

# View engine

# "start": "nodemon --exec babel-node server.js"

# git reset --soft HEAD~1

# git reset

- git reset (default git reset HEAD .): unstage all changes
- git reset HEAD <file name> : unstage file changes
