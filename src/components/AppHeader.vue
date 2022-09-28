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
    <NavBar />
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #c9e5f9;
}

nav {
  padding: 20px;
}
</style>
