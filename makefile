.DEFAULT_GOAL: help
.SILENT: help build run push
.PHONY: help build run push release

include .env

organization=romainprignon
service=starter-api-ts
image_name=$(organization)/$(service)
container_name=$(organization)_$(service)

# todo
# build-patch, build-minor, build-major
# add registry variable
# use compose instead of docker ?

build: ## build the service using semver (semver.org) ex: make build tag=1.1.2
	docker build -t $(image_name):$(tag) .

run: ## run a service ex: make run tag=1.1.2
	docker run -dit \
		--name $(container_name) \
		-p $(PORT):$(PORT) \
		$(image_name):$(tag) || docker start $(container_name)

push: ## push to the public registry ex: make push tag=1.1.2
	docker push $(image_name):$(tag)

release: ## release a tagged docker image ex: make release tag=1.1.2 or make release
	./scripts/release.sh $(shell ./scripts/version.sh $(tag))
	make build tag=$(shell ./scripts/version.sh $(tag))
	make push tag=$(shell ./scripts/version.sh $(tag))

help:
	@grep -E '(^[a-zA-Z_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[32m%-10s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'
