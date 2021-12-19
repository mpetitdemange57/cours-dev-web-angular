export const environment = {
  production: true,
  backend: {
    protocol: 'http',
    host: '127.0.0.1',
    port: '3000',
    endpoints: {
      employeAleatoire: '/api/employe/random',
      tousLesEmployes: '/api/employe',
      unEmploye: '/api/employe/:id'
    }
  }
};
