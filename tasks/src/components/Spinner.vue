<template>
  <div class="spinner">
    <div role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "spinner"
};
</script>

<style scoped lang="scss">
.spinner {
  text-align: center;
}

.spinner > div {
  display: inline-block;
  border: 6px solid #f3f3f3;
  border-top: 6px solid rgb(29, 125, 116);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 3s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.sr-only {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
