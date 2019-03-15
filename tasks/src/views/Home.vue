<template>
  <div v-if="loaded">
    <div class="container">
      <task-list
        :items="tasks"
        @add-task="handleAddTask"
        @remove-task="handleRemoveTask"
      />
      <category-list
        :items="categories"
        @apply-category="handleApplyCategory"
      />
      <button
        class="submit-btn waves-effect waves-light btn"
        @click.prevent="handleSubmit"
      >
        <i class="material-icons">save_alt</i>
      </button>
    </div>
  </div>
  <div v-else>
    <spinner />
  </div>
</template>

<script>
import TaskList from "@/components/TaskList.vue";
import CategoryList from "@/components/CategoryList.vue";
import Spinner from "@/components/Spinner.vue";
import { TODAY, generateId } from "@/shared/utils";
import { mapToRepresentationModel } from "@/shared/converters";
import { EventBus } from "@/shared/event-bus.js";

const createTaskModel = (label = "") => {
  const result = {
    id: generateId(),
    due: TODAY,
    label: label
  };
  return result;
};

export default {
  name: "home",
  components: {
    TaskList,
    CategoryList,
    Spinner
  },
  data() {
    return {
      loaded: false,
      tasks: [],
      categories: [],
      templates: []
    };
  },
  methods: {
    handleAddTask() {
      this.tasks.push({
        id: generateId(),
        label: "",
        due: TODAY
      });
    },
    handleRemoveTask(event) {
      this.tasks.splice(this.tasks.indexOf(event.item), 1);
    },
    handleApplyCategory(event) {
      const category = this.categories.find(e => e.id === event.item.id);
      if (!category) return;
      const tags = category.tags;
      const newLabels = this.templates
        .filter(i => i.tags.some(t => tags.includes(t)))
        .map(i => i.label);
      if (newLabels.length > 0) {
        const newTasks = newLabels.map(l => createTaskModel(l));
        this.tasks.push(...newTasks);
      }
    },
    handleSubmit() {
      const representation = this.tasks.map(mapToRepresentationModel);
      const data = encodeURIComponent(JSON.stringify(representation));
      window.open("events?descr=" + data, "_blank");
    }
  },
  mounted() {
    const fetchData = async () => {
      try {
        const response = await fetch("data.json");
        const data = await response.json();
        this.categories = data.categories.map(i => {
          i.id = generateId();
          return i;
        });
        this.templates = data.templates;
        this.loaded = true;
      } catch (error) {
        EventBus.$emit("notify-user", {
          message:
            "Something went wrong: unable to load 'data.json'. Please ensure network connectivity and try again.",
          level: "error"
        });
      }
    };

    fetchData();
  }
};
</script>

<style scoped lang="scss">
.submit-btn {
  margin-top: 2rem;
}
</style>
