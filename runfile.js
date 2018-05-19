const { run } = require('runjs')

const organization_name = 'romainprignon'
const application_name = 'starter-api-ts'
const image_name = `${organization_name}/${application_name}`
const containerName = `${organization_name}_${application_name}`

const outputDir = 'dist'

function build() {
  run(`rm -rf ${outputDir}`)
  run(`tsc`)
}

function buildRelease(tag = 'latest') {
  run(`docker build -t ${image_name}:${tag} .`)
}

function dev () {
  run(`NODE_ENV=development nodemon -w src -e ts -x 'ts-node --require dotenv/config ./src/index.ts'`)
}

function devRelease(tag = 'latest') {
  run(`
    docker run --rm -it --init \
		  --name ${containerName} \
		  -p 4000:4000 \
		  -v ${process.env.PWD}:/opt \
      ${image_name}:${tag} npm run dev
  `)
}

module.exports = {
  build,
  'build:release': buildRelease,
  dev,
  'dev:release': devRelease,
}
