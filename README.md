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
```sh
npm run start
```
Start the application locally using production env params (.env.prod)

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

## TODO
 * find best file structure
  * controllers
  * services
  * repositories
  * models
  * views
  * utils
  * migrations
 * use starter-package-ts
 * add test
 * multi-staged docker build
 * PM2 ?
 * debug (test et start)
 * DDD
 * functionnal
   * auth
   * trad
   * search
   * multi-datastore
 * technical
   * HTTP2
   * router
   * route validation
   * choose a database (search, see needed feature in db memo)
   * DAL or ORM ?
   * logger (error, in/out, dependencies)
   * security (helmet)
   * use expose in docker run (in makefile)
