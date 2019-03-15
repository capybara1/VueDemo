<template>
  <div>
    <category-item
      v-for="item in items"
      :key="item.id"
      :item="item"
      @apply-category="$emit('apply-category', $event)"
    />
  </div>
</template>

<script>
import CategoryItem from "@/components/CategoryItem.vue";

export default {
  name: "category-list",
  components: {
    CategoryItem
  },
  props: ["items"]
};
</script>
