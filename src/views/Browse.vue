<template>
  <SelectProfile v-if="!profile.displayName" />
</template>

<script>
import SelectProfile from "@/components/SelectProfile";
import { getProfile } from "@/store/user";

export default {
  components: {
    SelectProfile,
  },
  setup() {
    const profile = getProfile;
    return {
      profile,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>