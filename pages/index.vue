<template>
  <main>
    <section class="hero-banner">
      <h1>{{ $t('homepage.heading1') }}</h1>
    </section>
    <div class="home-content-wrapper">
      <section class="introduction content-section">
        <p>{{ $t('homepage.intro') }}</p>
        <img src="/images/me.jpg" alt="me" />
      </section>
      <hr class="separator" />
      <ServicesTable :services="services" />
      <div class="background-section-wrapper portfolio-section-background">
        <PortfolioProjects :portfolio-intro="portfolioIntro" />
      </div>
      <ContactMe />
    </div>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  provide() {
    return {
      portfolio: this.portfolio,
    }
  },
  async asyncData (context) {
    const { $content, app } = context;
    const portfolioIntro = await $content(`${app.i18n.locale}/portfolio-intro`).fetch();
    const services = await $content(app.i18n.locale).where({ section: 'services' }).sortBy('id').fetch();
    const portfolio = await $content(`${app.i18n.locale}/project`).sortBy('id').fetch();
    return {
      portfolioIntro,
      portfolio,
      services,
    }
  },
}
</script>

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
  margin-bottom: 0;
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

.separator {
  border-top: 2px solid gray;
  max-width: 66%;
}
.services-section {
  text-align: center;
}

@media (max-width: 925px) {
  .introduction {
    padding: 140px 40px 100px 40px;
  }
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
@media (max-width: 450px) {
  .content-section {
    padding: 50px 20px;
  }
  .introduction p {
    font-size: 1.5em;
    margin: 30px 0 10px 0;
  }
  img {
    width: 150px;
    top: -120px;
    right: calc(50% - 150px / 2);
  }
}
</style>