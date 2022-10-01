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
      <ServicesTable />
      <div class="background-section-wrapper portfolio-section-background">
        <PortfolioProjects />
      </div>
      <ContactMe />
    </div>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style scoped>
h1 {
  font-size: 55px;
  font-weight: 600;
  line-height: 1.25;
}
h2 {
  font-size: 45px;
  margin-bottom: 50px;
}
h3 {
  font-size: 30px;
  margin-bottom: 30px;
}
p {
  font-size: 20px;
  margin-bottom: 20px;
}
input, 
textarea {
  font-size: 18px;
}

@media (max-width: 925px) {
  h1 {
    font-size: 48px;
  }
}
@media (max-width: 600px) {
  h1 {
    font-size: 40px;
  }
  h2 {
    font-size: 38px;
  }
  h3 {
    font-size: 25px;
  }
  p {
    font-size: 19px;
  }
}
@media (max-width: 450px) {
  h1 {
    font-size: 35px;
  }
  h2 {
    font-size: 32px;
  }
  h3 {
    font-size: 23px;
  }
}

p a {
  display: inline-block;
  color: black;
  transition: transform 150ms ease-out;
}
p a:hover {
  transform: skew(-1.5deg, -1.5deg);
}

.button {
  display: block;
  cursor: pointer;
  background-color: black;
  color: white;
  text-decoration: none;
  padding: 15px 25px;
  border-radius: 25px;
  border: 0px;
  font-size: 16px;
  font-weight: 600;
  margin: auto;
  width: fit-content;
  transition: background-color 250ms ease-out, transform 250ms ease-out;
}
.button:hover {
  background-color: rgb(44, 44, 44);
  transform: scale(1.03, 1.03);
}

.hero-banner {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
  background-color: #c9e5f9;
  padding: 0 20%;
}
@media (max-width: 925px) {
  .hero-banner {
    padding: 0 10%;
  }
}
@media (max-width: 450px) {
  .hero-banner {
    padding: 0 5%;
    text-align: center;
  }
  .button {
    font-size: 14px;
    padding: 13px 18px;
  }
}
</style>