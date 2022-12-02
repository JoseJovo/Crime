<template>
  <q-page padding>
    <q-form class="row justify-center items-center" @submit.prevent="handleLogin">

      <p class="col-12 text-h5 text-center">Login</p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
  <q-input
    label="Email"
    v-model="form.email"
    lazy-rules
    :rules="[(val) => (val && val.length > 0) || 'Campo obrigatório!']"
    outlined
    rounded
    />
    <q-input
    label="Password"
    type="password"
    v-model="form.password"
    lazy-rules
    :rules="[(val) => (val && val.length > 0) || 'Campo obrigatório!']"
    outlined
    rounded
    />
    <div class="full-width q-pt-md">
    <q-btn
    label="Login"
    color="primary"
    class="full-width"
    type="submit"
    outlined
    rounded
    />
  </div>

  <div class="full-width ">
    <q-btn
    label="Criar Conta"
    color="primary"
    class="full-width"
    flat
    to="/register"
    />
  </div>

    <q-btn
    label="Esqueceu sua senha?"
    color="primary"
    class="full-width"
    flat
    :to="{ name: 'forgot-password'}"
    />

    <q-btn label="Voltar" color="primary" class="full-width" flat :to="{ name: 'inicial' }" rounded />

   </div>
    </q-form>
  </q-page>
  </template>

  <script>
  import { defineComponent, ref } from 'vue'
  import useAuthUser from 'src/composables/UseAuthUser'
  import useNotify from 'src/composables/UseNotify'
  import { useRouter } from 'vue-router'

  export default defineComponent({
    name: 'PageLogin',
    setup () {
      const router = useRouter()

      const { login } = useAuthUser()

      const { notifyError, notifySuccess } = useNotify()

      const form = ref({
        email: '',
        password: ''
      })

      const handleLogin = async () => {
        try {
          await login(form.value)
          notifySuccess('Logado com Sucesso!')
          router.push({ name: 'me' })
        } catch (error) {
          // alert(error.massage)
          notifyError(error.message)
        }
      }
      return {
        form,
        handleLogin
      }
    }

  })

  </script>
