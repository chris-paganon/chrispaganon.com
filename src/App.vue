<script>
import AppHeader from "./components/AppHeader.vue";
import "./assets/main.css";

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
  font-size: 55px;
  font-weight: 600;
  line-height: 1.25;
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

.hero-banner {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
  background-color: antiquewhite;
  padding: 0 20%;
}
</style>
