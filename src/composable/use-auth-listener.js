/* eslint-disable no-unused-vars */

import { reactive, toRefs } from "vue";

import { firebase } from "@/lib/firebase.prod";

const state = reactive({
    unSubscribe: null,
    user: JSON.parse(localStorage.getItem("authUser")),
})

const { unSubscribe, user } = toRefs(state);
function useAuthListener() {
    return new Promise((resolve) => {
        if (state.user) resolve();
        state.unSubscribe = firebase.auth().onAuthStateChanged(authUser => {
            console.log("listened");
            if (authUser) {
                localStorage.setItem("authUser", JSON.stringify(authUser))
                state.user = authUser;
            } else {
                localStorage.setItem("authUser", null)
                state.user = null;
            }
            resolve();
        })

    })
}


export {
    useAuthListener,
    unSubscribe,
    user
}
