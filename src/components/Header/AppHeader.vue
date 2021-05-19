<template>
  <div
    class="header-background"
    :style="{ backgroundImage: `url(${backgroundImage}` }"
  >
    <slot name="header-navigation"></slot>
    <slot name="header-feature"></slot>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
    },
    bg: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    backgroundImage() {
      return this.bg
        ? !this.src
          ? "/images/misc/home-bg.jpg"
          : `/images/misc/${this.src}.jpg`
        : "none";
    },
  },
};
</script>

<style lang="scss">
.header-background {
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.35),
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.35)
  );
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top left;

  // @media (max-width: 1100px){
  //     ${({ doNotShowOnSmallPort }) => doNotShowOnSmallPort && `background: none`}
  // }
}

.header-frame {
  display: flex;
  margin: 0 56px;
  height: 100px;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
}
</style>