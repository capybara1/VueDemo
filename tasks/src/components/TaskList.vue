<template>
  <div class="collection">
    <li v-for="item in items" class="collection-item" :key="item.id">
      <task-item :item="item" @remove-task="$emit('remove-task', $event)" />
    </li>
    <li class="collection-item">
      <button
        class="add-task-btn waves-effect waves-light btn"
        @click="$emit('add-task')"
      >
        <i class="material-icons">add</i>
      </button>
    </li>
  </div>
</template>

<script>
import TaskItem from "@/components/TaskItem.vue";

export default {
  name: "task-list",
  components: {
    TaskItem
  },
  props: ["items"]
};
</script>

<style scoped lang="scss">
.add-task-btn {
  display: block;
  width: 100%;
}
</style>
