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
          :value="label"
          @input="handleLabelChanged"
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
          @click="handleRemove"
        >
          remove
        </i>
      </div>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4"
        >{{ label }}<i class="material-icons right">close</i></span
      >
      <div class="input-field">
        <input
          placeholder="Due"
          :id="'due_' + id"
          name="due"
          type="date"
          :min="minDue"
          :value="due"
          @input="handleDueChanged"
        />
        <label :for="'due_' + id">Due</label>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import { SET_LABEL, SET_DUE, REMOVE_TASK } from "@/store/mutationTypes";
import { TODAY } from "@/shared/utils";

export default {
  name: "task-item",
  data() {
    return {
      minDue: TODAY
    };
  },
  props: ["id"],
  mounted() {
    this.$refs.label_input.focus();
    M.updateTextFields(); // eslint-disable-line no-undef
  },
  computed: {
    ...mapState({
      label(state) {
        const task = state.tasks.find(i => i.id === this.id);
        if (!task) return "";
        return task.label;
      },
      due(state) {
        const task = state.tasks.find(i => i.id === this.id);
        if (!task) return "";
        return task.due;
      }
    })
  },
  methods: {
    handleLabelChanged(event) {
      this.$store.commit(SET_LABEL, { id: this.id, value: event.target.value });
    },
    handleDueChanged(event) {
      this.$store.commit(SET_DUE, { id: this.id, value: event.target.value });
    },
    handleRemove() {
      this.$store.commit(REMOVE_TASK, { id: this.id });
    }
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
