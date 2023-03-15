<template>
  <div class="wrapper">
    <div class="load-container">
      <div class="loading-screen"></div>
    </div>
    <navigation-header></navigation-header>
    <dark-mode-toggle></dark-mode-toggle>

    <main data-barba="container" data-barba-namespace="home-section">
      <div class="header">
        <h1 class="title animate-this">
          home page
        </h1>
        <div class="animate-this button">
          <a href="about.html">go to about</a>
        </div>
      </div>
    </main>
  </div>

</template>

<script>
import NavigationHeader from "@/components/Header.vue";
import DarkModeToggle from "@/components/DarkModeToggle.vue";


export default {
  name: 'App',
  components: {
    DarkModeToggle,
    NavigationHeader,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
