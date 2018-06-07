.DEFAULT_GOAL: dev
.SILENT: dev
.PHONY: dev

dev: # run a docker image ready for development ex: make dev
	docker-compose -f service.local.yml up
