# starter-api-ts

> Starting point of a new api in order to achieve RAD (rapid application development)

## Setup
```sh
npm install
rm -rf .git
git init
git remote add origin <repo_url>
```
- Renamed all occurence of `starter-api-ts` in code (README.md and package.json)

## API
See [dist/index.d.ts](dist/index.d.ts)

## Usage

See [package.json](package.json) scripts section

### Develop
```sh
npm run dev
```
Application will be running on: [http://localhost:4000](http://localhost:4000)

### Start
Start the application in a particular environment
```sh
npm run start:<env>
```
Start the application locally using specific env params (ex: .env.production and config/production.js)

### Build
```sh
npm run build
```
Build application using typescript

### Lint
```sh
npm run lint
```

### Test
```sh
npm run test
```
All Tests use Jest framework. tests are in  `*.test.js` files

## Release
```sh
make release tag=x.y.z
```
The final step.
Build and push a tagged docker image

## Docker
Every docker related command are in the `makefile` file.
```sh
make help
```

## Further docs
[dotenv](https://github.com/motdotla/dotenv)
[express](http://expressjs.com/en/4x/api.html)
[jest](https://facebook.github.io/jest/docs/en/getting-started.html)
[lodash](https://lodash.com/docs)
[typescript](https://www.typescriptlang.org/docs/index.html)


## TODO
- use APP_ENV instead off node_env
- brand instead of constraint ?
- import romainprignon/utils => faire un npm link et travailler directemnt sur les guard linux path dans fs
  - diffile de faire marcher en ts
- use Optional from @romainprignon/utils
- add use case
- test one file, on test
- docker workflow
- api: add typedoc
- usage: use tasksfile
- .env file
- start cmd
- test js file
- error handling
- tester logger
- think about toSQL, toString,...
  - DTO for web and DAO for db ? entity for domain logic
- always use arraow function and make sure ts compile as function
