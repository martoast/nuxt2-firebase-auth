<template>
    <div>
      <b-container>
        <h1 class="mb-4">
          Login page
        </h1>
        <b-form @submit.prevent="onSubmit">
          
            <b-input class="mb-3" placeholder="Enter Email address" v-model="form.email">
            </b-input>

     
            <b-input class="mb-3" type="password" placeholder="Enter password" v-model="form.password">
            </b-input>

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
    data() {
      return {
        loading: false,
        form: {
          email: null,
          password: null
        },
        errorCode: null,
        errorMessage: null
      }
    },
    methods: {
      async onSubmit() {
       this.loading = true;
        try {
          await this.$fire.auth.signInWithEmailAndPassword(this.form.email, this.form.password).then( authUser => {
            return authUser.user.getIdToken().then( idToken => {
              const expiresIn = 60 * 60 * 24 * 5 * 1000;
              // this.$fire.auth.createSessionCookie(idToken, { expiresIn })
              console.log(authUser.user.auth)
              // console.log(authUser.user.createSessionCookie(idToken, { expiresIn }))
              
            })
          })          

          // await this.$fire.auth.signOut
          // window.location.assign('/dashboard');
        }
        catch (e) {
          console.error(e.message)
        }
        this.loading = false;
      }
    },
  }
  </script>
  