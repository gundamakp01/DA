<template>
  <section id="login">
    <div class="container">
      <router-link to="/" aria-current="page">
        <img src="../assets/img/logo.png" alt="logo">
      </router-link>
      <h1>Login</h1>
      <label for="email">E-Mail</label>
      <input type="email" v-model="v$.email.$model" id="email" placeholder="Email Address">
      <div class="input-errors" v-for="(error, index) of v$.email.$errors" :key="index">
        <div class="error-msg">{{ error.$message }}</div>
      </div>

      <label for="password">Password</label>
      <input type="password" v-model="v$.password.$model" id="password" placeholder="Password">
      <div class="input-errors" v-for="(error, index) of v$.password.$errors" :key="index">
        <div class="error-msg">{{ error.$message }}</div>
      </div>

      <a @click="forgotPassword" class="input-errors text-end" style="cursor: pointer;">Forgot password</a>
      <button @click="login" type="button">Login</button>

      <router-link to="/signup">
        <button class="button_1">
          Sign Up
        </button>
      </router-link>

      <!-- <router-link to="/signup" class="link">
        <h4>Sign Up</h4>
      </router-link> -->
    </div>
  </section>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";
import { LoginService } from "@/services";
import { userStore } from "@/stores/userStore";

export default {
  name: "login",
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      email: "",
      password: ""
    };
  },
  validations() {
    return {
      email: {
        required: helpers.withMessage("* Please type Your Email Address.", required),
        email
      },
      password: {
        required: helpers.withMessage("* Please type Your Password.", required)
      }
    };
  },
  methods: {
    async login() {
      const isFormCorrect = await this.v$.$validate()

      if (isFormCorrect == true) {
        const resp = await LoginService.login({ email: this.email, password: this.password });
        await userStore().login(resp.data)
        if (resp.data.user.id === 1) {
          this.$router.push('/admin');
        } else {
          this.$router.push({ name: "Home" });
        }
      }
    },
  }
};
</script>
<style scoped>
img {
  width: 220px !important;
  height: auto;
}
</style>
