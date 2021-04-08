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
              <h1 class="h4 mb-4">¡Comencemos!</h1>
              <Card
                title="Solicita un préstamo"
                padding="p-4 p-sm-5"
                align="left"
              >
                <p>
                  Responde estas breves preguntas. Nosotros te mostraremos las
                  mejores ofertas personalizadas para tí
                </p>
                <b-form>
                  <b-form-group
                    id="amount"
                    label="¿Cuánto dinero necesitas?"
                    label-for="input-amount"
                  >
                    <b-icon icon="cash"></b-icon>
                    <b-form-input
                      id="input-amount"
                      v-model="form.amount"
                      type="number"
                      required
                      placeholder=""
                    ></b-form-input>
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
export default {
  data() {
    return {
      showIntro: false,
      form: {
        amount: '',
      },
    }
  },
  computed: {
    getAmount() {
      return this.$store.state.form.amount
    },
  },
  created() {
    this.form.amount = this.getAmount
    setTimeout(() => {
      this.showIntro = true
    }, 300)
  },
  methods: {
    onSubmit() {
      console.log('save form', this.form)
      this.$store.commit('setAmount', this.form.amount)
      this.$router.push({ path: '/prestamo/personal' })
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
