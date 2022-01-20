export const environment = {
  production: false,
  backend: {
    protocol: 'http',
    host: '127.0.0.1',
    port: '3000',
    endpoints: {
      employeAleatoire: '/api/employe/random',
      tousLesEmployes: '/api/employe',
      unEmploye: '/api/employe/:id',
      filterByName: '/api/employe/name/:name'
    }
  }
};
