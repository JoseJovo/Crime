
const routes = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [

      { path: '/', name: 'inic', component: () => import('pages/Inicial.vue') },
      { path: 'inicial', name: 'inicial', component: () => import('pages/Inicial.vue') },
      { path: 'login', name: 'login', component: () => import('pages/Login.vue') },
      { path: 'register', name: 'register', component: () => import('pages/Register.vue') },
      { path: 'email-confirmation', name: 'email-confirmation', component: () => import('pages/EmailConfirmation.vue') },
      { path: 'forgot-password', name: 'forgot-password', component: () => import('pages/ForgotPassword.vue') },
      { path: 'reset-password', name: 'reset-password', component: () => import('pages/ResetPassword.vue') }

    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'me', name: 'me', component: () => import('pages/Me.vue') },
      { path: 'medicar', name: 'medicar', component: () => import('src/pages/Denuncia.vue') },
      { path: 'product', name: 'product', component: () => import('pages/product/List.vue') },
      { path: 'form-product', name: 'form-product', component: () => import('pages/product/Form.vue') }

      // { path: '', component: () => import('pages/IndexPage.vue') }
    ],
    meta: {
      requiresAuth: true
    }
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
