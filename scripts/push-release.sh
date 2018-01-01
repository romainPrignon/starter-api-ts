#!/bin/bash

set -e # stop on failure

# dependencies
source ./scripts/utils.sh
import_env

# private function
function push_git_release {
  git push -f --tags --no-verify
}

function push_docker_release {
  docker push $DOCKER_IMAGE:$tag
}

# script's arguments
tag=${1-$(get_next_tag)}

# script
push_git_release
push_docker_release $tag
