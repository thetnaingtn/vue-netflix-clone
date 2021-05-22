/* eslint-disable no-unused-vars */
import { reactive, toRefs } from "vue";

import { firebase } from "@/lib/firebase.prod";

export default function useContent(target) {
    const content = reactive({
        series: [],
        films: []
    });

    firebase
        .firestore()
        .collection(target)
        .get()
        .then(snapshot => {
            const allContent = snapshot.docs.map(contentObj => ({
                ...contentObj.data(),
                docId: contentObj.id
            }));
            content[target] = allContent;
        })
        .catch(error => {
            console.log(error);
        })

    return { ...toRefs(content) }

}