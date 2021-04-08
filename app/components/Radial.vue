<template>
  <div class="radial"></div>
</template>
<script>
export default {}
</script>
<style scoped>
.radial {
  position: absolute;
  top: -60px;
  right: -120px;
  width: 220px;
  height: 220px;
  border-radius: 110px;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(rgba(252, 68, 117, 0.5)),
    to(#fc4475)
  );
  background: linear-gradient(to right, rgba(252, 68, 117, 0.5), #fc4475);
  mix-blend-mode: multiply;
  -webkit-transition: all 250ms ease-out;
  transition: all 250ms ease-out;
  -webkit-transition-delay: 50ms;
  transition-delay: 50ms;
}

@media (min-width: 1025px) {
  .radial {
    top: 95px;
    right: -30px;
    width: 350px;
    height: 350px;
    border-radius: 175px;
  }
}
</style>
