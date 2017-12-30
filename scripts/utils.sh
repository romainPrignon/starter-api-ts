#!/bin/bash

function get_current_version {
  node -p -e "require('./package.json').version"
}

function get_last_commit {
  git rev-parse HEAD | cut -c1-7
}
