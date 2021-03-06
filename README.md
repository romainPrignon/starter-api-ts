# starter-api-ts

Starting point of a new api in order to achieve RAD (rapid application development)

## Installation
```sh
npm install
rm -rf .git
git init
git remote add origin <repo_url>
```
* Renamed all occurence of `starter-api-ts` in code (README and package.json)

## Usage

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
[express](http://expressjs.com/en/4x/api.html)
[lodash](https://lodash.com/docs)
[dotenv](https://github.com/motdotla/dotenv)
[rxjs](https://github.com/reactivex/rxjs)
[jest](https://facebook.github.io/jest/docs/en/getting-started.html)
