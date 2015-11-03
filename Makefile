
build:
	node_modules/.bin/browserify frontend/v1-example.js > public/v1-example-bundle.js
	node_modules/.bin/browserify frontend/v2-example.js > public/v2-example-bundle.js
