<template>
  <div class="accordion-item">
    <div class="accordion-header" @click="toggleBody">
      {{ item.header }}
      <img :src="toggleIcon" />
    </div>
    <div class="accordion-body" :class="toggle ? 'open' : 'closed'">
      <span>{{ item.body }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
  },
  data: () => ({
    toggle: false,
  }),
  computed: {
    toggleIcon() {
      return this.toggle
        ? "/images/icons/close-slim.png"
        : "/images/icons/add.png";
    },
  },
  methods: {
    toggleBody() {
      this.toggle = !this.toggle;
    },
  },
};
</script>

<style lang="scss" scoped>
.accordion-item {
  color: white;
  margin: auto;
  margin-bottom: 10px;
  max-width: 728px;
  width: 100%;

  &:first-of-type {
    margin-top: 3em;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 1px;
  font-size: 26px;
  font-weight: normal;
  background: #303030;
  padding: 0.8em 1.2em 0.8em 1.2em;
  user-select: none;
  align-items: center;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
    user-select: none;

    @media (max-width: 600px) {
      width: 16px;
    }
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
}

.accordion-body {
  font-size: 26px;
  font-weight: normal;
  line-height: normal;
  background: #303030;
  white-space: pre-wrap;
  user-select: none;
  overflow: hidden;

  &.closed {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  }
  &.open {
    max-height: 1200px;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  }

  span {
    display: block;
    padding: 0.8em 2.2em 0.8em 1.2em;
  }

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
}
</style>