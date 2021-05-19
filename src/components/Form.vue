<template>
  <div class="form-container">
    <div v-if="error" class="form-error">{{ error }}</div>
    <h1 class="form-title">
      {{ isSignIn ? "Sign In" : "Sign Up" }}
    </h1>
    <form class="form-base" @submit.prevent="formSubmit" method="post">
      <input
        v-if="!isSignIn"
        placeholder="First Name"
        v-model="firstName"
        class="form-input"
        type="text"
      />
      <input
        placeholder="Email Address"
        v-model="emailAddress"
        class="form-input"
        type="text"
      />
      <input
        placeholder="Password"
        class="form-input"
        v-model="password"
        type="password"
      />
      <button class="form-submit" type="submit">
        {{ isSignIn ? "Sign In" : "Sign Up" }}
      </button>
    </form>
    <p class="form-text">
      {{ isSignIn ? "New to Netflix?" : "Already have a account?" }}
      <router-link
        class="form-text-link"
        :to="isSignIn ? ROUTES.SIGN_UP : ROUTES.SIGN_IN"
      >
        {{ isSignIn ? "Sign Up" : "Sign In Now" }}
      </router-link>
    </p>
    <p class="form-smalltext">
      This page is protected by Google reCAPTCHA to ensure you're not a bot.
      Learn more.
    </p>
  </div>
</template>

<script>
import * as ROUTES from "@/constants/routes";

export default {
  props: {
    error: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    ROUTES,
    firstName: "",
    emailAddress: "",
    password: "",
  }),
  computed: {
    isSignIn() {
      return this.$route.name === "Sign In";
    },
  },
  methods: {
    formSubmit() {
      let { firstName, emailAddress, password } = this;
      this.$emit("formSubmit", { firstName, emailAddress, password });
    },
  },
};
</script>

<style lang="scss" scoped>
.form-title {
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
}

.form-container {
  display: flex;
  flex-direction: column;
  min-height: 660px;
  max-width: 450px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  padding: 60px 68px 40px;
  border-radius: 5px;
  margin: auto;
  margin-bottom: 100px;
}

.form-base {
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
}

.form-input {
  background: #333;
  border-radius: 4px;
  border: 0;
  color: #fff;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 30px;
  }
}

.form-submit {
  background: #e50914;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 24px 0 12px;
  padding: 16px;
  border: 0;
  color: white;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
}

.form-text-link {
  text-decoration: none;
  color: #fff;

  &:hover {
    text-decoration: underline;
  }
}

.form-text {
  color: #737373;
  font-size: 16px;
  font-weight: 500;
}

.form-smalltext {
  margin-top: 10px;
  font-size: 13px;
  line-height: normal;
  color: #8c8c8c;
}

.form-error {
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
}
</style>