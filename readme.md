## Example App for Retsly SDKs

This is a very simple example of how to use the Retsly JS SDKs to easily make calls to Retsly from the back- or front-end.

This example assumes that you have a Retsly account and have already registered an application as you will need that application's assets to access the Retsly API. Also, please ensure that you've registered ```localhost``` as a domain in your application setup.

We use an Express server build on Node.js in this example. Consequently, you will also need to have Node/NPM setup on your computer prior to following the instructions below.

## SDKs

This example app includes examples of:

- [Retsly/retsly-js-sdk](https://github.com/retsly/retsly-js-sdk) (v1) for frontend requests.
- [Retsly/js-sdk](https://github.com/retsly/js-sdk) (v2) for front- and back-end requests.

## Requirements

- Node/NPM
- Retsly Account
- Registered Retsly Application -- registered domains must include ```localhost``` for frontend requests

## Instructions

0. Clone this repo.
1. ```npm install```
2. Go into the `frontend` folder and replace the ```<<<client_id>>>``` and/or ```<<<browser_token>>>``` with your application's client_id and/or browser token respectively in the files found there.
3. Go into `server.js` at the root of this repo and replace ```<<<server_token>>>``` on line 34 with your application's server token.
4. run ```npm build``` or ```make build``` in your terminal. These commands will bundle the two existing modules in the `frontend` folder and add them to the ```public``` folder.
5. Run ```npm server.js``` in your terminal -- the listening port is currently hardcoded to ```3000```. Feel free to alter this in the ```server.js``` file found at the root of this repo.
6. Direct your browser to ```localhost:3000``` or ```localhost:WHATEVER_PORT_YOU_CHOSE```. The links on the homepage will direct you to the responses received by the request selected.
7. ***Modify the code, have fun, and/or profit!*** If you add files to the frontend folder, make sure to add a line to the ```Makefile``` at the root of this repo to have browserify compile your added code. 

## Additional information

Additional information related to making requests to the Retsly API can be found [here](https://rets.ly/docs).
