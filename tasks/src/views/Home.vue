<template>
  <div v-if="loaded">
    <div class="container">
      <transition name="fly-in" appear>
        <task-list id="task-list" :items="tasks" @add-task="handleAddTask" />
      </transition>
      <transition name="fly-in" appear>
        <category-list
          id="category-list"
          :items="categories"
          @apply-category="handleApplyCategory"
        />
      </transition>
      <transition name="fly-in" appear>
        <button
          id="submit-button"
          class="submit-btn waves-effect waves-light btn"
          @click.prevent="handleSubmit"
        >
          <i class="material-icons">save_alt</i>
        </button>
      </transition>
    </div>
  </div>
  <div v-else>
    <spinner />
  </div>
</template>

<script>
import { mapState } from "vuex";

import {
  ADD_TASK,
  APPLY_CATEGORY,
  GENERATE_OUTPUT
} from "@/store/mutationTypes";
import { FETCH_DATA } from "@/store/actionTypes";
import TaskList from "@/components/TaskList.vue";
import CategoryList from "@/components/CategoryList.vue";
import Spinner from "@/components/Spinner.vue";

export default {
  name: "home",
  components: {
    TaskList,
    CategoryList,
    Spinner
  },
  computed: {
    ...mapState({
      loaded: state => !state.loading.isLoading,
      tasks: "tasks",
      categories: "categories",
      templates: "templates"
    })
  },
  methods: {
    handleAddTask() {
      this.$store.commit(ADD_TASK);
    },
    handleApplyCategory(event) {
      this.$store.commit(APPLY_CATEGORY, { id: event.item.id });
    },
    handleSubmit() {
      this.$store.commit(GENERATE_OUTPUT);
    }
  },
  mounted() {
    this.$store.dispatch(FETCH_DATA);
  }
};
</script>

<style scoped lang="scss">
.submit-btn {
  margin-top: 2rem;
}

.fly-in-enter-active {
  transition: all 0.5s ease-out;
}

.fly-in-enter {
  transform: translateY(40px);
  opacity: 0;
}

#category-list {
  transition-delay: 0.2s;
}

#submit-button {
  transition-delay: 0.4s;
}
</style>
