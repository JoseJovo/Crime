<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handleRegister">
    <p class="col-12 text-h5 text-center"> Criando Conta </p>
    <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-lg">
      <q-input
      label="Nome"
      v-model="form.name"
      rounded
      outlined
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || 'Campo de Nome obrigatório!']"
      />

      <q-input
      label="Email"
      type="email"
      v-model="form.email"
      rounded
      outlined
      lazy-rules
       :rules="[(val) => (val && val.length > 0) || 'Email obrigatório!']"
      />

      <q-input
      label="Senha"
      type="password"
      v-model="form.password"
      rounded
      outlined
      lazy-rules
      :rules="[(val) => (val && val.length >= 6) || 'Senha obrigatória (Pelo menos 6 caracteres)!']"
      />
      <q-input
      label="Contacto"
      type="integer"
      v-model="form.tel"
      rounded
      outlined
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || 'Campo de Nome obrigatório!']"
      />
      <div class=" q-pt-sm">
      <q-btn
      label="Criar Conta"
      color="primary"
      class="full-width"
      outline
      rounded
      type="submit"
      />
      <q-btn label="Voltar" color="primary" class="full-width" flat :to="{ name: 'login' }" rounded />
    </div>
    </div>
  </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'
import { useRouter } from 'vue-router'
import useNotify from 'src/composables/UseNotify'

export default defineComponent({
  name: 'RegisterPage',

  setup () {
    const router = useRouter()
    const { register } = useAuthUser()
    const { notifySuccess, notifyError } = useNotify()

    const form = ref({
      name: '',
      email: '',
      tel:'',
      password: ''
    })

    const handleRegister = async () => {
      try {
        await register(form.value)
        notifySuccess('Registro realizado com sucesso!')
        router.push({
          name: 'email-confirmation',
          query: { email: form.value.email }
        })
      } catch (error) {
        // alert(error)
        notifyError(error.message)
      }
    }

    return {
      form,
      handleRegister
    }
  }
})
</script>
<style>
.q-card{
  width: 22.5rem
}
.bg-img{
  background: url('../assets/med7.jpg');
  background-size: cover;
}
.bg-field{
  background: rgba(0,0,0,0.5) !important;
}
</style>
