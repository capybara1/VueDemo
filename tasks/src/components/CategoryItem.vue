<template>
  <div class="chip" @click="$emit('apply-category', { item })">
    {{ item.label }}
  </div>
</template>

<script>
export default {
  name: "category-item",
  props: ["item"]
};
</script>

<style>
.chip {
  cursor: pointer;
}
</style>
