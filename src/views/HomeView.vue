<script>
import Portfolio from "@/components/Portfolio.vue";
import Services from "@/components/Services.vue";
import ContactMe from "@/components/ContactMe.vue";

export default {
  components: {
    Portfolio,
    Services,
    ContactMe,
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
        <img src="/src/assets/images/me.jpg" alt="me" />
      </section>
      <hr class="separator" />
      <section class="services-section content-section">
        <Services />
      </section>
      <div class="background-section-wrapper portfolio-section-background">
        <section class="portfolio-section-wrapper content-section" id="portfolio">
          <Portfolio />
        </section>
      </div>
      <section class="contact-me-wrapper content-section" id="contact-me">
        <ContactMe />
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
  padding: 150px 40px;
}
.introduction p {
  font-size: 2em;
  margin-right: 170px;
}
img {
  position: absolute;
  top: -75px;
  right: 20px;
  width: 200px;
  border-radius: 50%;
  margin: 0 10px;
  transition: transform 500ms ease-out;
}
img:hover {
  transform: translateY(-10px) scale(1.1, 1.1);
}
@media (max-width: 925px) {
  .introduction p {
    font-size: 1.8em;
    margin-right: 0;
    text-align: center;
  }
  img {
    top: -90px
  }
}
@media (max-width: 600px) {
  img {
    width: 170px;
    margin: 0;
    top: -75px;
    right: calc(50% - 170px / 2);
  }
}

.separator {
  border-top: 2px solid gray;
  max-width: 600px;
}
.services-section {
  text-align: center;
}
</style>
