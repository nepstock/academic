<template>
  <div class="home-page">
    <b-overlay :show="!show" rounded="sm">
      <Menu />
      <section
        id="loan"
        ref="loan"
        class="bg-gray h100 d-flex align-items-center relative"
      >
        <b-container>
          <PulseCircle />
          <b-row class="justify-content-center">
            <b-col class="mt-5" cols="12">
              <h1 class="h4 text-center my-3 p-2">
                ¡Listo!<br />

                ¡Estas son las ofertas que encontramos para ti!
              </h1>
            </b-col>
            <b-col
              v-for="item in defaultOffer"
              :key="item.id"
              cols="10"
              sm="4"
              md="3"
            >
              <CardResult :item="item" />
            </b-col>
          </b-row>
        </b-container>
      </section>
    </b-overlay>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      defaultOffer: [
        {
          id: 1,
          name: 'Universidad Kuepa',
          logo:
            'https://web-pixel.s3.amazonaws.com/media/public/logo-universidad-kuepa.png',
          url: 'https://google.com.mx/',
          features: [
            '$1,490 mensuales en toda la carrera',
            'Sin inscripción',
            '100% en línea',
            'Validez oficial en la SEP',
            'Titulación incluída',
          ],
          educative_offer: {
            id: 3,
            description:
              'La Licenciatura en Marketing Digital de la Uk te permite conocer la práctica de los mercadólogos adaptado al mundo digital actual. Podrás trabajar en la industria editorial, en agencias de mercadotecnia, crear publicidad eficiente y relaciones públicas.',
            url: 'http://www.kuepa.com/mx/oferta/uk/adnetwork/pixel',
          },
        },
      ],
    }
  },
  computed: {
    getResults() {
      return this.$store.state.form.results
    },
  },
  created() {
    setTimeout(() => {
      this.show = true
    }, 300)
  },
}
</script>
<style scoped>
#loan {
  overflow: hidden;
}
.bg-white-50 {
  background: rgba(255, 255, 255, 0.65);
  border-radius: 10px;
}

@media (min-width: 768px) {
  .bg-white-50 {
    background: transparent;
  }
}
</style>
