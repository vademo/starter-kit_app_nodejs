[![Build Status](https://travis-ci.org/vademo/starter-kit_app_nodejs.svg?branch=master)](https://travis-ci.org/vademo/starter-kit_app_nodejs)
[![Coverage Status](https://coveralls.io/repos/github/vademo/starter-kit_app_nodejs/badge.svg?branch=master)](https://coveralls.io/github/vademo/starter-kit_app_nodejs?branch=master)
# Starter kit node

## Usage
### Instalation:
- We use npm as our default package manager. to install run `npm install`

### Run:
|                       | cmd                       | description |
| --------------------- | ------------------------- |---|
| **Start app local**   | `npm start`               | Start app with local node|
| **Start database**    | `docker-compose up mongo` | Start database for local run |
| **Build**             | `npm build`               | We're using babel to compile the ES Modules Syntax to commonjs. ES Modules are still experimental in the node 11. |
| **Run build**         | `npm run serve`           | |
| **Run app in docker** | `docker-compose up`       | Run app in dockerized enviroment |

### Auth
Set configuration in .env (example in Configuration)
By default the login routes are mounted on `/auth`:

 - **Login mprofiel:** 			`/auth/login/mprofiel`
 - **isloggedin mprofiel:**  	`/auth/login/mprofiel`
 - **logout mprofiel:** 		`/logout/callback/{service}`

## Testing

|                               |  cmd                                          |  description |
| ----------------------------- | --------------------------------------------- | --- |
| **Run all tests**             | `npm test`                                    | run the unit test locally|
| **Run all tests in docker**   | `docker-compose -f docker-compose.ci.yml up`  | Run all tests in a dockerized enviroment |
| **Generate coverage**         | `npm run test:coverage`                       | Run all test & generate coverage |
| **test-build (bamboo)**       | `npm run test-build`                          | test command for Bamboo|
## Configuration

### Auth

```bash
# General settings
PORT=2000
MONGO_CONNECTIONSTRING=mongodb://localhost:27017/starterkit

# AUTHENTICATION
AUTHENTICATION_OAUTHHOST=https://api-oauth2-o.antwerpen.be
AUTHENTICATION_APIHOST=https://api-gw-o.antwerpen.be
AUTHENTICATION_CLIENTID=<your-client-id>
AUTHENTICATION_CLIENTSECRET=<your-client-secret>
AUTHENTICATION_SERVICEPROVIDERS_MPROFIEL_URL=https://api-gw-o.antwerpen.be/astad/mprofiel/v1/me
AUTHENTICATION_SERVICEPROVIDERS_MPROFIEL_TOKENURL=https://api-gw-o.antwerpen.be/astad/mprofiel/v1/oauth2/token

```
	