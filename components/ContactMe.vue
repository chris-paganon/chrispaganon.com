<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {},
      formResponse: '',
    };
  },
  methods: {
    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit() {
      try {
        if ( ! this.form.fullName) throw new Error('Please enter your name');
        if ( ! this.form.email) throw new Error('Please enter your e-mail');
        if ( ! this.form.description) throw new Error('Please enter a descrption');
      } catch(err) {
        this.formResponse = err.message;
        return;
      }

      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" }
      };
      axios.post(
        "/",
        this.encode({
          "form-name": "contact-me-form",
          ...this.form
        }),
        axiosConfig
      )
      .then(() => {
        this.formResponse = 'Thank you for contacting me, I will get back to you by e-mail very soon.';
      })
      .catch(() => {
        this.formResponse = 'There was an error while submitting the form, please contact me by e-mail or phone directly.';
      });
    },
  }
}
</script>

<template>
  <section class="contact-me-section-wrapper content-section" id="contact-me">
    <h2 class="contact-me-heading">Contact Me</h2>
    <div class="contact-me-wrapper">
      <div class="contact-me-form-wrapper contact-me-col">
        <h3>Fill up the form</h3>
        <form name="contact-me-form" method="post" @submit.prevent="handleSubmit" netlify>
          <input type="hidden" name="form-name" value="contact-me-form" />
          <label for="fullName">Name:</label>
          <input type="text" name="fullName" id="fullName" v-model="form.fullName" />
          <label for="name">E-mail:</label>
          <input type="email" name="email" id="email" v-model="form.email" />
          <label for="name">Tell me about your project:</label>
          <textarea name="description" id="description" v-model="form.description" rows="4" placeholder='Something like "I would like to add pictures from my Instagram to my existing website..."'></textarea>
          <p>{{formResponse}}</p>
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
            <a href="tel:+15144316333">+1&nbsp;(514)&nbsp;431&nbsp;6333</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
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
.button {
  font-size: 20px;
  border-radius: 30px;
}

.contact-info {
  font-size: 22px;
  margin: 15px 0;
}

@media (max-width: 850px) {
  h2, h3 {
    text-align: center;
  }
  .contact-me-wrapper {
    grid-template-columns: 1fr;
  }
  .contact-me-form-wrapper {
    margin-bottom: 60px;
  }
  .contact-info {
    font-size: 20px;
    text-align: center;
  }
}
@media (max-width: 450px) {
  .button {
    font-size: 18px;
  }
}
</style>