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
            <!-- <b-col
              v-for="item in defaultOffer"
              :key="item.id"
              cols="10"
              sm="4"
              md="3"
            >
              <CardResult :item="item" />
            </b-col> -->
          </b-row>
          <b-row>
            <b-col>
              <div class="carousel-wrapper">
                <VueSlickCarousel v-bind="slickOptions">
                  <div
                    v-for="item in defaultOffer"
                    :key="item.id"
                    class="img-wrapper"
                  >
                    <CardResult :item="item" />
                  </div>
                </VueSlickCarousel>
              </div>
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
          logo: require('../../assets/img/ieu.png'),
          url:
            'http://universidad.ieu.edu.mx/flexible?utm_source=google&utm_medium=cpc&utm_campaign=01-SEA-Brand-IEU-Universidad-V&utm_content=MAE&&utm_term=ieu&gclid=Cj0KCQjwpdqDBhCSARIsAEUJ0hONJbPtK1zeeI2Banakp_tlJ11N16PQlAcyBQAbTykgPSihfkR0S8AaAipPEALw_wcB',
          features: [
            'Licenciatura',
            '100% en línea',
            'Validez oficial en la SEP',
            'Titulación incluída',
            'Mensualidad de $2,804',
          ],
          educative_offer: {
            id: 3,
            description:
              'La Licenciatura en Marketing Digital de la Uk te permite conocer la práctica de los mercadólogos adaptado al mundo digital actual. Podrás trabajar en la industria editorial, en agencias de mercadotecnia, crear publicidad eficiente y relaciones públicas.',
            url: 'http://www.kuepa.com/mx/oferta/uk/adnetwork/pixel',
          },
        },
        {
          id: 44,
          name: 'Universidad Kuepa',
          logo: require('../../assets/img/univer.png'),
          url: 'http://univermilenium.edu.mx/',
          features: [
            'Licenciatura',
            '100% en línea',
            'Validez oficial en la SEP',
            'Titulación incluída',
            'Mensualidad de $1,940',
          ],
          educative_offer: {
            id: 3,
            description:
              'La Licenciatura en Marketing Digital de la Uk te permite conocer la práctica de los mercadólogos adaptado al mundo digital actual. Podrás trabajar en la industria editorial, en agencias de mercadotecnia, crear publicidad eficiente y relaciones públicas.',
            url: 'http://www.kuepa.com/mx/oferta/uk/adnetwork/pixel',
          },
        },
        {
          id: 33,
          name: 'Universidad Kuepa',
          logo: require('../../assets/img/unitec.jpeg'),
          url:
            'https://www.unitec.mx/calcula-tu-beca/?utm_source=google&utm_medium=cpc&utm_term=Unitec&utm_campaign=GS_UG_RMKT_ZM&gclid=Cj0KCQjwpdqDBhCSARIsAEUJ0hOdqzXkzdUndnAY4j2q0HmtUV3mjX4SxRL6p4zr1Qd9tPEu4FqVSRcaApHLEALw_wcB&gclsrc=aw.ds',
          features: [
            'Licenciatura',
            '100% en línea',
            'Validez oficial en la SEP',
            'Titulación incluída',
            'Mensualidad de $2,420',
          ],
          educative_offer: {
            id: 3,
            description:
              'La Licenciatura en Marketing Digital de la Uk te permite conocer la práctica de los mercadólogos adaptado al mundo digital actual. Podrás trabajar en la industria editorial, en agencias de mercadotecnia, crear publicidad eficiente y relaciones públicas.',
            url: 'http://www.kuepa.com/mx/oferta/uk/adnetwork/pixel',
          },
        },
        {
          id: 2,
          name: 'Universidad Kuepa',
          logo: require('../../assets/img/ula.jpg'),
          url:
            'https://enlinea.ula.edu.mx/?utm_source=Landing&utm_medium=Google&utm_campaign=Search&gclid=Cj0KCQjwpdqDBhCSARIsAEUJ0hMuwTzO35A6mwXkAOnbSHm1hmdQBaIZ9-MMF2TBBEPvP6SfHa2-BgIaAkLhEALw_wcB',
          features: [
            'Licenciatura',
            '100% en línea',
            'Validez oficial en la SEP',
            'Titulación incluída',
            'Mensualidad de $7,800',
          ],
          educative_offer: {
            id: 3,
            description:
              'La Licenciatura en Marketing Digital de la Uk te permite conocer la práctica de los mercadólogos adaptado al mundo digital actual. Podrás trabajar en la industria editorial, en agencias de mercadotecnia, crear publicidad eficiente y relaciones públicas.',
            url: 'http://www.kuepa.com/mx/oferta/uk/adnetwork/pixel',
          },
        },
        {
          id: 5,
          name: 'Universidad Kuepa',
          logo: require('../../assets/img/udg.png'),
          url: 'http://www.udgvirtual.udg.mx/',
          features: [
            'Licenciatura',
            '100% en línea',
            'Validez oficial en la SEP',
            'Titulación incluída',
            'Mensualidad de $2,558',
          ],
          educative_offer: {
            id: 3,
            description:
              'La Licenciatura en Marketing Digital de la Uk te permite conocer la práctica de los mercadólogos adaptado al mundo digital actual. Podrás trabajar en la industria editorial, en agencias de mercadotecnia, crear publicidad eficiente y relaciones públicas.',
            url: 'http://www.kuepa.com/mx/oferta/uk/adnetwork/pixel',
          },
        },
      ],
      slickOptions: {
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1,
            },
          },
        ],
      },
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

.carousel-wrapper {
  margin-bottom: 100px;
}

@media (min-width: 768px) {
  .bg-white-50 {
    background: transparent;
  }
}
</style>
