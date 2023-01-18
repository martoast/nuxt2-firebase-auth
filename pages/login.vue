<template>
    <div>
      <b-container>
        <h1 class="mb-4">
          Login page
        </h1>
        <b-form @submit.prevent="onSubmit">
          <b-input-container>
            <b-input class="mb-3" type="username" placeholder="Enter Email address" v-model="form.email">
            </b-input>
          </b-input-container>
          <b-input-container>
            <b-input class="mb-3" type="password" placeholder="Enter password" v-model="form.password">
            </b-input>
          </b-input-container>
          <b-btn @click="onSubmit">
            submit
          </b-btn>
        </b-form>
      </b-container>
    </div>
  </template>
  
  <script>
  export default {
    name: 'loginPage',
    mounted() {
      console.log(this.$fire.auth)
    },
    data() {
      return {
        form: {
          email: null,
          password: null
        },
        user: null,
        errorCode: null,
        errorMessage: null
      }
    },
    methods: {
      async onSubmit() {
        await this.$fire.auth.signInWithEmailAndPassword(this.form.email, this.form.password).then((userCredential) => {
          // Signed in 
          this.user = userCredential.user;
          console.log("Log in was successfull! ", this.user)
        })
        .catch((error) => {
          this.errorCode = error.code;
          this.errorMessage = error.message;
        });
      }
    },
  }
  </script>
  