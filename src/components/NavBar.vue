<script></script>

<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/#portfolio">Portfolio</router-link></li>
      <li>
        <router-link to="/#contact-me" class="contact-me-btn">
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

.contact-me-btn {
  display: block;
  background-color: black;
  color: white;
  padding: 15px 25px;
  border-radius: 25px;
  transition: background-color 250ms ease-out, transform 250ms ease-out;
}
.contact-me-btn:hover {
  background-color: rgb(44, 44, 44);
  transform: scale(1.03, 1.03);
}
</style>
