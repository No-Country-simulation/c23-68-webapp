export const routes = {
  auth: {
    base: '/api/auth',
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
    getDataCurrentUser: {
      relative: '/getDataCurrentUser',
      absolute: '/api/auth/getDataCurrentUser',
    },
  },
  user: {
    base: 'api/user',
    get: {
      relative: '/get',
      absolute: '/api/user/get',
    },
    getById: {
      relative: '/getById',
      absolute: '/api/user/getById',
    },
    update: {
      relative: '/update',
      absolute: '/api/user/update',
    },
  },
}
