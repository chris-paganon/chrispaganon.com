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
  <div class="portfolio-grid-wrapper">
    <router-link
      class="portfolio-card"
      v-for="project in portfolio"
      :to="`project/${project.slug}`"
      :key="project.id"
    >
      <h3>{{ project.name }}</h3>
      <p>{{ project.shortDescription }}</p>
      <img :src="`${project.image}`" />
    </router-link>
  </div>
</template>

<style scoped>
.portfolio-grid-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
}
img {
  width: 100%;
}

.portfolio-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  text-decoration: none;
  color: black;
}
</style>
