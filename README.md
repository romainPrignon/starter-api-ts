# starter-api-ts

Starting point of a new api

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

### Build
```sh
npm run build
```
Build application using typescript

### Test
```sh
npm run test
```
All Tests use Jest framework. tests are in  `*.test.js` files

### Tag
```sh
npm run tag -- patch
npm run tag -- minor
npm run tag -- major
npm run tag -- x.y.z
```
It use release-it to release a git tagged version of the application

### Release
```sh
./scripts/release.sh patch
./scripts/release.sh minor
./scripts/release.sh major
./scripts/release.sh x.y.z
```
The final step. Make a git tag using release-it then build and push a tagged docker image

### Start
```sh
npm run start
```
Start the application locally using production env params (.env.prod)

## Docker
Every docker related command are in the `makefile` file.
```sh
make help
```

## Further docs
[express](http://expressjs.com/en/4x/api.html)
[lodash](https://lodash.com/docs)
[dotenv](https://github.com/motdotla/dotenv)

[jest](https://facebook.github.io/jest/docs/en/getting-started.html)
