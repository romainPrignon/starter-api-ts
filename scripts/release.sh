#!/bin/bash

set -e # stop on failure

# dependencies
source ./scripts/utils.sh

# private function
function prepare_release {
  git add package.json package-lock.json
}

function do_release {
  tag=$1

  git commit -m "Release $tag" --no-verify
  git push --no-verify
}

# script's arguments
tag=$1

[[ -z "$1" ]] && { echo "Error: tag required" ; exit 1; }

# script
set_next_tag $tag
next_tag=$(get_current_tag) # because $tagcan semver
prepare_release $next_tag
do_release $next_tag
./scripts/build-release.sh $next_tag
./scripts/push-release.sh $next_tag


