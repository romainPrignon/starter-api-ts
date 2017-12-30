#!/bin/sh

set -e # stop on failure

version_number=$1

npm version $version_number
git add package.json package-lock.json
git commit -m "Release $version_number"
git tag -a $version_number -m "Release $version_number"
git push
git push --tags
