<template>
  <router-link tag="li" :to="href" active-class="active">
    <a>{{ label }}</a>
  </router-link>
</template>

<script>
export default {
  name: "navbar-item",
  props: ["label", "href"]
};
</script>
