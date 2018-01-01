#!/bin/bash

set -e # stop on failure

version_number=$(./scripts/version.sh $1)


function build_git_release {
  tag=$1
  git tag -f -a $tag -m "Release $tag"
}

function build_docker_release {
  tag=$1
  docker build -t $(image_name):$tag --build-arg tag=$tag
}
