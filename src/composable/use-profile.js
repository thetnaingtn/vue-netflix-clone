import { reactive, readonly } from "vue";

const profile = reactive({
    displayName: "",
    photoURL: "",
})

const setProfile = ({ displayName, photoURL } = {}) => {
    profile.displayName = displayName;
    profile.photoURL = photoURL;
}

const getProfile = () => {
    return readonly(profile)
}

export {
    setProfile,
    getProfile,
}