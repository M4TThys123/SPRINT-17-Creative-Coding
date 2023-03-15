<template>
  <div>
    <button @click="toggleDarkMode">Toggle Dark Mode</button>
    <!-- Your website content goes here -->
  </div>


</template>

<script>
export default {
  name: "DarkModeToggle",

  data() {
    return {
      darkMode: false
    }
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode
      console.log('methods: {\n' +
          '    toggleDarkMode() { werkt')
    }
  }

}
</script>

<style scoped>

</style>