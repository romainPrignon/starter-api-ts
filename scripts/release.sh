#!/bin/bash

set -e # stop on failure

# private function
function get_package_version {
  node -p "require('./package.json').version"
}

# script's arguments
human_readable_tag=$1

[[ -z "$human_readable_tag" ]] && { echo "Error: tag required" ; exit 1; }

npm run tag -- $human_readable_tag

tag=$(get_package_version)

make build tag=$tag
make push tag=$tag
