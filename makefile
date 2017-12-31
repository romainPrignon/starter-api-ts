.DEFAULT_GOAL: help
.SILENT: help build push run prepare-release push-release release
.PHONY: help build push run prepare-release push-release release

include .env

organization=romainprignon
service=starter-api-ts
image_name=$(organization)/$(service)
container_name=$(organization)_$(service)

# todo
# add registry variable

build: ## build and tag a docker image ex: make build [tag=1.1.2]
	docker build -t $(image_name):$(shell ./scripts/version.sh $(tag)) .

push: ## push docker image to registry ex: make push [tag=1.1.2]
	docker push $(image_name):$(shell ./scripts/version.sh $(tag))

run: ## run a docker tagged image ex: make run [tag=1.1.2]
	docker run -dit \
		--name $(container_name) \
		-p $(PORT):$(PORT) \
		$(image_name):$(shell ./scripts/version.sh $(tag)) || docker start $(container_name)

prepare-release: ## prepare a docker release ex: make prepare-release [tag=1.1.2]
	make build tag=$(tag)

push-release: ## push a docker release ex: make push-release [tag=1.1.2]
	make push tag=$(tag)

release: ## make a docker release (build, push) ex: make release [tag=1.1.2]
	make build tag=$(tag)
	make push tag=$(tag)

help:
	@grep -E '(^[a-zA-Z_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[32m%-10s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'
