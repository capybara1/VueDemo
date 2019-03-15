<template>
  <div class="card">
    <div class="card-content">
      <div
        class="card-title"
        style="position: relative;display: -webkit-box;display: -ms-flexbox;display: flex;-ms-flex-wrap: wrap;flex-wrap: wrap;-webkit-box-align: stretch;-ms-flex-align: stretch;align-items: stretch;width: 100%;"
      >
        <input
          type="text"
          ref="label_input"
          v-model="item.label"
          style="display: block; position: relative; -webkit-box-flex: 1; -ms-flex: 1 1 auto; flex: 1 1 auto; width: 1%; margin-bottom: 0"
        />
        <i class="material-icons activator" style="display: flex">
          more_vert
        </i>
        <i
          class="material-icons"
          style="display: flex"
          aria-label="Removes the task"
          title="Removes the task"
          @click="$emit('remove-task', { item })"
        >
          remove
        </i>
      </div>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4"
        >{{ item.label }}<i class="material-icons right">close</i></span
      >
      <div class="input-field">
        <input
          placeholder="Due"
          :id="'due_' + item.id"
          name="due"
          type="date"
          :min="minDue"
          v-model="item.due"
        />
        <label :for="'due_' + item.id">Due</label>
      </div>
    </div>
  </div>
</template>

<script>
import { TODAY } from "@/shared/utils";

export default {
  name: "task-item",
  data() {
    return {
      minDue: TODAY
    };
  },
  props: ["item"],
  mounted() {
    this.$refs.label_input.focus();
    M.updateTextFields(); // eslint-disable-line no-undef
  }
};
</script>

<style scoped lang="scss">
div.card-title > i {
  cursor: pointer;
  margin-left: 26px;
  margin-right: 10px;
}
</style>
