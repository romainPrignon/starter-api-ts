#!/bin/bash

set -e # stop on failure

# dependencies
source ./scripts/utils.sh
import_env

# private function
function build_git_release {
  tag=$1

  git tag -f -a $tag -m "Release $tag"
}

function build_docker_release {
  tag=$1

  docker build -t $DOCKER_IMAGE:$tag --build-arg tag=$tag .
}

# script's arguments
tag=${1-$(get_next_tag)}

# script
build_git_release $tag
build_docker_release $tag
