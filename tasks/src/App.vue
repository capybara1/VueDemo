<template>
  <div id="app">
    <navbar>
      <navbar-item label="Home" href="/" />
      <navbar-item label="About" href="/about" />
    </navbar>
    <user-interaction-panel>
      <router-view />
    </user-interaction-panel>
    <app-footer company="Acme Ltd." />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import NavbarItem from "@/components/NavbarItem.vue";
import UserInteractionPanel from "@/components/UserInteractionPanel.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "app",
  components: {
    Navbar,
    NavbarItem,
    UserInteractionPanel,
    AppFooter
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
