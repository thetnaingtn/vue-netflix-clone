<template>
  <div class="header-feature">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header-feature {
  padding: 150px 0 500px;
  flex-direction: column;
  align-items: normal;
  width: 50%;

  display: flex;
  margin: 0 56px;
  height: 100px;
  justify-content: space-between;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }

  @media (max-width: 1100px) {
    display: none;
  }
}
</style>