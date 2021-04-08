<template>
  <div class="home-page">
    <Menu :color="'text-white'" />
    <section
      id="home"
      ref="intro"
      class="bg-intro2 h100 d-flex align-items-center relative"
    >
      <b-container>
        <b-row class="justify-content-center">
          <transition name="fade-in" appear>
            <b-col v-if="showIntro" sm="8" class="text-center">
              <!-- <img
                width="150"
                height="150"
                src="../assets/img/512.png"
                alt="Academic"
              /> -->
              <h1 class="h3 my-4 text-white">
                ¡Encuentra la mejor oferta académica hecha a la medida para ti!
              </h1>
              <b-row class="justify-content-center">
                <b-col sm="6">
                  <b-button
                    to="/inscripcion?type=online"
                    pill
                    block
                    class="button-primary px-5"
                    size="lg"
                    >Empieza aquí</b-button
                  >
                </b-col>
              </b-row>
            </b-col>
          </transition>
        </b-row>
      </b-container>
    </section>
    <section id="work" ref="work" class="h80">
      <b-container class="py-5 relative">
        <transition name="fade-in">
          <b-row v-if="showWork" class="row-steps">
            <b-col sm="4" class="mb-3">
              <Card padding="p-5">
                <img
                  width="150"
                  height="150"
                  src="../assets/img/formulario.svg"
                  alt="Responde"
                />
                <h5 class="text-primary">Responde el formulario</h5>
                <p class="mb-0">¡No te tomará más de 2 minutos!</p>
              </Card>
            </b-col>
            <b-col sm="4" class="mb-3">
              <Card padding="p-5">
                <img
                  width="150"
                  height="150"
                  src="../assets/img/elige.svg"
                  alt="Elige"
                />
                <h5 class="text-primary">Recibe tus resultados</h5>
                <p class="mb-0">
                  Te mostraremos las ofertas educativas hechas a tu medida con
                  base en tus respuestas
                </p>
              </Card>
            </b-col>
            <b-col sm="4" class="mb-3">
              <Card padding="p-5">
                <img
                  width="150"
                  height="150"
                  src="../assets/img/resultados.svg"
                  alt="Resultados"
                />
                <h5 class="text-primary">Elige la opción que más te guste</h5>
                <p class="mb-0">
                  Da click en “solicitar información” en la oferta académica que
                  más te guste. ¡Puedes elegir todas!
                </p>
              </Card>
            </b-col>
          </b-row>
        </transition>
        <transition name="slide-fade">
          <SquareGreen v-if="showBenefits" />
        </transition>
      </b-container>
    </section>
    <section
      id="banner"
      ref="banner"
      class="bg-gray py-5 h60 d-flex align-items-center"
    >
      <transition name="fade-in">
        <b-container v-if="showBanner" class="text-center">
          <h2 class="title-banner text-primary mb-5">
            ¡Empieza a construir tu futuro hoy mismo!
          </h2>
          <b-button to="/inscripcion" pill class="button-primary px-5" size="lg"
            >Comenzar ahora</b-button
          >
        </b-container>
      </transition>
    </section>
    <section id="faq" class="py-5 h60">
      <transition name="fade-in">
        <b-container v-if="showFaq">
          <b-row>
            <b-col sm="12">
              <h3 class="text-primary mb-5">Preguntas Frecuentes</h3>
            </b-col>
            <b-col sm="6" class="px-3 px-sm-5">
              <h5 class="text-primary">Cómo funciona academic</h5>
              <p class="mb-5">
                Sabemos que hay miles de ofertas allá afuera, por eso creamos
                Academic, para hacer más sencillo tu proceso de búsqueda.
                Simplemente llena el formulario y nosotros te mostraremos la
                oferta académica que más se adecúe a tu perfil.
              </p>
              <h5 class="text-primary">¿Cuánto cuesta?</h5>
              <p class="mb-5">
                ¡El servicio de Academic ha sido, es y será siempre 100%
                gratuito!
              </p>
            </b-col>
            <b-col sm="6" class="px-3 px-sm-5">
              <h5 class="text-primary">¿Qué hacen con mis datos?</h5>
              <p class="mb-5">
                Tus datos están encriptados y solamente se compartirán con las
                ofertas académicas que tú elijas. Puedes encontrar nuestro aviso
                de privacidad aquí
              </p>
              <h5 class="text-primary">¿Dé donde son?</h5>
              <p class="mb-5">
                Academic es un servicio 100% mexicano para mexicanos
              </p>
            </b-col>
          </b-row>
        </b-container>
      </transition>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showIntro: false,
      showWork: false,
      showBenefits: false,
      showBanner: false,
      showFaq: false,
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeCreate() {
    this.$store.commit('setType', 'online')
  },
  created() {
    setTimeout(() => {
      this.showIntro = true
    }, 300)
  },
  methods: {
    handleScroll() {
      const intro = this.$refs.intro.clientHeight
      const work = this.$refs.work.clientHeight
      // const banner = this.$refs.banner.clientHeight

      console.log(intro, work)

      if (window.scrollY > 100) {
        this.showWork = true
      } else {
        this.showWork = false
      }

      if (window.scrollY > intro - 80) {
        this.showBenefits = true
      } else {
        this.showBenefits = false
      }

      if (window.scrollY > intro + (work / 5) * 2) {
        this.showBanner = true
      } else {
        this.showBanner = false
      }

      if (window.scrollY > intro + work) {
        this.showFaq = true
      } else {
        this.showFaq = false
      }
    },
  },
}
</script>
<style scoped>
.home-page {
  overflow-x: hidden;
}
#home {
  overflow: hidden;
}
.row-steps {
  margin-top: -6rem;
}
.title-banner {
  font-size: 1.5rem;
  text-align: center;
}
.icon-placeholder {
  font-size: 12rem;
}

@media (min-width: 768px) {
  .title-banner {
    font-size: 2.5rem;
  }
}
</style>
