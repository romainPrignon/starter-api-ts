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
npm start
```
Application will be running on: [http://localhost:4000](http://localhost:4000)

### Test
```sh
npm test
```
All Tests use Jest framework. tests are in  `*.test.js` files

### Release
```sh
npm run release
```
will create a git tag x.x.x-yyy where `x` is semver and `y` is last commit sh1

```sh
npm run release -- 1.3.2
```
will createa git tag 1.3.2 on current git HEAD

## Docker
Every docker related command are in the `makefile` file

## Further docs
[express](http://expressjs.com/en/4x/api.html)
[lodash](https://lodash.com/docs)

## TODO
- [ ] faire que dans un makefile ?
- [ ] faire image docker au precommit ?
- [ ] quel utilité pour le tag version-commit ?
- [ ] faire manual release qui modifie version package.json
- [ ] unifier les scripts (inclure docker by default)
