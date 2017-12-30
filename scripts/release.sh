#!/bin/bash

set -e # stop on failure

version_number=$(./scripts/version.sh $1)

git tag -a $version_number -m "Release $version_number"
git push --tags
