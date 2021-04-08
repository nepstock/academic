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
            <b-col v-if="showIntro && !$fetchState.pending" sm="6" class="my-5">
              <b-button size="sm" to="/carrera" variant="link"
                ><b-icon icon="arrow-left" class="mr-2"></b-icon>atrás</b-button
              >
              <Card padding="p-4 p-sm-5" title="Datos personales" align="left">
                <p>
                  ¡Ya estamos a solo un paso de empezar a construir tu futuro
                  ...!
                </p>
                <p>
                  <span class="text-capitalize">{{ level }}</span
                  >:
                  <span class="font-weight-bold ml-2 text-primary">{{
                    itemCareer[0].text
                  }}</span>
                </p>
                <b-form :validated="false" @submit.stop.prevent="onSubmit">
                  <b-row>
                    <b-col sm="6">
                      <b-form-group
                        id="name"
                        label="Nombre(s)"
                        label-for="input-name"
                      >
                        <b-icon icon="person"></b-icon>
                        <b-form-input
                          id="input-name"
                          v-model="form.name"
                          type="text"
                          required
                          placeholder=""
                        ></b-form-input>
                      </b-form-group>
                    </b-col>
                    <b-col sm="6">
                      <b-form-group
                        id="last_name"
                        label="Apellidos"
                        label-for="input-last_name"
                      >
                        <b-icon icon="person"></b-icon>
                        <b-form-input
                          id="input-last_name"
                          v-model="form.last_name"
                          type="text"
                          required
                          placeholder=""
                        ></b-form-input>
                      </b-form-group>
                    </b-col>
                    <b-col sm="6">
                      <b-form-group id="age" label="Edad" label-for="input-age">
                        <b-icon icon="person"></b-icon>
                        <b-form-input
                          id="input-age"
                          v-model="form.body.age"
                          type="tel"
                          max-lenght="2"
                          required
                          maxlength="2"
                          placeholder=""
                          @keypress="isNumber($event)"
                        ></b-form-input>
                      </b-form-group>
                    </b-col>
                    <b-col sm="6">
                      <b-form-group
                        id="phone"
                        label="Teléfono celular a 10 dígitos"
                        label-for="input-phone"
                      >
                        <b-icon icon="phone"></b-icon>
                        <b-form-input
                          id="input-phone"
                          v-model="form.phone"
                          type="tel"
                          required
                          placeholder=""
                          maxlength="10"
                          @keypress="isNumber($event)"
                        ></b-form-input>
                      </b-form-group>
                    </b-col>
                    <b-col sm="12">
                      <b-form-group
                        id="email"
                        label="Correo electrónico"
                        label-for="input-email"
                      >
                        <b-icon icon="envelope"></b-icon>
                        <b-form-input
                          id="input-email"
                          v-model="form.email"
                          type="email"
                          required
                          placeholder=""
                        ></b-form-input>
                      </b-form-group>
                    </b-col>
                    <b-col sm="12">
                      <b-form-group>
                        <b-form-checkbox
                          id="checkbox-1"
                          v-model="form.body.terms"
                          name="checkbox-1"
                          value="accepted"
                          unchecked-value="not_accepted"
                          required
                        >
                          Acepto los términos y condiciones del servicio
                        </b-form-checkbox>
                      </b-form-group>
                      <b-form-group>
                        <b-form-checkbox
                          id="checkbox-2"
                          v-model="form.body.privacy"
                          name="checkbox-2"
                          value="accepted"
                          unchecked-value="not_accepted"
                          required
                        >
                          Acepto el aviso de privacidad
                        </b-form-checkbox>
                      </b-form-group>
                    </b-col>
                  </b-row>

                  <b-row class="justify-content-center mt-5">
                    <b-col sm="6" md="9">
                      <b-button
                        class="button-primary"
                        size="lg"
                        block
                        pill
                        type="submit"
                        >Ver mis ofertas académicas</b-button
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
export default {
  data() {
    return {
      showIntro: false,
      itemCareer: {},
      level: '',
      results: [],
      params: {},
      form: {
        name: '',
        last_name: '',
        email: '',
        phone: '',
        body: {
          age: '',
          terms: 'not_accepted',
          privacy: 'not_accepted',
          modalidad:
            this.$route.query.type === 'online' ? 'online' : 'presencial',
          carrera: '',
          estado: '',
        },
      },
    }
  },
  async fetch() {
    this.params = {
      type_id: 1,
      type: this.$route.query.type,
      level: this.$route.query.level,
      offer_id: this.$route.query.oferta,
    }
    const response = await this.$axios.$get(
      process.env.NUXT_ENV_BACKEND_ACADEMIC + '/api/institutions/',
      {
        params: this.params,
      }
    )

    this.results = response.data
  },

  computed: {
    getSchool() {
      return this.$store.state.form.school
    },
    getCareer() {
      return this.$store.state.form.career
    },
    getNameCareers() {
      return this.$store.state.form.nameCareers
    },
    getLocation() {
      return this.$store.state.form.location
    },
  },
  watch: {
    results(value) {
      this.$store.commit('setResults', value)
    },
  },
  created() {
    setTimeout(() => {
      this.showIntro = true
    }, 300)
    this.itemCareer = this.getNameCareers.filter(
      (item) => item.value === this.getCareer
    )
    this.getSchool === 'maestria'
      ? (this.level = 'Maestría')
      : (this.level = this.getSchool)

    this.getSchool === 'ingenieria'
      ? (this.level = 'Ingeniería')
      : (this.level = this.getSchool)
  },
  methods: {
    onSubmit() {
      if (this.form.phone.length < 10) {
        this.$swal(
          'Aviso',
          'Por favor coloca un teléfono válido a 10 dígitos',
          'warning'
        )
      } else {
        this.form.body.carrera = this.itemCareer[0].text
        this.form.body.estado = this.getLocation
        this.$store.commit('setUser', this.form)
        this.$router.push({ path: '/resultados' })
      }
    },
    isNumber(evt) {
      evt = evt || window.event
      const charCode = evt.which ? evt.which : evt.keyCode
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault()
      } else {
        return true
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
