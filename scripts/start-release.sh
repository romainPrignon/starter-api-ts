#!/bin/bash

set -e # stop on failure

# dependencies
source ./scripts/utils.sh
import_env

# script's arguments
env=${1-"production"}
stack_name=${DOCKER_STACK_NAME}_${env}

# script
case $env in
  "production" )
    docker-compose -f service.production.yml config > stack.production.lock
    docker stack deploy -c stack.production.lock $stack_name;;
  "local" )
     docker-compose -f service.production.yml -f service.local.yml config > stack.local.lock
     docker stack deploy -c stack.local.lock $stack_name;;
esac
