<template>
  <q-page padding>
    <p class="text-body1">
      Sua Conta Foi Criada Com Sucesso...!
    </p>
    <p class="text-body1">
      Verifique o InBox do Email para Confirmacao dos Dados: <strong>{{ $route.query.email }}</strong>
    </p>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageEmailConfirmation'
})
</script>
