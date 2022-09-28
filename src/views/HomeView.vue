<script>
import Portfolio from "@/components/Portfolio.vue";

export default {
  components: {
    Portfolio,
  },
};
</script>

<template>
  <main>
    <section class="hero-banner">
      <h1>Freelance Web Developer & Business Owner from Montréal</h1>
    </section>
    <div class="home-content-wrapper">
      <section class="introduction content-section">
        <p>
          After 2 years building our e-commerce platform at <a href="https://panierquebecois.ca" target="_blank">Panier Québécois</a>, I now help SMBs and non-for profits build or improve their Website.
        </p>
        <img src="src/assets/images/me.jpg" alt="me" />
      </section>
      <section class="services-section content-section">
        <h2>What can I do for you?</h2>
        <p>
          I specialize in Wordpress web development but I can also help you with your marketing startegy!
        </p>
        <div class="services-wrapper">
          <div class="service-wrapper">
            <h3>Build a new website</h3>
            <ul>
              <li>Build a new Website using Wordpress or Woocommerce</li>
              <li>Simple one pager, complex platforms or anything in between</li>
              <li>Focused on delivering real world results for your project</li>
              <li>All the tools to let you make modifications yourself in the futur</li>
            </ul>
          </div>
          <div class="service-wrapper">
            <h3>Improve existing website</h3>
            <ul>
              <li>Improving an existing Wordpress/Woocommerce website</li>
              <li>New features requests</li>
              <li>Improving speed and Search Engine visibility (SEO)</li>
              <li>Complete overhaul</li>
              <li>Server migrations and other backend problems resolution</li>
            </ul>
          </div>
          <div class="service-wrapper">
            <h3>Marketing startegy</h3>
            <ul>
              <li>Identifying key metrics to track</li>
              <li>Improving your Social Media strategy</li>
              <li>Improving or developing a paid media startegy (FB ads, Google AdWords...)</li>
              <li>Improving your workflow and your software tools</li>
            </ul>
          </div>
        </div>
      </section>
      <div class="background-section-wrapper portfolio-section-background">
        <section class="portfolio-section-wrapper content-section" id="portfolio">
          <Portfolio />
        </section>
      </div>
      <section class="contact-me-wrapper content-section" id="contact-me">
        <h2 class="contact-me-heading">Contact Me</h2>
        <ul>
          <li class="contact-info">
            By e-mail here:
            <a href="mailto:cpaganon@gmail.com">cpaganon@gmail.com</a>
          </li>
          <li class="contact-info">
            By phone here:
            <a href="tel:+15144316333">+1 514 431 6333</a>
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>

<style scoped>
.content-section {
  margin: auto;
  max-width: 1024px;
  padding: 60px 40px;
}
.background-section-wrapper {
  width: 100%;
  background-color: rgb(255, 251, 246);
}

.introduction {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 150px 0;
}
.introduction p {
  font-size: 2em;
  margin-right: 170px;
}
img {
  position: absolute;
  top: -75px;
  right: 0;
  width: 200px;
  border-radius: 50%;
  margin: 0 10px;
  transition: transform 500ms ease-out;
}
img:hover {
  transform: translateY(-10px) scale(1.1, 1.1);
}

.services-content-section {
  border-top: 1px solid gray;
}
.services-wrapper {
  display: flex;
  justify-content: center;
}
.service-wrapper {
  text-align: center;
}

.contact-info {
  font-size: 22px;
  margin: 15px 0;
}
</style>
