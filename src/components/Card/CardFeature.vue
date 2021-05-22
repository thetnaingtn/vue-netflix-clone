<template>
  <div
    :style="{ backgroundImage: `url(${src})` }"
    class="card-feature"
    v-if="showFeature"
  >
    <div class="card-feature-content">
      <p class="card-feature-title">{{ itemFeature.title }}</p>
      <p class="card-feature-text">{{ itemFeature.description }}</p>
      <button @click="closeFeature" class="card-feature-close">
        <img src="/images/icons/close.png" />
      </button>

      <CardGroup alignItems="center" margin="30px 0" flexDirection="row">
        <div :style="{ backgroundColor }" class="card-feature-maturity">
          {{ maturity }}
        </div>
        <p class="card-feature-text bold-text">
          {{
            `${itemFeature.genre
              .charAt(0)
              .toUpperCase()}${itemFeature.genre.slice(1)}`
          }}
        </p>
      </CardGroup>
    </div>
  </div>
</template>

<script>
import CardGroup from "@/components/Card/CardGroup";
export default {
  components: {
    CardGroup,
  },
  props: {
    src: {
      type: String,
    },
    showFeature: {
      type: Boolean,
    },
    itemFeature: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    maturity() {
      return this.itemFeature.maturity < 12 ? "PG" : this.itemFeature.maturity;
    },
    backgroundColor() {
      return this.itemFeature.maturity >= 15 ? "#f44336" : "#2f9600";
    },
  },
  methods: {
    closeFeature() {
      this.$emit("update:showFeature", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.card-feature {
  position: relative;
  height: 360px;
  background-color: black;
  background-size: contain;
  background-position-x: right;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;

  @media (max-width: 1000px) {
    height: auto;
    background-size: auto;

    .card-feature-title {
      font-size: 20px;
      line-height: 20px;
      margin-bottom: 10px;
    }
    .card-feature-text {
      font-size: 14px;
    }
  }
}

.card-feature-title {
  font-size: 24px;
  font-weight: bold;
  color: #e5e5e5;
  margin-left: 0;
  margin-right: 56px;
  margin-top: 0;
}

.card-feature-content {
  margin: 56px;
  max-width: 500px;
  line-height: normal;
  @media (max-width: 1000px) {
    margin: 30px;
    max-width: none;
  }
}

.card-feature-close {
  color: #fff;
  cursor: pointer;
  border: 0;
  background-color: transparent;
  position: absolute;
  right: 20px;
  top: 20px;
  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }
}

.card-feature-maturity {
  border-radius: 15px;
  width: 28px;
  line-height: 28px;
  text-align: center;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-right: 10px;
  font-size: 12px;
}

.card-feature-text {
  font-size: 18px;
  font-weight: "normal";
  color: #fff;
  margin: 0;

  @media (max-width: 600px) {
    line-height: 22px;
  }
}

.bold-text {
  font-weight: bold;
}
</style>