<template>
  <div>
    <div v-if="notification" class="container">
      <div class="card red darken-1">
        <div class="card-content white-text">
          {{ notification.message }}
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { EventBus } from "@/shared/event-bus.js";

export default {
  name: "user-interaction-panel",
  data() {
    return {
      notification: null
    };
  },
  mounted() {
    EventBus.$on("notify-user", notification => {
      this.notification = notification;
    });
  }
};
</script>

<style scoped lang="scss">
.add-task-btn {
  display: block;
  width: 100%;
}
</style>
