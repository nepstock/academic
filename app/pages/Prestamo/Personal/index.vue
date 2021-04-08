<template>
  <div class="home-page">
    <section
      id="loan"
      ref="loan"
      class="bg-intro h100 d-flex align-items-center relative"
    >
      <b-container>
        <Square />
        <Radial />
        <PulseCircle />
        <b-row class="justify-content-center">
          <transition name="fade-in" appear>
            <b-col v-if="showIntro" sm="6" class="text-center">
              <h1 class="h4 mb-4">¡Muy bien! ya falta poco...</h1>
              <Card padding="p-4 p-sm-5" align="left">
                <label class="small">
                  Necesito:<br />
                  <NuxtLink to="/prestamo">
                    <b-badge pill variant="primary">{{
                      getAmount | currency
                    }}</b-badge>
                  </NuxtLink>
                </label>
                <b-form>
                  <b-row>
                    <b-col sm="12">
                      <b-form-group
                        id="name"
                        label="Nombre completo"
                        label-for="input-name"
                      >
                        <b-icon icon="phone"></b-icon>
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
                      <b-form-group id="age" label="Edad" label-for="input-age">
                        <b-icon icon="phone"></b-icon>
                        <b-form-input
                          id="input-age"
                          v-model="form.age"
                          type="tel"
                          max-lenght="2"
                          required
                          placeholder=""
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
                          type="number"
                          required
                          placeholder=""
                        ></b-form-input>
                      </b-form-group>
                    </b-col>
                    <b-col sm="12">
                      <b-form-group
                        id="email"
                        label="Correo electrónico"
                        label-for="input-email"
                      >
                        <b-icon icon="phone"></b-icon>
                        <b-form-input
                          id="input-email"
                          v-model="form.email"
                          type="email"
                          required
                          placeholder=""
                        ></b-form-input>
                      </b-form-group>
                    </b-col>
                  </b-row>

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
export default {
  data() {
    return {
      showIntro: false,
      form: {
        name: '',
        age: '',
        email: '',
        phone: '',
      },
    }
  },
  computed: {
    getAmount() {
      return this.$store.state.form.amount
    },
    getPhone() {
      return this.$store.state.form.phone
    },
  },
  created() {
    this.form.phone = this.getPhone
    console.log(this.getPhone)
    setTimeout(() => {
      this.showIntro = true
    }, 300)
  },
  methods: {
    onSubmit() {
      console.log('save form', this.form)
      this.$store.commit('setUser', this.form)
      this.$router.push({ path: '/' })
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
