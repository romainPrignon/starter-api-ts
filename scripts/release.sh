#!/bin/bash

set -e # stop on failure

./scripts/prepare-release.sh $1
./scripts/push-release.sh

