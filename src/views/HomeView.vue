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
      <hr class="separator" />
      <section class="services-section content-section">
        <h2>What can I do for you?</h2>
        <p>
          I specialize in <strong>Wordpress Web Development</strong> but I can also help you with your marketing startegy!
        </p>
        <table class="services-wrapper">
          <thead>
            <tr>
              <th>
                <p class="icon">&#128640;</p>
                <p>New Website</p>
              </th>
              <th>
                <p class="icon">&#127942;</p>
                <p>Existing Website</p>
              </th>
              <th>
                <p class="icon">&#128202;</p>
                <p>Marketing Startegy</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <ul>
                  <li>Get leads & customers</li>
                  <li>Built on a strong base</li>
                  <li>Best practices for Wordpress</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>New features</li>
                  <li>Improve speed & SEO</li>
                  <li>Complete overhaul</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Identifying key metrics</li>
                  <li>Social Media strategy</li>
                  <li>Paid media startegy</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
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

.separator {
  border-top: 2px solid gray;
  max-width: 600px;
}
.services-section {
  text-align: center;
}
table {
  margin: 40px auto;
  max-width: 100%;
  border: 1px solid gray;
  border-radius: 15px;
  border-spacing: 0px;
}
th:not(:last-child), td:not(:last-child) {
  border-right: 1px solid gray;
}
th, td {
  padding: 20px;
}
th {
  font-size: 27px;
  width: 33%;
}
td {
  font-size: 19px;
}
li {
  margin: 10px 0;
}
.icon {
  font-size: 40px;
  margin-bottom: 20px;
}

.contact-info {
  font-size: 22px;
  margin: 15px 0;
}
</style>
