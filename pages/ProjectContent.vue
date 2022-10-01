<template>
  <main>
    <section class="hero-banner" :style="{backgroundColor: `${getProjectData.color}`}">
      <h1>{{ getProjectData.name }}</h1>
    </section>
    <article>
      <ul>
        <li>From: {{ getProjectData.startDate }}</li>
        <li>Until: {{ getProjectData.endDate }}</li>
        <li><a :href="getProjectData.url" target="_blank">Visit the website</a></li>
      </ul>
      <p v-for="paragraph in getProjectData.content" :key="paragraph.id"> 
        {{ paragraph.text }}
      </p>
      <img :src="getProjectData.image" />
    </article>
  </main>
</template>

<script>
import { portfolio } from "~/static/portfolio.js";

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
  padding: 0px 20px;
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
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 40px;
  text-align: center;
}
li {
  padding: 0 15px;
  margin-bottom: 15px;
}

img {
  max-width: 800px;
  display: block;
  margin: 60px auto;
  width: 600px;
  max-width: 100%;
}

@media (max-width: 600px) {
  a,
  li {
    font-size: 22px;
  }
}
</style>
