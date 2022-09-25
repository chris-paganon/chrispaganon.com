<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  components: {
    AppHeader,
  },
};
</script>

<template>
  <AppHeader />
  <RouterView />
</template>

<style>
h1 {
  font-size: 50px;
}
h2 {
  font-size: 40px;
}
h3 {
  font-size: 30px;
}
p {
  font-size: 20px;
  margin: 0 10px;
}
</style>
