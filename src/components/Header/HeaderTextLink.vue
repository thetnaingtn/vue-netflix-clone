<template>
  <a class="header-textlink" :style="{ fontWeight: active ? 700 : 'normal' }">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.header-textlink {
  color: #fff;
  text-decoration: none;
  margin-right: 30px;

  cursor: pointer;

  &:hover {
    font-weight: bold;
  }

  &:last-of-type {
    margin-right: 0;
  }
}
</style>