## Example App for Retsly SDKs

This is a very simple example of how to use the Retsly JS SDKs to easily make calls to Retsly from the back- or front-end.

This example assumes that you have a Retsly account and have already registered an application as you will need that application's assets to access the Retsly API. Also, please ensure that you've registered ```localhost``` as a domain in your application setup.

We use an Express server build on Node.js in this example. Consequently, you will also need to have Node/NPM setup on your computer prior to following the instruction below.

## Instructions

1. ```npm install```
2. Go into the `frontend` folder and replace the ```<<<client_id>>>``` and/or ```<<<browser_token>>>``` with your application's client_id and/or browser token respectively.
3. run ```npm build``` or ```make build``` in your terminal. These commands will compile whatever code is in the `frontend` folder.
4. Run ```npm server.js``` -- the listening port is currently hardcoded to ```3000```. Feel free to alter this in the ```server.js``` file found at the root of this folder.
5. Direct your browser to ```localhost:3000``` or ```localhost:WHATEVER_PORT_YOU_CHOSE```. The links on the homepage will direct you to the responses make by either the v1 or v2 Retsly JS SDK.

###### Modify the code, have fun, and/or profit!
