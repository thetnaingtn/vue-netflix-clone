import { reactive, toRefs } from "vue";

import { firebase } from "@/lib/firebase.prod";

export default function useAuthListener() {
    const state = reactive({
        listener: null,
        user: localStorage.getItem("authUser"),
    })

    state.listener = firebase.auth().onAuthStateChanged(authUser => {
        if (authUser) {
            localStorage.setItem("authUser", JSON.stringify(authUser));
            state.user = authUser;
        } else {
            localStorage.removeItem("authUser")
            state.user = null;
        }
    })

    return { ...toRefs(state) }
}
