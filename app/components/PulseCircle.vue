<template>
  <div class="pulse-circle"></div>
</template>
<script>
export default {}
</script>
<style scoped>
.pulse-circle {
  position: absolute;
  border-radius: 50%;
  left: 200px;
  bottom: -790px;
  width: 900px;
  height: 900px;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#862481),
    to(rgba(134, 36, 129, 0.9))
  );
  background: linear-gradient(to right, #862481, rgba(134, 36, 129, 0.9));
  box-shadow: 0 0 0 0 rgba(31, 38, 103, 1);
  transform: scale(1);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.99);
    box-shadow: 0 0 0 0 rgba(134, 36, 129, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 40px rgba(134, 36, 129, 0);
  }

  100% {
    transform: scale(0.99);
    box-shadow: 0 0 0 0 rgba(134, 36, 129, 0);
  }
}
</style>
