<template>
  <div class="card">
    <p class="card-title">{{ card.title }}</p>
    <div class="card-entities">
      <div
        @click="setItemFeature(item)"
        v-for="item in card.data"
        class="card-item"
        :key="item.docId"
      >
        <img
          :src="`/images/${category}/${item.genre}/${item.slug}/small.jpg`"
          alt=""
          class="card-image"
        />
        <div class="card-meta">
          <p class="card-subtitle">{{ item.title }}</p>
          <p class="card-text">{{ item.description }}</p>
        </div>
      </div>
    </div>
    <CardFeature
      v-model:showFeature="showFeature"
      :src="`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`"
      v-bind="{ itemFeature }"
    />
  </div>
</template>

<script>
import CardFeature from "./CardFeature";
export default {
  components: {
    CardFeature,
  },
  props: {
    card: {
      type: Object,
      default() {
        return {};
      },
    },
    category: {
      type: String,
    },
  },
  data: () => ({
    showFeature: false,
    itemFeature: {},
  }),
  methods: {
    setItemFeature(item) {
      this.showFeature = true;
      this.itemFeature = item;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  & > .card-title {
    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }
}
.card-title {
  font-size: 24px;
  font-weight: bold;
  color: #e5e5e5;
  margin-left: 56px;
  margin-right: 56px;
  margin-top: 0;
}

.card-subtitle {
  font-size: 12px;
  color: #fff;
  margin-top: 0;
  margin-bottom: 0;
  font-weight: bold;
  display: none;
  user-select: none;
}

.card-entities {
  display: flex;
  flex-direction: row;
}

.card-item {
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  cursor: pointer;
  position: relative;
  transition: transform 0.2s;

  @media (min-width: 1200px) {
    &:hover .card-meta,
    &:hover .card-text,
    &:hover .card-subtitle {
      display: block;
      z-index: 100;
    }
  }

  &:hover {
    transform: scale(1.3);
    z-index: 99;
  }

  &:first-of-type {
    margin-left: 56px;
    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-right: 56px;
    @media (max-width: 1000px) {
      margin-right: 30px;
    }
  }
}

.card-image {
  max-width: 305px;
  height: auto;
  cursor: pointer;
  width: 100%;
  border: 0;
  padding: 0;
  margin: 0;
}

.card-meta {
  position: absolute;
  display: none;
  bottom: 0;
  padding: 10px;
  background: #0000008f;
}

.card-text {
  user-select: none;
  color: #fff;
  margin-top: 5px;
  margin-bottom: 0;
  line-height: normal;
  font-size: 10px;
}
</style>