# Starter kit

## Usage
### Auth
Set configuration in .env (example in Configuration)
By default the login routes are mounted on `/auth`:

 - **Login mprofiel:** 			`/auth/login/mprofiel`
 - **isloggedin mprofiel:**  	`/auth/login/mprofiel`
 - **logout mprofiel:** 		`/logout/callback/{service}`

## Testing

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
