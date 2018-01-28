.DEFAULT_GOAL: help
.SILENT: help dev start stop build release
.PHONY: help dev start stop build release

include .env

image_name = ${ORGANIZATION_NAME}/${APPLICATION_NAME}
container_name = ${ORGANIZATION_NAME}_${APPLICATION_NAME}
version ?= latest

help:
	@grep -E '(^[a-zA-Z_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[32m%-10s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

dev: ## run a docker image ready for development ex: make dev [version=1.1.2]
	docker run --rm -it \
		--name ${container_name} \
		-p ${PORT}:${PORT} \
		-v ${PWD}:/opt \
		${image_name}:${version} npm run dev

start: ## run a docker image ex: make start [version=1.1.2]
	docker run --rm -it \
		--name ${container_name} \
		-p ${PORT}:${PORT} \
		${image_name}:${version}

stop: ## stop the latest image ex: make stop
	docker stop ${container_name}

build: ## build a docker image ex: make build [version=1.1.2]
	docker build -t ${image_name}:${version} .

release: ## push docker latest image to registry ex: make release [version=1.1.2]
	docker push ${image_name}:${version}
