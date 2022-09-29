<script>
import { portfolio } from "../portfolio.js";

export default {
  data() {
    return {
      portfolio,
    };
  },
  methods: {
    getImageUrl(name) {
      return new URL(`/src/assets/images/portfolio/${name}`, import.meta.url).href;
    }
  }
};
</script>

<template>
  <h2 class="portfolio-heading">My Portfolio</h2>
  <p class="portfolio-intro"><strong>I built my first website in 2016</strong> for a 3D printing University project. Since then I built and managed <strong>several websites</strong> for local and international projects: a crepes catering project, a B2B massage therapy and ostheopathie service, a local bowling in Colombia and a small-scale plastic recycling community in Montréal.</p>
  <p class="portfolio-intro">In 2020, <strong>I co-founded the first online farmer's market in Montréal</strong>: <a href="https://panierquebecois.ca" target="_blank">Panier Québécois</a>. I have been developping, improving and maintaining our website ever since (along managing our business' startegy, marketing and operations with my lovely co-founders).</p>
  <p class="portfolio-intro">As our business doesn't require a full-time developper anymore, I am now putting my experience in web development, entrepreneurship and marketing to good use: <strong>helping you build your online presence!</strong></p>
  <h3 class="portfolio-sub-heading">Find out more about a few of my projects below:</h3>
  <div class="portfolio-wrapper">
    <router-link
      class="portfolio-card"
      v-for="project in portfolio"
      :to="`project/${project.slug}`"
      :key="project.id"
    >
      <img :src="getImageUrl(project.image)" />
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
  margin-top: 35px;
}
img {
  width: 100%;
  border-radius: 10px;
}

.portfolio-intro {
  margin-bottom: 30px;
}

.portfolio-sub-heading {
  margin: 80px 0 30px 0;
  text-align: center;
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
  overflow: hidden;
  transition: transform 1s;
}
.portfolio-card:hover {
  transform: scale(1.02, 1.02);
}
.portfolio-card:first-child {
  width: 100%;
}

.portfolio-card-text-wrapper {
  visibility: hidden;
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
  transform: translateY(100%);
  transition: transform 750ms ease-out, visibility 750ms ease-out;
}
.portfolio-card:hover .portfolio-card-text-wrapper {
  visibility: visible;
  transform: translateY(0);
}

</style>
