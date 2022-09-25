<template>
  <article>
    <h1>{{ getProjectData.name }}</h1>
    <div class="written-content">
      <ul>
        <li>From: {{ getProjectData.startDate }}</li>
        <li>Until: {{ getProjectData.endDate }}</li>
      </ul>
      <a :href="getProjectData.url" target="_blank">Visit the website</a>
      <p>{{ getProjectData.content }}</p>
    </div>
    <img :src="getProjectData.image" />
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
  margin: auto;
}
a,
li {
  font-size: 1.5em;
}
p {
  margin-top: 20px;
}

img {
  max-width: 800px;
  display: block;
}

ul {
  display: flex;
  margin-bottom: 10px;
}
li {
  margin-right: 15px;
}
</style>
