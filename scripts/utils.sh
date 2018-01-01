#!/bin/bash

# make environement variable in .env available
function import_env {
  export $(cat .env | xargs)
}

# get package version ex: 1.1.2
function get_current_tag {
  node -p -e "require('./package.json').version"
}

# get last commit sha1 ex: 6bd8c9c
function get_last_commit {
  git rev-parse HEAD | cut -c1-7
}

# get next release tag ex: 1.1.2-6bd8c9c
function get_next_tag {
  current_tag=$(get_current_tag)
  last_commit=$(get_last_commit)

  next_tag=$current_tag-$last_commit

  echo $next_tag
}

# set the next package version
function set_next_tag {
  tag=$1

  npm version --no-git-tag-version $tag
}
