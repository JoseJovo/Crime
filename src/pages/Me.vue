<template>
  <q-page class="flex flex-center">
    <div v-if="user">
      <h4 class="col-12 text-h5 text-center">                   Bem Vindo  ao Sistema de Alertas de Crimes {{ user.user_metadata.name }}</h4>

    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'

export default defineComponent({
  name: 'PageMe',

  setup () {
    const { user } = useAuthUser()

    return {
      user
    }
  }
})
</script>
