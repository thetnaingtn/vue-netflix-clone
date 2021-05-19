<template>
  <button
    class="header-picture"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
    },
  },
  computed: {
    backgroundImage() {
      return this.src ? `/images/users/${this.src}.png` : "none";
    },
  },
};
</script>

<style lang="scss" scoped>
.header-picture {
  background-size: contain;
  border: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
}
</style>