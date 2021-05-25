<template>
  <AppHeader>
    <template v-slot:header-navigation>
      <AppHeaderNavigation />
    </template>
    <template v-slot:header-feature>
      <Form @formSubmit="signUp" v-bind="{ error }" />
    </template>
  </AppHeader>
  <AppFooter />
</template>

<script>
import AppHeader from "@/components/Header/AppHeader";
import AppFooter from "@/components/AppFooter";
import AppHeaderNavigation from "@/components/Header/AppHeaderNavigation";
import Form from "@/components/Form";

import { firebase } from "@/lib/firebase.prod";

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
    signUp({ firstName, emailAddress, password }) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(emailAddress, password)
        .then((result) => {
          result.user
            .updateProfile({
              displayName: firstName,
              photoURL: Math.floor(Math.random() * 5) + 1,
            })
            .then(() => {
              this.$router.push({ name: "Browse" });
            });
        })
        .catch((error) => {
          this.error = error.message;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>