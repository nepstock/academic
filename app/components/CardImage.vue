<template>
  <div class="card-image border shadow w-100">
    <slot></slot>
    <div class="content-image p-4">
      <h3 class="h5">{{ title }}</h3>
      <p>
        {{ text }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
}
</script>
<style scoped>
.card-image {
  min-height: 426px;
}
</style>
