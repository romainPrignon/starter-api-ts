.DEFAULT_GOAL: help
.SILENT: help install dev start stop build push
.PHONY: help install dev start stop build push

include .env

image_name = ${ORGANIZATION_NAME}/${APPLICATION_NAME}
container_name = ${ORGANIZATION_NAME}_${APPLICATION_NAME}
tag ?= latest

help:
	@grep -E '(^[a-zA-Z_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[32m%-10s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

install: ## install dependencies ex: make install
	npm install

dev: ## run a docker image ready for development ex: make dev [tag=1.1.2]
	docker run --rm -it --init \
		--name ${container_name} \
		-p ${PORT}:${PORT} \
		-v ${PWD}:/opt \
		${image_name}:${tag} npm run dev

start: ## run a docker image ex: make start [tag=1.1.2]
	docker run --rm -it --init \
		--name ${container_name} \
		-p ${PORT}:${PORT} \
		${image_name}:${tag}

stop: ## stop the latest image ex: make stop
	docker stop ${container_name}

build: ## build a docker image ex: make build [tag=1.1.2]
	npm run build
	docker build -t ${image_name}:${tag} .

push: ## push docker latest image to registry ex: make release [tag=1.1.2]
	docker push ${image_name}:${tag}
