export const routes = {
  auth: {
    base: 'api/auth',
    login: {
      relative: '/login',
      absolute: '/api/auth/login',
    },
    logout: {
      relative: '/logout',
      absolute: '/api/auth/logout',
    },
    register: {
      relative: '/register',
      absolute: '/api/auth/register',
    },
  },
}
