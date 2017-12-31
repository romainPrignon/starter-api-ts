#!/bin/bash

set -e # stop on failure

source ./scripts/utils.sh

npm version --no-git-tag-version $1
tag=$(get_current_version)
git add package.json package-lock.json
git commit -m "Release $tag"

./scripts/prepare-release.sh $tag
./scripts/push-release.sh

