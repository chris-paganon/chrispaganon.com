<script></script>

<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li>
        <router-link to="/#contact-me" class="contact-me-btn">
          Contact Me
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
ul {
  display: flex;
}
li {
  margin-right: 10px;
}
a {
  color: black;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 2px;
}

.contact-me-btn {
  background-color: green;
  color: white;
  padding: 15px 25px;
  border-radius: 5px;
}
</style>
