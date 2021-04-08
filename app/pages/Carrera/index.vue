<template>
  <div class="home-page">
    <Menu />
    <section
      id="loan"
      ref="loan"
      class="bg-gray h100 d-flex align-items-center relative"
    >
      <b-container>
        <!-- <Square />
        <Radial /> -->
        <PulseCircle />
        <b-row class="justify-content-center">
          <transition name="fade-in" appear>
            <b-col v-if="showIntro && !$fetchState.pending" sm="6">
              <b-button size="sm" to="/inscripcion" variant="link"
                ><b-icon icon="arrow-left" class="mr-2"></b-icon>atrás</b-button
              >
              <Card
                title="Elige tu carrera, curso o especialidad!"
                padding="p-4 p-sm-5"
                align="left"
              >
                <b-form>
                  <b-form-group
                    id="career"
                    class="mt-4"
                    :label="'¿Qué ' + getSchool + ' quieres estudiar?'"
                    label-for="input-career"
                  >
                    <b-form-select
                      v-model="form.career"
                      :options="options"
                    ></b-form-select>
                  </b-form-group>
                  <b-row class="justify-content-end mt-5">
                    <b-col sm="6" md="6">
                      <b-button
                        class="button-primary"
                        size="lg"
                        block
                        pill
                        @click="onSubmit"
                        >Siguiente</b-button
                      >
                    </b-col>
                  </b-row>
                </b-form>
              </Card>
            </b-col>
          </transition>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import { initOption } from '../../utils/utils'
export default {
  async fetch() {
    this.params = {
      type_id: 1,
      type: this.$route.query.type,
      level: this.$route.query.level,
    }
    this.carrers = await this.$axios.$get(
      process.env.NUXT_ENV_BACKEND_ACADEMIC + '/api/institutions/offer',
      {
        params: this.params,
      }
    )

    this.options = this.carrers.data.map((item) => {
      return {
        value: item.id,
        text: item.name,
      }
    })

    this.options.unshift(initOption)
  },
  data() {
    return {
      showIntro: false,
      form: {
        career: null,
      },
      options: [],
    }
  },
  computed: {
    getSchool() {
      return this.$store.state.form.school
    },
    getCareer() {
      return this.$store.state.form.career
    },
    getType() {
      return this.$store.state.form.type
    },
  },
  watch: {
    options(value) {
      this.$store.commit('setNameCareers', value)
    },
  },
  created() {
    this.form.career = this.getCareer ? this.getCareer : 'init'
    setTimeout(() => {
      this.showIntro = true
    }, 300)
  },
  methods: {
    onSubmit() {
      if (this.form.career !== 'init') {
        this.$store.commit('setCareer', this.form.career)
        if (this.$route.query.type === 'online') {
          this.$store.commit('setLocation', 'online')
          this.$router.push({
            path:
              '/personal?type=' +
              this.getType +
              '&level=' +
              this.getSchool +
              '&oferta=' +
              this.getCareer,
          })
        } else {
          this.$router.push({
            path:
              '/localidad?type=' +
              this.getType +
              '&level=' +
              this.getSchool +
              '&oferta=' +
              this.getCareer,
          })
        }
      } else {
        alert('debes selccionar una opción')
      }
    },
  },
}
</script>
<style scoped>
#loan {
  overflow: hidden;
}
.card-pix {
  height: auto !important;
}
</style>
