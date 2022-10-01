<template>
  <section class="services-section content-section">
  <h2>What can I do for you?</h2>
    <p>
      I specialize in <strong>Wordpress Web Development</strong> but I can also help you with your marketing startegy!
    </p>
    <div class="services-wrapper">
      <div class="service-wrapper">
        <div class="service-title">
          <p class="icon">&#128640;</p>
          <p>New Website</p>
        </div>
        <ul>
          <li>Get leads & customers</li>
          <li>Built on a strong base</li>
          <li>Best practices for Wordpress</li>
        </ul>
      </div>
      <div class="service-wrapper">
        <div class="service-title">
          <p class="icon">&#127942;</p>
          <p>Existing Website</p>
        </div>
        <ul>
          <li>New features</li>
          <li>Improve speed & SEO</li>
          <li>Complete overhaul</li>
        </ul>
      </div>
      <div class="service-wrapper">
        <div class="service-title">
          <p class="icon">&#128202;</p>
          <p>Marketing Startegy</p>
        </div>
        <ul>
          <li>Identifying key metrics</li>
          <li>Social Media strategy</li>
          <li>Paid media startegy</li>
        </ul>
      </div>
    </div>
    <p><em>No fuss & no extra fees. I am practical and down to earth. I build useful tools to get mesurable results.</em></p>
    <NuxtLink to="/#contact-me" class="contact-me-btn button">
      Let's Talk
    </NuxtLink>
  </section>
</template>

<style scoped>
.services-wrapper {
  display: flex;
  flex-wrap: wrap;
  margin: 60px auto 40px auto;
  border: 1px solid gray;
  border-radius: 15px;
}
.service-wrapper {
  width: 33%;
  text-align: center;
}
.service-wrapper:not(:last-child) {
  border-right: 1px solid gray;
}

.service-title {
  padding: 20px 20px 5px 20px;
  font-size: 27px;
  font-weight: 600;
  margin: auto;
}
ul {
  padding: 5px 20px 20px 20px;
  font-size: 19px;
}
li {
  margin: 10px 0;
}
.icon {
  font-size: 40px;
  margin-bottom: 20px;
}

@media (max-width: 850px) {
  .service-wrapper {
    width: 100%;
  }
  .service-wrapper:not(:last-child) {
    border-right: none;
    border-bottom: 1px solid gray;
  }
}

.button {
  margin: 60px auto 20px auto;
  font-size: 20px;
  border-radius: 30px;
}
@media (max-width: 450px) {
  .button {
    font-size: 18px;
    padding: 15px 25px;
  }
}
</style>