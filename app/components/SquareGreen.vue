<template>
  <div class="square"></div>
</template>
<script>
export default {}
</script>
<style scoped>
.square {
  position: absolute;
  top: 350px;
  right: 0px;
  width: 200px;
  height: 200px;
  z-index: -1;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(rgba(231, 78, 121, 0.5)),
    to(#862481)
  );
  background: linear-gradient(to right, rgba(231, 78, 121, 0.5), #862481);
  mix-blend-mode: multiply;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-transition: all 250ms ease-out;
  transition: all 250ms ease-out;
}

@media (min-width: 1025px) {
  .square {
    top: 390px;
    right: -280px;
    width: 400px;
    height: 400px;
    z-index: 1;
  }
}
</style>
