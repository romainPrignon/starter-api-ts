#!/bin/bash

set -e # stop on failure

source ./scripts/utils.sh

version_number=$(get_new_version $1)
git tag -f -a $version_number -m "Release $version_number"
