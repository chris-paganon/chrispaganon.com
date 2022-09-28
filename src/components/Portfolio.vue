<script>
import { portfolio } from "../portfolio.js";

export default {
  data() {
    return {
      portfolio,
    };
  },
};
</script>

<template>
  <h2 class="portfolio-heading">My Portfolio</h2>
  <div class="portfolio-wrapper">
    <router-link
      class="portfolio-card"
      v-for="project in portfolio"
      :to="`project/${project.slug}`"
      :key="project.id"
    >
    <img :src="`${project.image}`" />
      <div class="portfolio-card-text-wrapper">
        <h3>{{ project.name }}</h3>
        <p>{{ project.shortDescription }}</p>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
.portfolio-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
img {
  width: 100%;
  border-radius: 10px;
}

.portfolio-card {
  position: relative;
  width: 48%;
  margin: 20px 0.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  text-decoration: none;
  color: black;
}
.portfolio-card:first-child {
  width: 100%;
}

.portfolio-card-text-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.45);
  border-radius: 10px;
}

</style>
