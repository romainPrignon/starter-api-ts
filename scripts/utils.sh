#!/bin/bash

function get_current_version {
  node -p -e "require('../package.json').version"
}

function get_last_commit {
  cd ..
  echo $PWD
  env
  git rev-parse HEAD | cut -c1-7
}
