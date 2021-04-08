<template>
  <div>
    <div class="form-header p-3">
      <h1 class="h5">
        <span class="text-kuepa"
          >Llámanos hoy mismo y conoce nuestras promociones vigentes</span
        >
        01 800 444 0654
      </h1>
    </div>
    <div class="bg-white p-4">
      <b-form :validated="false" @submit.stop.prevent="onSubmit">
        <b-row>
          <b-col sm="6">
            <b-form-group id="name" label="Nombre(s)" label-for="input-name">
              <b-icon icon="person"></b-icon>
              <b-form-input
                id="input-name"
                v-model="params.nombre"
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
                v-model="params.apellido"
                type="text"
                required
                placeholder=""
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col sm="12">
            <b-form-group id="phone" label="Teléfono" label-for="input-phone">
              <b-icon icon="phone"></b-icon>
              <b-form-input
                id="input-phone"
                v-model="params.telefono"
                type="tel"
                required
                placeholder="a 10 dígitos"
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
                v-model="params.email"
                type="email"
                required
                placeholder=""
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row class="justify-content-center mt-3">
          <b-col sm="6" md="9">
            <b-button class="button-kuepa" size="lg" block pill type="submit"
              >Enviar</b-button
            >
          </b-col>
        </b-row>
      </b-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      params: {
        nombre: '',
        apellido: '',
        email: '',
        id_pais: 'MX',
        telefono: '',
        adnetwork: 'pixelLicenciaturas',
        tipo_telefono: 'MOBILE',
        ciudad: 161,
        career_id: 108,
        college: 104,
      },
    }
  },
  created() {
    if (this.$route.name === 'Kuepa-preparatorias') {
      this.params.adnetwork = 'PixelPreparatorias'
    } else {
      this.params.adnetwork = 'pixelLicenciaturas'
    }
  },
  methods: {
    onSubmit() {
      if (this.params.telefono.length < 10) {
        this.$swal(
          'Aviso',
          'Por favor coloca un teléfono válido a 10 dígitos',
          'warning'
        )
      } else {
        this.$axios
          .post(
            `https://panel.kuepa.com/index.php/api/registrate?nombre=${this.params.nombre}&apellido=${this.params.apellido}&email=${this.params.email}&id_pais=${this.params.id_pais}&telefono=${this.params.telefono}&adnetwork=${this.params.adnetwork}&tipo_telefono=${this.params.tipo_telefono}&ciudad=${this.params.ciudad}&career_id=${this.params.career_id}&college=${this.params.college}`
          )
          .then((response) => {
            if (this.$route.name === 'Kuepa-preparatorias') {
              console.log('contact')
              this.$fb.track('Contact')
            } else {
              console.log('complete')
              this.$fb.track('CompleteRegistration')
            }

            this.$swal
              .fire({
                type: 'success',
                title: '¡Listo!',
                text:
                  '¡Hemos enviado tu solicitud. Pronto se comunicarán contigo para darle seguimiento!',
                confirmButtonText: 'Enterado',
                confirmButtonColor: '#CC2753',
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
              })
              .then((result) => {
                /* Read more about isConfirmed, isDenied below */
                this.params.nombre = ''
                this.params.apellido = ''
                this.params.email = ''
                this.params.telefono = ''
              })
          })
          .catch((err) => {
            console.log(err)
            if (this.$route.name === 'Kuepa-preparatorias') {
              console.log('contact')
              this.$fb.track('Contact')
            } else {
              console.log('complete')
              this.$fb.track('CompleteRegistration')
            }
            this.$swal
              .fire({
                type: 'success',
                title: '¡Listo!',
                text:
                  '¡Hemos enviado tu solicitud. Pronto se comunicarán contigo para darle seguimiento!',
                confirmButtonText: 'Enterado',
                confirmButtonColor: '#CC2753',
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
              })
              .then((result) => {
                /* Read more about isConfirmed, isDenied below */
                this.params.nombre = ''
                this.params.apellido = ''
                this.params.email = ''
                this.params.telefono = ''
              })
          })
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
.form-header {
  background: #1e3a43;
  color: #fff;
  text-align: center;
}
</style>
