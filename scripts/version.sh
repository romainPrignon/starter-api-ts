#!/bin/bash

set -e # stop on failure

source ./scripts/utils.sh

version_number=$1
current_version=$(get_current_version)
last_commit=$(get_last_commit)

if [ -z $version_number ]; then
  version_number=$current_version-$last_commit;
fi

echo $version_number
