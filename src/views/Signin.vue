<template>
  <AppHeader>
    <template v-slot:header-navigation>
      <AppHeaderNavigation />
    </template>
    <template v-slot:header-feature>
      <Form @formSubmit="signIn" v-bind="{ error }" />
    </template>
  </AppHeader>
</template>

<script>
import { firebase } from "@/lib/firebase.prod";

import AppHeader from "@/components/Header/AppHeader";
import AppHeaderNavigation from "@/components/Header/AppHeaderNavigation";
import Form from "@/components/Form";

export default {
  components: {
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