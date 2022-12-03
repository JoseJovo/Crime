<template>
  <div class="q-pa-md">
    <q-carousel
      arrows
      animated
      v-model="slide"
      height="400px"
    >
      <q-carousel-slide name="first" img-src="crime.png" >
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Denuncia Anonima</div>
          <div class="text-subtitle1">Burla informática através de captura de credenciais de correio eletrónico</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="second" img-src="~assets/crr.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Denuncia</div>
          <div class="text-subtitle1">Situações de burla resultantes de aquisição de bens através da Internet</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="third" img-src="~assets/inf.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Denuncia com Seguimento</div>
          <div class="text-subtitle1">Diz Não! Campanha contra extorsão e coação sexual online a crianças</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
  <div class="full-width q-pt-md">
               <q-btn label="Denuncie" color="primary" class="full-width" flat :to="{ name: 'login' }" rounded />
               <q-btn label="Denuncie pelo Whatsapp" icon="mdi-whatsapp" color="primary" class="full-width" flat :to="{ name: 'login' }" rounded />
            </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'PageInicial',
  setup () {
    return {
      slide: ref('first')
    }
  }
}
</script>

<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
</style>
