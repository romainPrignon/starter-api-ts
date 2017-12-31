#!/bin/bash

function get_current_version {
  node -p -e "require('./package.json').version"
}

function get_last_commit {
  git rev-parse HEAD | cut -c1-7
}

function get_new_version {
  version_number=$1
  current_version=$(get_current_version)
  last_commit=$(get_last_commit)

  if [ -z $version_number ]; then
    version_number=$current_version-$last_commit;
  fi

  echo $version_number
}
