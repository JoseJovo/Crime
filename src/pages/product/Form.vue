<template>
  <q-page padding>
    <div class="row justify-center" >
      <div class="col-12 text-center">
        <br>
        <p class="text-h6">
          Adicionar Denuncias
        </p>
      </div>

      <q-form class="col-md-7 col-xs-12 col-sm-12 q-gutter-y-lg" @submit.prevent="handleSubmit">
        <q-input
        label="Nome do Denunciante"
        v-model="form.name"
        :rules="[val => (val && val.length > 0) || 'Nome do Denunciante é obrigatório']"
        />


 <q-input
        label="Hora"
        v-model="form.time"
        filled type="time"


        />
        <q-input
        label="Data"
        filled type="date"

        v-model="form.date"


        />
        <div>Descrição</div>
        <q-editor
        v-model="form.description"
         min-height="5rem"
         />

        <q-btn
        :label="isUpdate ? 'Actualizar' : 'Guardar'"
        color="primary"
        class="full-width"
        outline
        rounded
        type="submit"
        />
        <q-btn
        label="Cancelar"
        color="primary"
        class="full-width"
        rounded
        flat
        to="/product"

        />
      </q-form>
    </div>
  </q-page>
</template>
<script>

import { defineComponent, ref, onMounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import useApi from 'src/composables/UseApi'
import useNotify from 'src/composables/UseNotify'
// import router from 'src/router'

export default defineComponent({
  name: 'PageFormproduct',

  setup () {
    const table = 'product'

    const router = useRouter()

    const route = useRoute()

    const { post, getById, update } = useApi()

    const { notifyError, notifySuccess } = useNotify()

    const isUpdate = computed(() => route.params.id)

    let product = {}

    const form = ref({
      name: '',
      time: '',
      date: '',
      description: ''


    })

    onMounted(() => {
      if (isUpdate.value) {
        handleGetProduct(isUpdate.value)
      }
    })

    const handleSubmit = async () => {
      try {
        if (isUpdate.value) {
          console.log(form.value)
          await update(table, form.value)
          notifySuccess(' Actualizado com Sucesso!')

          // await post(table, form.value)
        } else {
          await post(table, form.value)
          notifySuccess('Guardado com Sucesso!')
        }

        router.push({ name: 'product' })
      } catch (error) {
        notifyError(error.message)
      }
    }

    const handleGetProduct = async (id) => {
      try {
        product = await getById(table, id)
        form.value = product
      } catch (error) {
        notifyError(error.message)
      }
    }

    return {
      handleSubmit,
      form,
      isUpdate
    }
  }
})
</script>
