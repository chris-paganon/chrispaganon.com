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
      <h1>Chris Paganon, Freelance Web Developer & Business Owner</h1>
    </section>
    <div class="home-content-wrapper">
      <section class="introduction content-section">
        <p>
          After building the e-commerce platform of our online grocery store at Panier Québécois, I now build websites and automation tools for SMBs and non-for profits.
        </p>
        <img src="@/assets/images/me.jpg" alt="me" />
      </section>
      <section class="portfolio-section-wrapper content-section">
        <Portfolio />
      </section>
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
.home-content-wrapper {
  max-width: 1024px;
  margin: auto;
  padding: 0 40px;
}
.content-section {
  padding: 60px 0;
}

.introduction {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 150px 0;
}
.introduction p {
  font-size: 2em;
}
img {
  width: 200px;
  border-radius: 50%;
  margin: 0 10px;
}

.portfolio-section-wrapper {
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
}

.contact-info {
  font-size: 22px;
  margin: 15px 0;
}
</style>
