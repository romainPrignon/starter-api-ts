.DEFAULT_GOAL: dev
.SILENT: dev
.PHONY: dev

dev: # run a docker image ready for development ex: make dev
	ENV=local docker-compose -f service.local.yml up
