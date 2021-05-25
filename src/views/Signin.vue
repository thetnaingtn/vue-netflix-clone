<template>
  <AppHeader>
    <template v-slot:header-navigation>
      <AppHeaderNavigation />
    </template>
    <template v-slot:header-feature>
      <Form @formSubmit="signIn" v-bind="{ error }" />
    </template>
  </AppHeader>
  <AppFooter />
</template>

<script>
import { firebase } from "@/lib/firebase.prod";

import AppHeader from "@/components/Header/AppHeader";
import AppFooter from "@/components/AppFooter";
import AppHeaderNavigation from "@/components/Header/AppHeaderNavigation";
import Form from "@/components/Form";

export default {
  components: {
    AppFooter,
    AppHeader,
    AppHeaderNavigation,
    Form,
  },
  data: () => ({
    error: "",
  }),
  methods: {
    signIn({ emailAddress, password }) {
      firebase
        .auth()
        .signInWithEmailAndPassword(emailAddress, password)
        .then(() => {
          this.$router.push({ name: "Browse" });
        })
        .catch((error) => {
          console.log(error);
          this.error = error.message;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>