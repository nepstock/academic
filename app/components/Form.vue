<template>
  <b-form>
    <b-row v-for="input in dataForm" :key="input.id">
      <b-col>
        <b-form-group
          :id="input.id"
          :label="input.label"
          :label-for="'input-' + input.id"
        >
          <b-form-input
            :id="'input-' + input.id"
            :v-model="input.model"
            :type="input.type"
            required
            :placeholder="input.placeholder"
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row class="justify-content-end">
      <b-col>
        <b-button variant="primary" @click="onSubmit">{{
          textButton
        }}</b-button>
      </b-col>
    </b-row>
  </b-form>
</template>
<script>
export default {
  props: {
    textButton: {
      type: String,
      default: 'Siguiente',
    },
    dataForm: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  data() {
    return {
      form: {},
    }
  },
  methods: {
    onSubmit() {
      this.$emit('save', this.form)
    },
  },
}
</script>
