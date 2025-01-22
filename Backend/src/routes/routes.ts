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
  transactions: {
    base: 'api/transactions',
    getAll: {
      relative: '/getTransactions',
      absolute: '/api/transactions/getTransactions',
    },
    create: {
      relative: '/createTransaction',
      absolute: '/api/transactions/createTransaction',
    },
    update: {
      relative: '/updateTransaction/:id',
      absolute: '/api/transactions/updateTransaction/:id',
    },
    delete: {
      relative: '/deleteTransaction/:id',
      absolute: '/api/transactions/deleteTransaction/:id',
    },
  },
}
