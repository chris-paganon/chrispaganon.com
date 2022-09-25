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
    <article v-for="project in portfolio" class="portfolio-card">
      <h3>{{ project.name }}</h3>
      <p>{{ project.shortDescription }}</p>
      <img :src="`${project.image}`" />
    </article>
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
</style>
