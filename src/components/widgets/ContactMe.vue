<template>
  <section class="relative bg-gradient-to-b from-white to-white">
    <div class="max-w-6xl mx-auto px-4">
      <div class="py-[100px]">
        <div class="max-w-3xl mx-auto bg-gradient-to-r from-blue-200 to-yellow-700 text-center p-6 rounded-md shadow-sm shadow-white mb-5">
          <h2 class="text-4xl md:text-4xl font-bold leading-tighter tracking-tighter mb-12 font-heading">Contact</h2>
          <form ref="form" @submit.prevent="sendEmail">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label for="user_name" class="font-bold max-sm:text-sm">Name:</label>
                <input type="text" id="user_name" name="name" class="ml-1">
              </div>
              <div>
                <label for="user_email" class="font-bold max-sm:text-sm">E-mail:</label>
                <input type="email" id="user_email" name="email" class="ml-1">
              </div>
            </div>
            <div class="grid grid-cols-1 mt-5">
              <div>
                <label for="message" class="font-bold max-sm:text-sm">Message:</label>
              </div>
              <div>
                <textarea id="message" name="message" rows="3"></textarea>
              </div>
              <div class="mt-4">
                <button class="btn bg-yellow-950 hover:bg-blue-200 text-white hover:text-black font-bold border-4 
                border-yellow-800" type="submit">Talk to me!</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import emailjs from '@emailjs/browser';

  export default {
    methods: {
      sendEmail() {
        emailjs.sendForm('service_ntssucp', 'template_jtttvzi', this.$refs.form, 'V_0N_aAB_-CJoe-oY')
          .then((result) => {
              console.log('SUCCESS!', result.text);
              alert("Your message has been sent!");
              this.$refs.form.reset();
          }, (error) => {
              console.log('FAILED...', error.text);
              alert("There was an error in sending your message");
          });
      }
    }
  }
</script>

<style scoped>
  textarea {
    resize: none;
    border: 1px solid #0000004a;
    width: 50%;
    padding: 12px;
    border-radius: 8px;
  }
  input {
    border: 1px solid #0000004a;
    width: 60%;
    padding: 8px;
    border-radius: 8px;
  }
</style>
