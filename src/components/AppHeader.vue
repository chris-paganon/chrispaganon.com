<script>
import NavBar from "./NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<template>
  <header>
    <nav>C</nav>
    <NavBar />
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: antiquewhite;
}

nav {
  padding: 20px;
}
</style>
