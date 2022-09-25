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
      <section class="introduction">
        <p>
          I build websites and automation tools for SMBs and non-for profits.
        </p>
        <img src="@/assets/images/me.jpg" alt="me" />
      </section>
      <section class="portfolio-wrapper">
        <Portfolio />
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
h1 {
  font-size: 50px;
}

.introduction {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 150px 20px;
}
p {
  font-size: 30px;
  margin: 0 10px;
}
img {
  width: 200px;
  border-radius: 50%;
  margin: 0 10px;
}

.portfolio-wrapper {
  padding: 60px 0;
  border-top: 1px solid gray;
}
</style>
