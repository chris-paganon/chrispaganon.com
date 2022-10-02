<script>
import { portfolio } from "~/static/portfolio.js";

export default {
  data() {
    return {
      portfolio,
      viewMoreClass: 'view-more-off',
      viewMoreOn: false,
    };
  },
  watch: {
    viewMoreOn(newViewMoreOn) {
      if (newViewMoreOn) {
        this.viewMoreClass = 'view-more-on'
      } else {
        this.viewMoreClass = 'view-more-off'
      }
      return this.viewMoreClass;
    }
  },
  mounted() {
    // Display hover overlay on scroll on mobile if card is centered
    const portfolioCards = this.$refs.portfolioCard;

    window.addEventListener('scroll', function() {
      portfolioCards.forEach(function (portfolioCard) {
        const position = portfolioCard.$el.getBoundingClientRect();
        const centerBoxHeight = Math.min(2 * position.height, window.innerHeight) - 5;
        const distToCenterBox = ( window.innerHeight - centerBoxHeight ) / 2;

        if ( position.top > distToCenterBox && position.bottom < (window.innerHeight - distToCenterBox) ) {
          portfolioCard.$el.classList.add('viewportVisible');
        } else {
          portfolioCard.$el.classList.remove('viewportVisible');
        }
      });
    });
  }
};
</script>

<template>
  <section id="portfolio" class="portfolio-section-wrapper content-section">
    <h2 class="portfolio-heading">My Portfolio</h2>
    <div :class="`portfolio-intro-wrapper ${viewMoreClass}`">
      <div v-if="! viewMoreOn" class="view-more-overlay"></div>
      <p class="portfolio-intro"><strong>I built my first website in 2016</strong> for a 3D printing University project. Since then I built and managed <strong>several websites</strong> for local and international projects: a crepes catering project, a B2B massage therapy and ostheopathie service, a local bowling in Colombia and a small-scale plastic recycling community in Montréal.</p>
      <p class="portfolio-intro">In 2020, <strong>I co-founded the first online farmer's market in Montréal</strong>: <a href="https://panierquebecois.ca" target="_blank">Panier Québécois</a>. I have been developping, improving and maintaining our website ever since (along managing our business' startegy, marketing and operations with my lovely co-founders).</p>
      <p class="portfolio-intro">As our business doesn't require a full-time developper anymore, I am now putting my experience in web development, entrepreneurship and marketing to good use: <strong>helping you build your online presence!</strong></p>
    </div>
    <div v-if="! viewMoreOn" class="arrow arrow-down" @click="viewMoreOn = true"></div>
    <div v-if="viewMoreOn" class="arrow arrow-up" @click="viewMoreOn = false"></div>
    <h3 class="portfolio-sub-heading">Find out more about a few of my projects below:</h3>
    <div class="portfolio-wrapper">
      <NuxtLink
        v-for="project in portfolio"
        :key="project.id"
        class="portfolio-card"
        :to="`project/${project.slug}`"
        ref="portfolioCard"
      >
        <img :src="project.image" />
        <div class="portfolio-card-text-wrapper">
          <h3>{{ project.name }}</h3>
          <p>{{ project.shortDescription }}</p>
        </div>
      </NuxtLink>
    </div>
  </section>
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

.arrow {
  width: 15px;
  height: 15px;
  border-right: 4px solid black;
  border-bottom: 4px solid black;
  margin: 20px auto 0 auto;
  cursor: pointer;
}
.arrow-down {
  transform: rotate(45deg);
}
.arrow-up {
  transform: rotate(-135deg);
}

.portfolio-intro-wrapper {
  position: relative;
  max-height: 500px;
  overflow: hidden;
  transition: max-height 500ms ease-out;
}
@media (max-width: 575px) {
  .portfolio-intro-wrapper {
    max-height: 800px;
  }
}
.portfolio-intro-wrapper.view-more-off {
  max-height: 4em;
}
.view-more-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to top, rgb(255, 251, 246), transparent);
  z-index: 10;
}
.portfolio-intro {
  display: block;
  margin-bottom: 30px;
}

.portfolio-sub-heading {
  margin: 60px 0 30px 0;
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
  overflow: hidden;
  transition: transform 1s;
}
@media (hover: hover) {
  .portfolio-card:hover {
    transform: scale(1.02, 1.02);
  }
  .portfolio-card:hover .portfolio-card-text-wrapper {
    visibility: visible;
    transform: translateY(0);
  }
}
@media (hover: none) {
  .portfolio-card.viewportVisible {
    transform: scale(1.02, 1.02);
  }
  .portfolio-card.viewportVisible .portfolio-card-text-wrapper {
    visibility: visible;
    transform: translateY(0);
  }
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
  text-align: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.45);
  border-radius: 10px;
  transform: translateY(100%);
  transition: transform 750ms ease-out, visibility 750ms ease-out;
}

@media (max-width: 850px) {
  .portfolio-card {
    width: 100%;
  }
}

</style>
