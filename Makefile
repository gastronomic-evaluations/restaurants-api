serve:
	docker-compose up -d restaurants-api
logs:
	docker-compose logs -f restaurants-api
test:
	docker-compose run --rm restaurants-api npm run test
test/ci:
	docker-compose run --rm restaurants-api npm run test:ci
down:
	docker-compose stop restaurants-api
	docker-compose rm restaurants-api