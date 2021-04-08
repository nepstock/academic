<template>
  <div class="square"></div>
</template>
<script>
export default {}
</script>
<style scoped>
.square {
  position: absolute;
  top: -100px;
  left: -150px;
  width: 200px;
  height: 200px;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#2336b6),
    to(rgba(31, 38, 103, 0.9))
  );
  background: linear-gradient(to right, #2336b6, rgba(31, 38, 103, 0.9));
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-transition: all 250ms ease-out;
  transition: all 250ms ease-out;
}

@media (min-width: 1025px) {
  .square {
    top: -490px;
    right: -40px;
    width: 600px;
    height: 600px;
  }
}
</style>
