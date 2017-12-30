#!/bin/bash

set -e # stop on failure
cd $(dirname $0) # go to script dir
echo $GIT_PARAMS
source ./utils.sh

version_number=$1
current_version=$(get_current_version)
last_commit=$(get_last_commit)

if [ -z $version_number ]; then
  version_number=$current_version-$last_commit;
fi

git tag -a $version_number -m "Release $version_number"
git push --tags
