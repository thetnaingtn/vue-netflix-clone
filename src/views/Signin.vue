<template>
  <AppHeader>
    <template v-slot:header-navigation>
      <AppHeaderNavigation />
    </template>
    <template v-slot:header-feature>
      <Form />
    </template>
  </AppHeader>
</template>

<script>
import AppHeader from "@/components/Header/AppHeader";
import AppHeaderNavigation from "@/components/Header/AppHeaderNavigation";
import Form from "@/components/Form";

export default {
  components: {
    AppHeader,
    AppHeaderNavigation,
    Form,
  },
};
</script>

<style lang="scss" scoped>
</style>