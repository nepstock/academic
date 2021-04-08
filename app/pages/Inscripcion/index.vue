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
            <b-col v-if="!$fetchState.pending" sm="6" class="text-center">
              <Card
                title="¿Qué quieres estudiar?"
                padding="py-4 px-2 p-sm-5"
                align="center"
              >
                <b-form>
                  <b-form-group class="mt-4">
                    <div
                      v-for="(item, index) in options"
                      :key="item.text"
                      :class="item.value !== 'init' ? 'w-50 px-2' : ''"
                      class="d-inline-block"
                    >
                      <div
                        v-if="item.value !== 'init'"
                        class="w-100"
                        cols="6"
                        sm="6"
                      >
                        <input
                          :id="index"
                          v-model="form.school"
                          class="checkbox-tools"
                          type="radio"
                          name="tools"
                          :value="item.value"
                        />
                        <label class="for-checkbox-tools" :for="index">
                          {{ item.text }}
                        </label>
                      </div>
                    </div>
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
    this.types = await this.$axios.$get(
      process.env.NUXT_ENV_BACKEND_ACADEMIC +
        '/api/institutions/types/1?type=' +
        this.$route.query.type
    )

    this.options = this.types.data.map((item) => {
      return {
        value: item,
        text: this.capitalize(item),
      }
    })
    this.options.unshift(initOption)
    console.log(this.options)
  },
  data() {
    return {
      types: {},
      env: process.env.backend,
      form: {
        school: 'init',
      },
      options: [],
    }
  },
  computed: {
    getSchool() {
      return this.$store.state.form.school
    },
    getType() {
      return this.$store.state.form.type
    },
  },
  created() {
    this.form.school = this.getSchool ? this.getSchool : 'init'
  },
  methods: {
    onSubmit() {
      if (this.form.school !== 'init') {
        this.$store.commit('setSchool', this.form.school)
        this.$router.push({
          path: '/carrera?type=' + this.getType + '&level=' + this.getSchool,
        })
      } else {
        alert('debes seleccionar una opción')
      }
    },
    capitalize(s) {
      if (typeof s !== 'string') return ''
      return s.charAt(0).toUpperCase() + s.slice(1)
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

:root {
  --white: #ffffff;
  --light: #f0eff3;
  --black: #000000;
  --dark-blue: #1f2029;
  --dark-light: #353746;
  --red: #da2c4d;
  --yellow: #f8ab37;
  --grey: #ecedf3;
}

::selection {
  color: #ffffff;
  background-color: #000000;
}
::-moz-selection {
  color: #ffffff;
  background-color: #000000;
}

.background-color {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #1f2029;
  z-index: 1;
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
}
.checkbox:checked ~ .background-color {
  background-color: #ffffff;
}

[type='checkbox']:checked,
[type='checkbox']:not(:checked),
[type='radio']:checked,
[type='radio']:not(:checked) {
  position: absolute;
  left: -9999px;
  width: 0;
  height: 0;
  visibility: hidden;
}
.checkbox:checked + label,
.checkbox:not(:checked) + label {
  position: relative;
  width: auto;
  display: inline-block;
  padding: 0;
  margin: 0 auto;
  text-align: center;
  margin: 17px 0;
  margin-top: 100px;
  height: 6px;
  border-radius: 4px;
  background-image: linear-gradient(298deg, #da2c4d, #f8ab37);
  z-index: 100 !important;
}
.checkbox:checked + label:before,
.checkbox:not(:checked) + label:before {
  position: absolute;
  font-family: 'unicons';
  cursor: pointer;
  top: -17px;
  z-index: 2;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
}
.checkbox:not(:checked) + label:before {
  content: '\eac1';
  left: 0;
  color: #ecedf3;
  background-color: #353746;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(26, 53, 71, 0.07);
}
.checkbox:checked + label:before {
  content: '\eb8f';
  left: 30px;
  color: #f8ab37;
  background-color: #1f2029;
  box-shadow: 0 4px 4px rgba(26, 53, 71, 0.25), 0 0 0 1px rgba(26, 53, 71, 0.07);
}

.checkbox:checked ~ .section .container .row .col-12 p {
  color: #1f2029;
}

.checkbox-tools:checked + label,
.checkbox-tools:not(:checked) + label {
  position: relative;
  display: inline-block;
  padding: 20px;
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1px;
  margin: 0 auto;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 10px;
  text-align: center;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  text-transform: uppercase;
  color: #ffffff;
  background-image: #000;
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
}
.checkbox-tools:not(:checked) + label {
  /* background-color: #353746; */
  background-color: #000 !important;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}
.checkbox-tools:checked + label {
  background-color: transparent;
  background-image: linear-gradient(298deg, #da2c4d, #f8ab37);
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.checkbox-tools:not(:checked) + label:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.checkbox-tools:checked + label::before,
.checkbox-tools:not(:checked) + label::before {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background-image: linear-gradient(298deg, #da2c4d, #f8ab37);
  z-index: -1;
}
.checkbox-tools:checked + label .uil,
.checkbox-tools:not(:checked) + label .uil {
  font-size: 24px;
  line-height: 24px;
  display: block;
  padding-bottom: 10px;
}

.checkbox:checked
  ~ .section
  .container
  .row
  .col-12
  .checkbox-tools:not(:checked)
  + label {
  background-color: #f0eff3;
  color: #1f2029;
  box-shadow: 0 1x 4px 0 rgba(0, 0, 0, 0.05);
}
</style>
