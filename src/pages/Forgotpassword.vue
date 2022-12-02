<template>
  <q-page padding class="row justify-center items-center">
    <q-form style="width: 90%; max-width: 550px" @submit.prevent="handlePasswordReset">
      <p class="col-12 text-h5 text-center">Recuperar Senha</p>

      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-input
          label="Email"
          v-model="email"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Campo obrigatório! Porfavor insira o email']" />

        <div class="full-width q-pt-md q-gutter-y-sm">
          <q-btn label="Enviar Email" color="primary" class="full-width" rounded type="submit" />

          <q-btn label="Voltar" color="primary" class="full-width" flat :to="{ name: 'login' }" rounded />
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'
import useNotify from 'src/composables/UseNotify'

export default defineComponent({
  setup () {
    const { sendPasswordRestEmail } = useAuthUser()
    const { notifyError, notifySuccess } = useNotify()

    const email = ref('')

    const handlePasswordReset = async () => {
      try {
        notifySuccess(`Password reset email sent to: ${email.value}`)
        await sendPasswordRestEmail(email.value)
        alert(`Password reset email sent to: ${email.value}`)
      } catch (error) {
        notifyError(error.message)
      }
    }

    return {
      email,
      handlePasswordReset
    }
  }
})
</script>
