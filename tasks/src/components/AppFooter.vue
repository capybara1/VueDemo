<template>
  <footer>
    <p>&copy; {{ company }} {{ currentYear }}</p>
  </footer>
</template>

<script>
export default {
  name: "app-footer",
  props: ["company"],
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style>
footer {
  text-align: right;
  padding-top: 4px;
  padding-left: 10px;
  padding-right: 10px;
}
</style>
