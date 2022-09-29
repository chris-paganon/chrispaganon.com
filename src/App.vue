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
  font-size: 45px;
  margin-bottom: 10px;
}
h3 {
  font-size: 30px;
  margin-bottom: 20px;
}
p {
  font-size: 20px;
}
input, 
textarea {
  font-size: 18px;
}

.button {
  display: block;
  cursor: pointer;
  background-color: black;
  color: white;
  padding: 15px 25px;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 600;
  margin: auto;
  width: fit-content;
  transition: background-color 250ms ease-out, transform 250ms ease-out;
}
.button:hover {
  background-color: rgb(44, 44, 44);
  transform: scale(1.03, 1.03);
}

.hero-banner {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
  background-color: #c9e5f9;
  padding: 0 20%;
}
</style>
