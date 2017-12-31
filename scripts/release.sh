#!/bin/bash

set -e # stop on failure

tag=$(npm version $1)

git add package.json
#git commit -m "Release $tag"
echo "Release $tag"
#./scripts/prepare-release.sh $tag
#./scripts/push-release.sh

