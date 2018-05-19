// const config = require('../dist/internal/config') // c'est moche

const organizationName = 'romainprignon'
const applicationName = 'starter-api-ts'
const imageName = `${organizationName}/${applicationName}`
const containerName = `${organizationName}_${applicationName}`

const tag = 'latest'

// function* dev () {
//   yield `docker run --rm -t --init \
// 		--name ${containerName} \
// 		-p 4000:4000 \
// 		-v ${process.env.PWD}:/opt \
// 		${imageName}:${tag} npm run dev`
// }

function* dev () {
  yield `NODE_ENV=development nodemon -w src -e ts -x 'ts-node --require dotenv/config ./src/index.ts'`
}

module.exports = dev
