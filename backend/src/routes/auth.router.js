import digipolisLogin from '@digipolis/auth';

function getAuthConfig() {
  return {
    oauthHost: process.env.AUTHENTICATION_OAUTHHOST,
    apiHost: process.env.AUTHENTICATION_APIHOST,
    errorRedirect: '/',
    basePath: '/auth',
    auth: {
      clientId: process.env.AUTHENTICATION_CLIENTID,
      clientSecret: process.env.AUTHENTICATION_CLIENTSECRET,
    },
    serviceProviders: {
      mprofiel: {
        scopes: 'all',
        url: process.env.AUTHENTICATION_SERVICEPROVIDERS_MPROFIEL_URL,
        identifier: 'astad.mprofiel.v1',
        fetchPermissions: false,
        applicationName: 'digipolis_boilerplate_app',
        tokenUrl: process.env.AUTHENTICATION_SERVICEPROVIDERS_MPROFIEL_TOKENURL,
      },
    },
  };
}
function setupAuthRoutes(router) {
  router.use(digipolisLogin(router, getAuthConfig()));
}

export default setupAuthRoutes;

