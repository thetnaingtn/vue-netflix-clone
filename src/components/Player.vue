<template>
  <div>
    <teleport to="body">
      <div
        @click="() => (showPlayer = false)"
        v-if="showPlayer"
        class="player-overlay"
      >
        <div class="player-inner">
          <video id="netflix-videoplayer" controls>
            <source :src="src" type="video/mp4" />
          </video>
        </div>
      </div>
    </teleport>
    <button @click="() => (showPlayer = true)" class="player-button">
      Play
    </button>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
    },
  },
  data: () => ({
    showPlayer: false,
  }),
};
</script>

<style lang="scss" scoped>
.player-overlay {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.75);
}

.player-inner {
  position: relative;
  max-width: 900px;
  width: 100%;
  margin: auto;

  video {
    width: 100%;
    height: 100%;
  }
}

.player-button {
  background-color: #e50914;
  border-color: #ff0a16;
  width: 115px;
  height: 45px;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  font-size: 18px;
  height: 45px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0;

  &:hover {
    transform: scale(1.05);
    background-color: #ff0a16;
  }
}
</style>