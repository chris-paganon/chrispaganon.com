<template>
  <h2 class="contact-me-heading">Contact Me</h2>
  <div class="contact-me-wrapper">
    <div class="contact-me-form-wrapper contact-me-col">
      <h3>Fill up the form</h3>
      <form name="contact-me-form" netlify>
        <label for="name">Name:</label>
        <input type="text" name="name" id="name" />
        <label for="name">E-mail:</label>
        <input type="email" name="email" id="email" />
        <label for="name">Tell me about your project:</label>
        <textarea name="description" id="description" rows="4" placeholder='Something like "I would like to add pictures from my Instagram to my existing website..."'></textarea>
        <button class="button">Send</button>
      </form> 
    </div>
    <div class="contact-me-details contact-me-col">
      <h3>Or contact me here</h3>
      <ul>
        <li class="contact-info">
          By e-mail here:
          <a href="mailto:cpaganon@gmail.com">cpaganon@gmail.com</a>
        </li>
        <li class="contact-info">
          By phone here:
          <a href="tel:+15144316333">+1 (514) 431-6333</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.contact-me-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 40px;
  margin: 40px 0;
}
form {
  display: flex;
  flex-direction: column;
}
label {
  font-size: 18px;
}
input, textarea {
  margin: 10px 0 20px 0;
  border: 1px solid rgb(194, 194, 194);
  border-radius: 5px;
  padding: 15px;
}
.contact-info {
  font-size: 22px;
  margin: 15px 0;
}
</style>