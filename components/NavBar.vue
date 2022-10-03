<script></script>

<template>
  <nav>
    <ul>
      <li><NuxtLink :to="localePath({ name: 'index' })">Home</NuxtLink></li>
      <li><NuxtLink :to="localePath({ path: '/#portfolio' })">Portfolio</NuxtLink></li>
      <li>
        <NuxtLink :to="localePath({ path: '/#contact-me' })" class="contact-me-btn button">
          Let's Talk
        </NuxtLink>
      </li>
      <li v-if="$i18n.locale !== 'en'"><NuxtLink :to="switchLocalePath('en')">EN</NuxtLink></li>
      <li v-if="$i18n.locale !== 'fr'"><NuxtLink :to="switchLocalePath('fr')">FR</NuxtLink></li>
    </ul>
  </nav>
</template>

<style scoped>
ul {
  display: flex;
  align-items: center;
  margin-right: 10px;
}
li {
  margin-left: 20px;
}
a {
  display: block;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 1px;
}
a:not(.contact-me-btn) {
  color: black;
  transition: letter-spacing 250ms ease-out;
}
a:not(.contact-me-btn):hover {
  letter-spacing: 2.5px;
}

@media (max-width: 600px) {
  ul {
    margin-right: 0px;
  }
  li {
    margin-left: 15px;
  }
  a:not(.contact-me-btn):hover {
    letter-spacing: 1.5px;
  }
}
@media (max-width: 400px) {
  li {
    margin-left: 10px;
  }
  a {
    letter-spacing: 0px;
  }
}
</style>
