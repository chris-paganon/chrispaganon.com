<template>
  <section class="hero-banner">
    <h1>{{ getProjectData.name }}</h1>
  </section>
  <article>
    <ul>
      <li>From: {{ getProjectData.startDate }}</li>
      <li>Until: {{ getProjectData.endDate }}</li>
    </ul>
    <p>{{ getProjectData.content }}</p>
    <img :src="getProjectData.image" />
    <a :href="getProjectData.url" target="_blank">Visit the website</a>
  </article>
</template>

<script>
import { portfolio } from "../portfolio.js";

export default {
  data() {
    return {
      portfolio,
    };
  },
  computed: {
    getProjectData() {
      const projectSlug = this.$route.params.projectSlug;
      const project = this.portfolio.find((project) => {
        return project.slug === projectSlug;
      });
      return project;
    },
  },
};
</script>

<style scoped>
article {
  max-width: 1024px;
  margin: 40px auto;
}
a,
li {
  font-size: 1.5em;
}
p {
  margin: 20px 0;
}

.hero-banner {
  min-height: 200px;
}

ul {
  display: flex;
  margin-bottom: 10px;
}
li {
  margin-right: 15px;
}

img {
  max-width: 800px;
  display: block;
}
</style>
