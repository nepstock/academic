<template>
  <div>
    <!-- Image and text -->
    <b-navbar id="navbar-academic" variant="faded" type="light" class="w-100">
      <b-container class="w-100 text-center">
        <b-navbar-brand href="#" class="d-flex align-items-center mx-auto">
          <img
            width="50"
            height="50"
            src="../assets/img/512.png"
            class="d-inline-block align-top"
            alt="Kitten"
          />
          <span :class="'ml-2 ' + color">Academic</span>
        </b-navbar-brand>
      </b-container>
    </b-navbar>
  </div>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: 'text-body',
    },
  },
}
</script>
<style scoped>
#navbar-academic {
  position: absolute;
  top: 0;
  z-index: 999;
}
</style>
