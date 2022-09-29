<script></script>

<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/#portfolio">Portfolio</router-link></li>
      <li>
        <router-link to="/#contact-me" class="contact-me-btn button">
          Let's Talk
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
ul {
  display: flex;
  align-items: center;
}
li {
  margin-right: 10px;
}
a {
  display: block;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 1px;
  margin-left: 15px;
}
a:not(.contact-me-btn) {
  color: black;
  transition: letter-spacing 250ms ease-out;
}
a:not(.contact-me-btn):hover {
  letter-spacing: 2.5px;
}
</style>
