.DEFAULT_GOAL: help
.SILENT: help install dev start stop build push release
.PHONY: help install dev start stop build push release

organization_name=romainprignon
application_name=starter-api-ts
image_name = ${organization_name}/${application_name}
container_name = ${organization_name}_${application_name}
tag ?= latest

help:
	@grep -E '(^[a-zA-Z_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[32m%-10s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

install: ## install dependencies ex: make install
	npm install

dev: ## run a docker image ready for development ex: make dev [tag=1.1.2]
	docker run --rm -it --init \
		--name ${container_name} \
		-p 4000:4000 \
		-v ${PWD}:/opt \
		${image_name}:${tag} npm run dev

start: ## run a docker image in a specific env ex: make start env=production [tag=1.1.2]
	docker run -it --init \
		--name ${container_name} \
		-p 4000:4000 \
		-v ${PWD}/.env.${env}:/opt/.env.${env} \
		${image_name}:${tag} npm run start:${env}

stop: ## stop the latest image ex: make stop
	docker stop ${container_name}

build: ## build a docker image ex: make build [tag=1.1.2]
	docker build -t ${image_name}:${tag} .

push: ## push docker latest image to registry ex: make push [tag=1.1.2]
	docker push ${image_name}:${tag}

release: build push ## release project as docker image ex: make release [tag=1.1.2]
