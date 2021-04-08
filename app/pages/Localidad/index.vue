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
            <b-col sm="6" class="text-center">
              <Card title="" padding="p-4 p-sm-5" align="left">
                <p>
                  Por el momento solo tenemos esta oferta presencial en la
                  <span class="font-weight-bold">CDMX</span>
                </p>
                <b-form>
                  <b-form-group
                    id="state"
                    class="mt-4"
                    label=""
                    label-for="input-state"
                  >
                    <b-form-select
                      v-model="form.location"
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
export default {
  data() {
    return {
      form: {
        location: 'CDMX',
      },
      options: [
        {
          value: 'CDMX',
          text: 'CDMX',
        },
      ],
    }
  },
  computed: {
    getSchool() {
      return this.$store.state.form.school
    },
    getType() {
      return this.$store.state.form.type
    },
    getCareer() {
      return this.$store.state.form.career
    },
  },
  methods: {
    onSubmit() {
      this.$store.commit('setLocation', this.form.location)
      this.$router.push({
        path:
          '/personal?type=' +
          this.getType +
          '&level=' +
          this.getSchool +
          '&oferta=' +
          this.getCareer,
      })
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
