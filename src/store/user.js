/* eslint-disable no-unused-vars */
import { ref, computed, onUnmounted } from 'vue';
import { firebase } from '@/lib/firebase.prod';

const store = ref({ user: localStorage.getItem("authUser") });

const getUser = computed(() => store.value.user);

const setUser = (user) => {
    store.value.user = user;
}

const fetchUser = async () => {
    const listener = firebase.auth().onAuthStateChanged(authUser => {
        if (authUser) {
            console.log("auth", authUser);
            localStorage.setItem("authUser", JSON.stringify(authUser));
            setUser(authUser);
        } else {
            console.log("auth", authUser);
            localStorage.removeItem("authUser")
            setUser(null);
        }
    })

    onUnmounted(() => listener());
}

export {
    getUser,
    fetchUser
}