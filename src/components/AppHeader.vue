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
  background-color: antiquewhite;
}

nav {
  padding: 20px;
}
</style>
