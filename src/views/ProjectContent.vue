<template>
  <section class="hero-banner" :style="{backgroundColor: `${getProjectData.color}`}">
    <h1>{{ getProjectData.name }}</h1>
  </section>
  <article>
    <ul>
      <li>From: {{ getProjectData.startDate }}</li>
      <li>Until: {{ getProjectData.endDate }}</li>
      <li><a :href="getProjectData.url" target="_blank">Visit the website</a></li>
    </ul>
    <template v-for="paragraph in getProjectData.content" :key="paragraph.id">
      <p v-if="paragraph.type === 'p'">
        {{ paragraph.text }}
      </p>
    </template>
    <img :src="getImageUrl(getProjectData.image)" />
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
  methods: {
    getImageUrl(name) {
      return new URL(`/src/assets/images/portfolio/${name}`, import.meta.url).href;
    }
  }
};
</script>

<style scoped>
article {
  max-width: 1024px;
  margin: 40px auto;
}
a,
li {
  font-size: 25px;
}
p {
  margin: 20px 0;
}

.hero-banner {
  min-height: 300px;
}

ul {
  display: flex;
  margin-bottom: 40px;
}
li {
  padding: 0 15px;
}
li:not(:last-child) {
  border-right: 1px solid gray;
}
li:first-child {
  padding-left: 0;
}

img {
  max-width: 800px;
  display: block;
  margin: 60px auto;
  max-width: 600px;
}
</style>
