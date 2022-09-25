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
          I build websites and automation tools for SMBs and non-for profits.
        </p>
        <img src="@/assets/images/me.jpg" alt="me" />
      </section>
      <section class="portfolio-wrapper content-section">
        <Portfolio />
      </section>
      <section class="contact-me-wrapper content-section" id="contact-me">
        <h2 class="contact-me-heading">Contact Me</h2>
        <form id="contact-me-form">
          <label for="email">E-mail</label>
          <input type="text" name="email" />
          <label for="full-name">Full Name</label>
          <input type="text" name="full-name" />
          <label for="message">Message</label>
          <textarea name="message" rows="4"></textarea>
        </form>
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
.hero-banner {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  background-color: antiquewhite;
  padding: 0 20%;
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
  font-size: 2.2em;
}
img {
  width: 200px;
  border-radius: 50%;
  margin: 0 10px;
}

.portfolio-wrapper {
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
}

#contact-me-form {
  display: flex;
  flex-direction: column;
  max-width: 600px;
}
</style>
