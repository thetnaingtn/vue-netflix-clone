<template>
  <div class="profile-container">
    <h1 class="profile-title">Who's watching?</h1>
    <ul class="profile-list">
      <li @click="selectProfile" class="profile-item">
        <img
          :src="profileImage"
          alt="Profile Picture"
          class="profile-picture"
        />
        <p class="profile-name">{{ user.displayName }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import useAuthListener from "@/composable/use-auth-listener";
import { setProfile } from "@/composable/use-profile.js";
import { onUnmounted } from "@vue/runtime-core";

export default {
  setup() {
    const { user, listener } = useAuthListener();
    onUnmounted(() => {
      listener.value();
    });
    return {
      user,
    };
  },
  computed: {
    profileImage() {
      return this.user.photoURL
        ? `/images/users/${this.user.photoURL}.png`
        : `images/misc/loading.gif`;
    },
  },
  methods: {
    selectProfile() {
      setProfile({
        displayName: this.user.displayName,
        photoURL: this.user.photoURL,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.profile-container {
  display: flex;
  flex-direction: column;
  max-width: 80%;
  margin: auto;
  justify-content: center;
  align-items: center;
}

.profile-list {
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
}

.profile-item {
  max-width: 200px;
  max-height: 200px;
  list-style-type: none;
  text-align: center;
  margin-right: 30px;

  &:hover > .profile-picture {
    border: 3px solid #fff;
  }

  &:hover .profile-name {
    font-weight: bold;
    color: #fff;
  }

  &:last-of-type {
    margin-right: 0;
  }
}

.profile-picture {
  max-width: 150px;
  width: 100%;
  height: auto;
  cursor: pointer;
  border: 3px solid black;
}

.profile-name {
  color: #808080;
  text-overflow: ellipsis;
  font-size: 16px;

  &:hover {
    font-weight: bold;
    color: #e5e5e5;
  }
}

.profile-title {
  width: 100%;
  color: #fff;
  font-size: 48px;
  font-weight: 500;
  text-align: center;
}
</style>