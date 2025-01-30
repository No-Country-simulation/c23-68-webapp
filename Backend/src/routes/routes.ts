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
  transaction: {
    base: '/api/transaction',
    create: {
      relative: '/create',
      absolute: '/api/transaction/create',
    },
    get: {
      relative: '/get',
      absolute: '/api/transaction/get',
    },
    update: {
      relative: '/update',
      absolute: '/api/transaction/update',
    },
    delete: {
      relative: '/delete',
      absolute: '/api/transaction/delete',
    },
  },
  category: {
    base: '/api/category',
    create: {
      relative: '/create',
      absolute: '/api/category/create',
    },
    get: {
      relative: '/get',
      absolute: '/api/category/get',
    },
    getAll: {
      relative: '/getAll',
      absolute: '/api/category/getAll',
    },
    update: {
      relative: '/update',
      absolute: '/api/category/update',
    },
    delete: {
      relative: '/delete',
      absolute: '/api/category/delete',
    },
  },
}
