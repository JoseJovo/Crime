<template>
  <div class="q-pa-md">
    <div class="q-gutter-md row items-start">
      <q-input
      label="Nome do Denunciante"
      v-model="name"
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || 'Campo de Nome obrigatório!']"
      /><br>


    </div>
  </div>
  <div>Hora da Ocorrencia</div>
  <div><q-input hint="" v-model="form.time" filled type="time"  /></div>
  <div>Data da Ocorrencia</div>
  <div><q-input v-model="form.date" filled type="date" hint="" /></div>
  <div>Discricao do Crime</div>
  <div>  <q-editor>
        v-model="form.discription"
        min-height="5rem"
      </q-editor>
      </div>
      <div class=" q-pt-sm">
      <q-btn
      label="Registar notificacao"
      color="brown"
      class="full-width"
      outline
      type="submit"
      />
      <q-btn label="Voltar" color="primary" class="" flat :to="{ name: 'login' }" rounded />
    </div>

</template>

<script>
import { ref } from 'vue'

export default {
  name:'PageDenuncia',
  setup () {
    const form = ref ({
      name: '',
      time: '',
      date: '',
      description: ''

    })
    return {
      form
    }
  }
}
</script>
