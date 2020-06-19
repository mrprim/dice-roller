.PHONY:	clean install start

install:
	npm ci

clean:
	rm -rf node_modules
	rm -rf lib
	mkdir ./lib
	mkdir ./lib/data

build: clean install
	npm run build

patch:
	npm version patch

deploy: build patch
	npm publish